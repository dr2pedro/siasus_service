import {RAAS} from "../../../core/RAAS.js";
import {StringCriteria} from "../StringCriteria.js";

export class RAASSIASingleOriginDocument extends StringCriteria<RAAS, 'DOCORIG'> {
    static set<S extends string = 'P' | 'C' | 'A' | 'B' | 'I'>(typeOfDocument: S) {
        return new RAASSIASingleOriginDocument('RAASSIASingleOriginDocument', typeOfDocument, 'DOCORIG')
    }
}
