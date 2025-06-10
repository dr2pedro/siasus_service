import {RAAS} from "../../../core/RAAS.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class RAASSIAManyOriginDocumentCriteria extends ArrayCriteria<RAAS, 'DOCORIG'> {
    static set<S extends string[] = Array<'P' | 'C' | 'A' | 'B' | 'I'>>(typeOfDocument: S) {
        return new RAASSIAManyOriginDocumentCriteria('RAASSIAManyOriginDocumentCriteria', typeOfDocument, 'DOCORIG')
    }
}
