// @filename: utils.ts

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

export interface Subset {}

export type State = 'DF' | 'RJ' | 'SP' | 'AC' | 'AL' | 'AM' | 'AP' | 'BA' | 'CE' | 'ES' | 'GO' | 'MA' | 'MG' | 'MS' | 'MT' | 'PA' | 'PB' | 'PE' | 'PI' | 'PR' | 'RN' | 'RO' | 'RR' | 'RS' | 'SC' | 'SE' | 'TO'

export type SIASubset = Subset & {
    src: SIADatasource
} | {
    src: SIADatasource,
    states: State[]
} | {
    src: SIADatasource,
    states: State[],
    period: Period
}

export type Period = {
    start: {
        year: number,
        month: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'
    },
    end: {
        year: number,
        month: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'
    }
}

export type SIADatasource = 'AB' | 'ABO' | 'ACF' | 'AD' | 'AM' | 'AN' | 'AQ' | 'AR' | 'ATD' | 'PA' | 'PS' | 'SAD'

export type JobMessage<T> = {
    file: string,
    criteria?: Criteria<T>[],
    output: 'stdout' | 'file',
    dataPath: string | undefined
}