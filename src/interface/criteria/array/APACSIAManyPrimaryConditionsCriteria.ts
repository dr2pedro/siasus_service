import {APAC} from "../../../core/APAC.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class APACSIAManyPrimaryConditionsCriteria extends ArrayCriteria<APAC, 'AP_CIDPRI'> {
    static set(conditionCode: string[]) {
        return new APACSIAManyPrimaryConditionsCriteria('APACSIAManyPrimaryConditionsCriteria', conditionCode, 'AP_CIDPRI')
    }
}
