import {APAC} from "../../../core/APAC.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class APACSIAManyCitiesCriteria extends ArrayCriteria<APAC, 'AP_UFMUN'> {
    static set(cityCode: string[]) {
        const expression = /^\d+$/;
        cityCode.every(city => {
            expression.test(city)  || InvalidCharacter.exception('O código do município deve conter apenas números.');
            //cityCode.length === 6 || InvalidLength.exception('O código do município é o de 6 digítos.')
        })
        return new APACSIAManyCitiesCriteria('APACSIAManyCitiesCriteria', cityCode, 'AP_UFMUN')
    }
}
