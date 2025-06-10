import {APAC} from "../../../core/APAC.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class APACSIAManyOriginDocumentCriteria extends ArrayCriteria<APAC, 'AP_DOCORIG'> {
    static set<S extends string[] = Array<'P' | 'C' | 'A' | 'B' | 'I'>>(typeOfDocument: S) {
        return new APACSIAManyOriginDocumentCriteria('APACSIAManyOriginDocumentCriteria', typeOfDocument, 'AP_DOCORIG')
    }
}
