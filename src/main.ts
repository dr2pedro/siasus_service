import {readFileSync} from "node:fs";
import {ICD10} from "./interface/utils/ICD10.js";
import {SIASUSService} from "./app/SIASUSService.js";
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

const filters = new Map<string, string | string[]>();
filters.set('MUNPAC', "222222")

const sia = SIASUSService.init(
    gateway,
    filters,
    undefined,
    'stdout',
    MAX_CONCURRENT_PROCESSES
);
await sia.subset({
    src: 'BI',
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
);
