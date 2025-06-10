import {BPA} from "../../core/BPA.js";
import {RAAS} from "../../core/RAAS.js";
import {APAC} from "../../core/APAC.js";
import {BPASIAManyCitiesCriteria} from "./array/BPASIAManyCitiesCriteria.js";
import {APACSIAManyCitiesCriteria} from "./array/APACSIAManyCitiesCriteria.js";
import {RAASSIAManyCitiesCriteria} from "./array/RAASSIAManyCitiesCriteria.js";
import {BPASIAManyPrimaryConditionsCriteria} from "./array/BPASIAManyPrimaryConditionsCriteria.js";
import {APACSIAManyPrimaryConditionsCriteria} from "./array/APACSIAManyPrimaryConditionsCriteria.js";
import {RAASSIAManyPrimaryConditionsCriteria} from "./array/RAASSIAManyPrimaryConditionsCriteria.js";
import {BPASIAManyOriginDocumentCriteria} from "./array/BPASIAManyOriginDocumentCriteria.js";
import {APACSIAManyOriginDocumentCriteria} from "./array/APACSIAManyOriginDocumentCriteria.js";
import {RAASSIAManyOriginDocumentCriteria} from "./array/RAASSIAManyOriginDocumentCriteria.js";
import {BPASIASingleCityCriteria} from "./string/BPASIASingleCityCriteria.js";
import {APACSIASingleCityCriteria} from "./string/APACSIASingleCityCriteria.js";
import {RAASSIASingleCityCriteria} from "./string/RAASSIASingleCityCriteria.js";
import {BPASIASinglePrimaryDisease} from "./string/BPASIASinglePrimaryDisease.js";
import {APACSIASinglePrimaryDisease} from "./string/APACSIASinglePrimaryDisease.js";
import {RAASSIASinglePrimaryDisease} from "./string/RAASSIASinglePrimaryDisease.js";
import {BPASIASingleOriginDocument} from "./string/BPASIASingleOriginDocument.js";
import {APACSIASingleOriginDocument} from "./string/APACSIASingleOriginDocument.js";
import {RAASSIASingleOriginDocument} from "./string/RAASSIASingleOriginDocument.js";
import {Criteria} from "./Criteria.js";

export function deserializeSIACriteria(criteria: Criteria<BPA | RAAS | APAC>) {
    switch (criteria.name) {
        case 'BPASIAManyCitiesCriteria':
            return BPASIAManyCitiesCriteria.set(criteria.array!)
        case 'APACSIAManyCitiesCriteria':
            return APACSIAManyCitiesCriteria.set(criteria.array!)
        case 'RAASSIAManyCitiesCriteria':
            return RAASSIAManyCitiesCriteria.set(criteria.array!)
        case 'BPASIAManyPrimaryConditionsCriteria':
            return BPASIAManyPrimaryConditionsCriteria.set(criteria.array!)
        case 'APACSIAManyPrimaryConditionsCriteria':
            return APACSIAManyPrimaryConditionsCriteria.set(criteria.array!)
        case 'RAASSIAManyPrimaryConditionsCriteria':
            return RAASSIAManyPrimaryConditionsCriteria.set(criteria.array!)
        case 'BPASIAManyOriginDocumentCriteria':
            return BPASIAManyOriginDocumentCriteria.set(criteria.array!)
        case 'APACSIAManyOriginDocumentCriteria':
            return APACSIAManyOriginDocumentCriteria.set(criteria.array!)
        case 'RAASSIAManyOriginDocumentCriteria':
            return RAASSIAManyOriginDocumentCriteria.set(criteria.array!)
        case 'BPASIASingleCityCriteria':
            return BPASIASingleCityCriteria.set(criteria.str!)
        case 'APACSIASingleCityCriteria':
            return APACSIASingleCityCriteria.set(criteria.str!)
        case 'RAASSIASingleCityCriteria':
            return RAASSIASingleCityCriteria.set(criteria.str!)
        case 'BPASIASinglePrimaryDisease':
            return BPASIASinglePrimaryDisease.set(criteria.str!)
        case 'APACSIASinglePrimaryDisease':
            return APACSIASinglePrimaryDisease.set(criteria.str!)
        case 'RAASSIASinglePrimaryDisease':
            return RAASSIASinglePrimaryDisease.set(criteria.str!)
        case 'BPASIASingleOriginDocument':
            return BPASIASingleOriginDocument.set(criteria.str!)
        case 'APACSIASingleOriginDocument':
            return APACSIASingleOriginDocument.set(criteria.str!)
        case 'RAASSIASingleOriginDocument':
            return RAASSIASingleOriginDocument.set(criteria.str!)
        default:
            break;
    }
}
