import {BPA} from "../../../core/BPA.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class BPASIAManyPrimaryConditionsCriteria extends ArrayCriteria<BPA, 'PA_CIDPRI'> {
    static set(conditionCode: string[]) {
        return new BPASIAManyPrimaryConditionsCriteria('BPASIAManyPrimaryConditionsCriteria', conditionCode, 'PA_CIDPRI')
    }
}
