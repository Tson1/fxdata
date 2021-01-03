import { getCsvs } from './fileUtil';
import { messageHandler, truncateTable, importTmp } from './fxdal';
import * as R from 'ramda';
async function importByRoot(rootDir: string) {
    truncateTable('dataTmp');
    // const fdstr =
    //     'C:\\gitTmp\\gitRef\\FX-1-Minute-Data\\2000-Jun2019\\eurjpy\\';
    const result = await getCsvs(rootDir);
    let fnImport = async (f: string) => await importTmp(f);
    // R.map(fnImport)(result);

    for (let i = 0; i < result.length; i++) {
        const f = result[i];
        await fnImport(f);
    }
}

export { importByRoot };
