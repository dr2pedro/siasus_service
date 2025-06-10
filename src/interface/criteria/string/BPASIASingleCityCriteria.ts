import {BPA} from "../../../core/BPA.js";
import {InvalidLength} from "../error/InvalidLength.js";
import {StringCriteria} from "../StringCriteria.js";

export class BPASIASingleCityCriteria extends StringCriteria<BPA, 'PA_UFMUN'> {
    static set(cityCode: string) {
        const expression = /^\d+$/;
        expression.test(cityCode)  || InvalidCharacter.exception('O código do município deve conter apenas números.');
        cityCode.length === 6 || InvalidLength.exception('O código do município é o de 6 digítos.')

        return new BPASIASingleCityCriteria('BPASIASingleCityCriteria', cityCode, 'PA_UFMUN')
    }
}