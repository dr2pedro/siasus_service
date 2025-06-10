import {BPA} from "../../../core/BPA.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class BPASIAManyCitiesCriteria extends ArrayCriteria<BPA, 'PA_MUNPCN'> {
    static set(cityCode: string[]) {
        const expression = /^\d+$/;
        cityCode.every(city => {
            expression.test(city)  || InvalidCharacter.exception('O código do município deve conter apenas números.');
            //cityCode.length === 6 || InvalidLength.exception('O código do município é o de 6 digítos.')
        })
        return new BPASIAManyCitiesCriteria('BPASIAManyCitiesCriteria', cityCode, 'PA_MUNPCN')
    }
}
