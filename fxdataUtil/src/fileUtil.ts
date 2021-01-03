import fs from 'fs';
import path from 'path';
import * as R from 'ramda';
// function getCsvs(folderNm: string) {
//     console.info(folderNm);
//     fs.readdir(folderNm, function (err, files) {
//         // console.info(files);
//         if (err) throw err;
//         var fileList = files.filter(function (file) {
//             return (
//                 fs.statSync(path.join(folderNm, file)).isFile() &&
//                 /.*\.csv$/.test(file)
//             ); //絞り込み
//         });
//         // console.log(fileList);
//         return fileList;
//     });
// }

async function getCsvs(folderNm: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        return fs.readdir(folderNm, (err, files) => {
            if (err != null) {
                reject(err);
            } else {
                var fileList = files.filter(function (file) {
                    return (
                        fs.statSync(path.join(folderNm, file)).isFile() &&
                        /.*\.csv$/.test(file)
                    ); //絞り込み
                });
                resolve(joinPath(folderNm, fileList));
            }
        });
    });
}
function joinPath(folderNm: string, flist: string[]): string[] {
    let fnJoin = (x: string) => path.join(folderNm, x);
    R.map(fnJoin)(flist);
    return R.map(fnJoin)(flist);
}

export { getCsvs };
