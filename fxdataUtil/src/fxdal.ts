// import * as sql from 'mssql';
// var sql = require('mssql');
import { ConnectionPool } from 'mssql';
// const config = {
//     user: 'test',
//     password: '12345678',
//     server: 'LAPTOP-C4C14N7P\\MSSQL2019',
//     database: 'test',
//     options: {
//         encrypt: true, // Use this if you're on Windows Azure
//     },
// };
const config = {
    user: 'test',
    password: '12345678',
    server: 'LAPTOP-C4C14N7P\\MSSQL2019', // You can use 'localhost\\instance' to connect to named instance
    // server: 'localhost\\MSSQL2019', // You can use 'localhost\\instance' to connect to named instance
    database: 'test',
    options: {
        encrypt: false, // Use this if you're on Windows Azure
    },
};
// const pool1 = new sql.ConnectionPool(config);
// const pool1Connect = pool1.connect();

// pool1.on('error', (err) => {
//     // ... error handler
//     console.error(err);
// });
const pool = new ConnectionPool(config);
const pool1Connect = pool.connect();
// function query(sqlStr: string) {
//     return new sql.ConnectionPool(config)
//         .connect()
//         .then((pool: any) => {
//             //return sql.query`select * from M05RIYU`;
//             return pool.query(sqlStr);
//         })
//         .catch((err: any) => {
//             // ... error checks
//             console.dir(err);
//             sql.close();
//         });

//     sql.on('error', (err: any) => {
//         // ... error handler
//         console.dir(err);
//     });
// }
async function query(sqlStr: string) {
    await pool1Connect; // ensures that the pool has been created
    try {
        const request = pool.request(); // or: new sql.Request(pool1)
        const result = await request.query(sqlStr);
        console.dir(result);
        console.info(result);
        return result;
    } catch (err) {
        console.error('SQL error', err);
    }
}
async function messageHandler() {
    const result = await query('select 1 as number');
}
async function truncateTable(tabname: string) {
    const sqlStr = `
        truncate table ${tabname}
    `;
    const result = await query(sqlStr);
}
async function importTmp(fName: string) {
    //C:\\gitTmp\\gitRef\\FX-1-Minute-Data\\2000-Jun2019\\eurjpy\\DAT_ASCII_EURJPY_M1_2016.csv
    const sqlStr = `
	BULK INSERT dataTmp
	FROM '${fName}'
	WITH (	   FIELDTERMINATOR = ';',	   KEEPNULLS,	   ROWTERMINATOR = '0x0a'	); 
    `;
    const result = await query(sqlStr);
}
// function runStoredProcedure() {
//     return pool1Connect
//         .then((pool) => {
//             pool.request() // or: new sql.Request(pool2)
//                 .input('input_parameter', sql.Int, 10)
//                 .output('output_parameter', sql.VarChar(50))
//                 .execute('procedure_name', (err, result) => {
//                     // ... error checks
//                     console.dir(result);
//                 });
//         })
//         .catch((err) => {
//             // ... error handler
//         });
// }

export { messageHandler, truncateTable, importTmp };
