import {RAAS} from "../../../core/RAAS.js";
import {ArrayCriteria} from "../ArrayCriteria.js";

export class RAASSIAManyCitiesCriteria extends ArrayCriteria<RAAS, 'UFMUN'> {
    static set(cityCode: string[]) {
        const expression = /^\d+$/;
        cityCode.every(city => {
            expression.test(city)  || InvalidCharacter.exception('O código do município deve conter apenas números.');
            //cityCode.length === 6 || InvalidLength.exception('O código do município é o de 6 digítos.')
        })
        return new RAASSIAManyCitiesCriteria('RAASSIAManyCitiesCriteria', cityCode, 'UFMUN')
    }
}
