import {RAAS} from "../../../core/RAAS.js";
import {StringCriteria} from "../StringCriteria.js";

export class RAASSIASinglePrimaryDisease extends StringCriteria<RAAS, 'CIDPRI'> {
    static set(conditionCode: string) {
        return new RAASSIASinglePrimaryDisease('RAASSIASinglePrimaryDisease', conditionCode, 'CIDPRI')
    }
}
