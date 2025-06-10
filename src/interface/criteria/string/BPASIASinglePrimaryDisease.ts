import {BPA} from "../../../core/BPA.js";
import {StringCriteria} from "../StringCriteria.js";

export class BPASIASinglePrimaryDisease extends StringCriteria<BPA, 'PA_CIDPRI'> {
    static set(conditionCode: string) {
        return new BPASIASinglePrimaryDisease('BPASIASinglePrimaryDisease', conditionCode, 'PA_CIDPRI')
    }
}
