import {APAC} from "../../../core/APAC.js";
import {StringCriteria} from "../StringCriteria.js";

export class APACSIASingleOriginDocument extends StringCriteria<APAC, 'AP_DOCORIG'> {
    static set<S extends string = 'P' | 'C' | 'A' | 'B' | 'I'>(typeOfDocument: S) {
        return new APACSIASingleOriginDocument('APACSIASingleOriginDocument', typeOfDocument, 'AP_DOCORIG')
    }
}
