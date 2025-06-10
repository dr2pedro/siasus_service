import {RAAS} from "../../../core/RAAS.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class RAASSIAManyPrimaryConditionsCriteria extends ArrayCriteria<RAAS, 'CIDPRI'> {
    static set(conditionCode: string[]) {
        return new RAASSIAManyPrimaryConditionsCriteria('RAASSIAManyPrimaryConditionsCriteria', conditionCode, 'CIDPRI')
    }
}
