import {readFileSync} from "node:fs";
import {ICD10} from "./entity/ICD10.js";
import {
    BPASIAManyCitiesCriteria,
    BPASIAManyOriginDocumentCriteria,
    BPASIAManyPrimaryConditionsCriteria
} from "./criteria.js";
import {BasicFTPClient, SIAFTPGateway} from "./ftp.js";
import {SIA} from "./command.js";

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

const sia = SIA.init(
    gateway,
    [conditionFilter, cityFilter, docOrigin],
    undefined,
    'stdout',
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
sia.exec('./dist/job.js')