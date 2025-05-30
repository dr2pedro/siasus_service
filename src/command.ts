// @filename: command.ts

/*
 *     Copyright 2025 Pedro Paulo Teixeira dos Santos

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import {Criteria} from "./criteria.js";
import {Records} from "./records.js";
import {ChildProcess, fork, Serializable} from "node:child_process";
import {DATASUSGateway, SIAGateway} from "./gateway.js";
import {JobMessage, SIASubset, Subset} from "./utils.js";

export interface Command {
    init?(...params: any[]): any
    exec?(...params: any[]): any
}

export class GenericDATASUS<S extends Subset, G extends DATASUSGateway<S>> implements Command {
    private _files: string[] = [];
    private _chunks: string[][] = [[]];
    private _callback?: Function = undefined;
    get files() {
        return this._files
    }

    get chunks() {
        return this._chunks
    }

    constructor(
        private gateway: G,
        readonly DATA_PATH: string = './data/',
        readonly MAX_CONCURRENT_PROCESSES: number,
        readonly output: 'stdout' | 'file' = 'stdout',
        readonly filters: Criteria<Records>[],
        readonly callback?: Function,
    ) {}

    static init(gateway: DATASUSGateway<Subset>, filters: Criteria<Records>[] = [], callback?: Function, output: 'stdout' | 'file' = 'stdout', MAX_CONCURRENT_PROCESSES: number = 5, DATA_PATH: string = './data/') {
        return new GenericDATASUS(gateway, DATA_PATH, MAX_CONCURRENT_PROCESSES, output, filters, callback)
    }

    async subset(subset: S) {
        this._files = await this.gateway.list(subset, 'short') as string[];
        this._files = Array.from(new Set(this._files));
        this._chunks = SplitIntoChunks.define(this.MAX_CONCURRENT_PROCESSES).exec(this._files) as string[][];
    }

    async exec(jobScript?: string) {
        for await (let file of this._files) {
            if(this.output === 'file') console.log(`Downloading ${file}...`)
            await this.gateway.get(file, './data/' + file)
            if(this.output === 'file') console.log(`Download of ${file} completed.`)
        }
        let chunksProceeded = 0;
        if(this.output === 'file') console.log(`\nSending Jobs.\n`);
        while (chunksProceeded < this._chunks.length) {
            await SendChunkFilesToProceed.define(this.MAX_CONCURRENT_PROCESSES, this.filters, this.DATA_PATH).init(this._chunks[chunksProceeded], this.output, this.callback, jobScript).finally(() => {
                chunksProceeded = chunksProceeded + 1
            })
        }
        if(chunksProceeded == this._chunks.length) {
            this._files = [];
            this._chunks = [];
        }
        return
    }
}

export class ProcessFileInChildProcess<R extends Records> implements Command {
    private constructor(private jobScript: string = './dist/app/FakeJob.js') {
    }

    static define(jobScript?: string) {
        return new ProcessFileInChildProcess(jobScript)
    }

    async init(jobMsg: JobMessage<Records>, callback?: Function) {
        return new Promise((resolve, reject) => {
            const child: ChildProcess = fork(this.jobScript);
            child.on('exit', (code, signal) => {
                if (signal) {
                    reject(`Foi fechado pelo sinal: ${signal} com o código ${code}`)
                }
                resolve(true)
            });

            if(callback) {
                child.on('message', (msg: Serializable) => {
                    callback(msg)
                });
            }
            child.send(jobMsg!)
        })
    }
}

export class SendChunkFilesToProceed<R extends Records> implements Command {
    private filesProcessed: number = 0;
    private constructor(readonly MAX_CONCURRENT_PROCESSES:number = 2, readonly criteria?: Criteria<R>[], readonly DATA_PATH?: string) {
    }

    static define(MAX_CONCURRENT_PROCESSES?:number, criterias?: Criteria<Records>[], DATA_PATH?: string) {
        return new SendChunkFilesToProceed(MAX_CONCURRENT_PROCESSES, criterias, DATA_PATH)
    }

    incrementFilesProcessed(qnt: number = 1) {
        this.filesProcessed = this.filesProcessed + qnt;
        return this.filesProcessed
    }

    async init(chunk: string[] | JobMessage<R>[], output: 'stdout' | 'file' = 'file', callback?: Function, jobScript?: string) {
        return await
            ProcessFileInChildProcess
                .define(jobScript)
                .init(
                    {
                        file: chunk[this.filesProcessed] as string,
                        output,
                        criteria: this.criteria,
                        dataPath: this.DATA_PATH
                    },
                    callback
                )
                .finally(() => {
                    this.incrementFilesProcessed()
                    if(this.filesProcessed < this.MAX_CONCURRENT_PROCESSES && chunk[this.filesProcessed]) {
                        this.init(chunk, output, callback, jobScript)
                    }
                    return
                })
    }
}

export class SplitIntoChunks implements Command {
    private constructor(protected chunkSize: number) {
    }

    static define(chunkSize: number) {
        return new SplitIntoChunks(chunkSize)
    }

    exec(arr: any[]) {
        const chunks = [];
        for (let i = 0; i < arr.length; i += this.chunkSize) {
            chunks.push(arr.slice(i, i + this.chunkSize));
        }
        return chunks
    }
}

export class SIA extends GenericDATASUS<SIASubset, SIAGateway>{}
