import {APAC} from "../../../core/APAC.js";
import {StringCriteria} from "../StringCriteria.js";

export class APACSIASinglePrimaryDisease extends StringCriteria<APAC, 'AP_CIDPRI'> {
    static set(conditionCode: string) {
        return new APACSIASinglePrimaryDisease('APACSIASinglePrimaryDisease', conditionCode, 'AP_CIDPRI')
    }
}
