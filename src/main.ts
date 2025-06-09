import {readFileSync} from "node:fs";
import {ICD10} from "./interface/utils/ICD10.js";
import {SIASUSService} from "./app/SIASUSService.js";
import {BPASIAManyPrimaryConditionsCriteria} from "./interface/criteria/array/BPASIAManyPrimaryConditionsCriteria.js";
import {BPASIAManyCitiesCriteria} from "./interface/criteria/array/BPASIAManyCitiesCriteria.js";
import {BPASIAManyOriginDocumentCriteria} from "./interface/criteria/array/BPASIAManyOriginDocumentCriteria.js";
import {BasicFTPClient} from "./infra/ftp/BasicFTPClient.js";
import {SIAFTPGateway} from "./interface/gateway/SIAFTPGateway.js";

const MAX_CONCURRENT_PROCESSES = 5
const FTP_HOST = 'ftp.datasus.gov.br'
const ftpClient = await BasicFTPClient.connect(FTP_HOST);
const cid = await ICD10.load();
const citiesJson = readFileSync('./assets/gd_cities.json');
const cities = JSON.parse(citiesJson.toString());

cid
    //.block('I')                                       // circulatorio
    .block('C')
//.block('J', /*{ start: '30', end: '989'}*/)          // respiratorio
//.block('E', { start: '10', end: '149'})          // diabetes
//.block('F')                                     // mental

const gateway = await SIAFTPGateway.getInstanceOf(ftpClient!);

const conditionFilter = BPASIAManyPrimaryConditionsCriteria.set(cid.list);
const cityFilter = BPASIAManyCitiesCriteria.set(cities);
const docOrigin = BPASIAManyOriginDocumentCriteria.set(['C', 'I']);

const sia = SIASUSService.init(
    gateway,
    [conditionFilter, cityFilter, docOrigin],
    undefined,
    'file',
    MAX_CONCURRENT_PROCESSES
);
await sia.subset({
    src: 'PA',
    states: ['RJ'],
    period: {
        start: {
            year: 2022,
            month: '03'
        },
        end: {
            year: 2022,
            month: '03'
        }
    }
});

await sia.exec('./dist/infra/job/job.js').finally(
    () => {
        console.log('Done!')
        process.exit(0)
    }
)