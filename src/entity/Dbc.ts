// @filename: Dbc.ts

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

import { statSync, unlink } from  "node:fs"
import { tmpdir } from "node:os";
import { parse } from "node:path";
import { createRequire } from 'module';
import { DBFFile, FieldDescriptor } from 'dbffile';
import {CanNotExcludeDbcFile} from "../exceptions.js";

const require = createRequire(import.meta.url);
const addon = require('../../addon/build/Release/addon');

export class Dbc {
    size!: number;
    fields!: FieldDescriptor[];

    private constructor(readonly dbf: DBFFile, private readonly io: { input: string, output: string}) {
        this.size = dbf.recordCount;
        this.fields = dbf.fields;

        /* if (process.platform !== 'linux') {
            OSNotSupported.exception();
        } */
    }

    static async load(inputFile: string) {
        const inputFilePath = parse(inputFile);
        const io = {
            input: inputFile,
            output: `${ tmpdir() }/${ inputFilePath.name}${ inputFilePath.ext }`
        }
        
        try {
            statSync(io.output);
        } catch(error: any) {
            addon(io);
        }

        let dbf = await DBFFile.open(io.output);
        return new Dbc(dbf, io)
    }

    async readBatch(count?: number): Promise<Record<string, unknown>[]> {
        const records = await this.dbf.readRecords(count || this.size);
        return records
    }

    remove(): void {
        const inputFilePath = parse(this.io.input);
        unlink(this.io.output, (error: any) => {
            if(error) CanNotExcludeDbcFile.exception(`${ inputFilePath.name}${ inputFilePath.ext }`);
            console.log(`${ inputFilePath.name}${ inputFilePath.ext } excluded.`)
        });
    }

    async forEachRecords(callback: (record: any) => Promise<any>) {
        for await (let record of this.dbf) {
            callback(record)
        }
    }
}
