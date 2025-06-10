// @filename: JobScheduler.ts

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

import {JobRunner} from "./JobRunner.js";
import {Command} from "../Command.js";
import {Records} from "../../core/Records.js";
import {Criteria} from "../../interface/criteria/Criteria.js";
import {JobMessage} from "./JobMessage.js";

class FailToScheduleJob extends Error {
    constructor() {
        super(`The job could not be scheduled.`)
        this.name = 'FailToScheduleJob';
        this.cause = 'Some problem occurred when scheduling the job.'
    }

    static exception() {
        throw new FailToScheduleJob()
    }
}

export class JobScheduler<R extends Records> implements Command {
    private filesProcessed: number = 0;
    private constructor(readonly MAX_CONCURRENT_PROCESSES:number = 2, readonly criteria?: Criteria<R>[], readonly DATA_PATH?: string) {
    }

    static init(MAX_CONCURRENT_PROCESSES?:number, criterias?: Criteria<Records>[], DATA_PATH?: string) {
        return new JobScheduler(MAX_CONCURRENT_PROCESSES, criterias, DATA_PATH)
    }

    incrementFilesProcessed(qnt: number = 1) {
        this.filesProcessed = this.filesProcessed + qnt;
        return this.filesProcessed
    }

    async exec(chunk: string[] | JobMessage<R>[], output: 'stdout' | 'file' = 'file', jobScript: string, callback?: Function): Promise<void> {
        try {
            await JobRunner
                .init(jobScript)
                .exec(
                    {
                        file: chunk[this.filesProcessed] as string,
                        output,
                        criteria: this.criteria,
                        dataPath: this.DATA_PATH
                    },
                    callback
                );

            this.incrementFilesProcessed();

            if(this.filesProcessed < chunk.length) {
                return this.exec(chunk, output, jobScript, callback);
            }

            return Promise.resolve();
        } catch (_) {
            FailToScheduleJob.exception()
        }
    }
}
