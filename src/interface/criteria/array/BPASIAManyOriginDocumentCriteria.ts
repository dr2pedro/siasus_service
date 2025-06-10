import {BPA} from "../../../core/BPA.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class BPASIAManyOriginDocumentCriteria extends ArrayCriteria<BPA, 'PA_DOCORIG'> {
    static set<S extends string[] = Array<'P' | 'C' | 'A' | 'B' | 'I'>>(typeOfDocument: S) {
        return new BPASIAManyOriginDocumentCriteria('BPASIAManyOriginDocumentCriteria', typeOfDocument, 'PA_DOCORIG')
    }
}
