// @filename: ArrayCriteria.ts

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

import {Records} from "../../core/Records.js";
import {Criteria} from "./Criteria.js";

export class ArrayCriteria<RecordType extends Records> implements Criteria<RecordType> {
    readonly name: string;
    constructor(readonly array: string[], readonly objProp: string) {
        this.name = objProp + '_FILTER';
    }

    match(item: RecordType): boolean {
        return this.array.includes(item[this.objProp])
    }
}
