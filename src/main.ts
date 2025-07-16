import {SIASUSService} from "./app/SIASUSService.js";
import {BasicFTPClient} from "./infra/ftp/BasicFTPClient.js";
import {SIAFTPGateway} from "./interface/gateway/SIAFTPGateway.js";
import { SIABasicParser } from "./interface/utils/SIABasicParser.js";
import {BIDictionary} from "./interface/utils/BIDictionary.js";

const MAX_CONCURRENT_PROCESSES = 5;
const FTP_HOST = 'ftp.datasus.gov.br';
const ftpClient = await BasicFTPClient.connect(FTP_HOST);
const gateway = await SIAFTPGateway.getInstanceOf(ftpClient!);

const filters = new Map<string, string | string[]>();
// filters.set('MUNPAC', "330455");

const sia = SIASUSService.init(
    gateway,
    filters,
    undefined,
    'stdout',
    MAX_CONCURRENT_PROCESSES
);

const parser = SIABasicParser.instanceOf(BIDictionary);
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
}, parser);

await sia.exec('./dist/infra/job/job.js').finally(
    () => {
        console.log('Done!')
        process.exit(0)
    }
);
