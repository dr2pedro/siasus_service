// @filename: exceptions.ts

/**
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

class CanNotExcludeDbcFile extends Error {
    constructor(file: string) {
        super(`A error ocurred when deleting file: ${ file }`)
        this.name = 'CanNotExcludeDbcFile';
        this.cause = 'The file was already excluded.'
    }

    static exception(file: string) {
        throw new CanNotExcludeDbcFile(file)
    }
}

class CouldNotConnect extends Error {
    private constructor(message?: string) {
        super(message || `Some connection error ocurred.`)
        this.name = 'CouldNotConnect';
        this.cause = 'There is no particulary reason except that the connection could not complete.'
    }

    static exception(message?: string) {
        throw new CouldNotConnect(message)
    }
}

class InvalidCharacter extends Error {
    private constructor(message?: string) {
        super(message || `Invalid InvalidCharacter.`)
        this.cause = `Was provided some invalid characters.`;
        this.name = 'InvalidCharacter';
    }

    static exception(message?: string) {
        throw new InvalidCharacter(message)
    }
}

class InvalidLength extends Error {
    private constructor(message?: string, length?: number,) {
        super(message || `Invalid Length, id must contains: '${length}' elements.`)
        this.cause = `Was provided less/more elements than should have. Should have ${ length } elements.`;
        this.name = 'InvalidLength';
    }

    static exception(message?: string, length?: number, ) {
        throw new InvalidLength(message, length)
    }
}

export {
    CanNotExcludeDbcFile,
    CouldNotConnect,
    InvalidCharacter,
    InvalidLength
}