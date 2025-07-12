// @filename: JobRunner.ts

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

import {ChildProcess, fork, Serializable} from "node:child_process";
import {Command} from "../Command.js";
import {Records} from "../../core/Records.js";
import {JobMessage} from "./JobMessage.js";

export class JobRunner<R extends Records> implements Command {
    private constructor(private jobScript: string) {
    }

    static init(jobScript: string) {
        return new JobRunner(jobScript)
    }

    async exec(jobMsg: JobMessage<Records>, callback?: Function) {
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

            // A conversão não é mais necessária aqui já que o JobScheduler já envia como objeto
            child.send(jobMsg);
        })
    }

}