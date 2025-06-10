import {BPA} from "../../../core/BPA.js";
import {StringCriteria} from "../StringCriteria.js";

export class BPASIASingleOriginDocument extends StringCriteria<BPA, 'PA_DOCORIG'> {
    static set<S extends string = 'P' | 'C' | 'A' | 'B' | 'I'>(typeOfDocument: S) {
        return new BPASIASingleOriginDocument('BPASIASingleOriginDocument', typeOfDocument, 'PA_DOCORIG')
    }
}
