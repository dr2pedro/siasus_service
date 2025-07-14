// @filename: SIABasicParser.ts

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

import {SIAParser} from "./SIAParser.js";
import {BPA} from "../../core/BPA.js";
import {APAC} from "../../core/APAC.js";
import {RAAS} from "../../core/RAAS.js";

export class SIABasicParser implements SIAParser {
    record: BPA | APAC | RAAS | undefined

    private constructor(readonly dictionary: Map<string, (value: any) => any>) {
    }

    static instanceOf(dictionary: Map<string, (value: any) => any>) {
        return new SIABasicParser(dictionary);
    }

    parse(record: BPA | APAC | RAAS): BPA | APAC | RAAS {
        this.record = record;

        // esse parse pode virar abstrato e o código subir inespecífico como uma lib.
        // quando tiver que denormalizar vai ter que usar a mesma estrutura para CNES e
        // caso a record tenha AUTORIZ teria que consultar a APAC
        this.record.TPFIN = this.record.TPFIN + this.record.SUBFIN;
        delete this.record.SUBFIN

        for (const [field, value] of Object.entries(this.record)) {
            const parser = this.dictionary.get(field);
            if (parser && value !== undefined) {
                (this.record as any)[field] = parser(value);
            }
        }

        return this.record;
    }
}