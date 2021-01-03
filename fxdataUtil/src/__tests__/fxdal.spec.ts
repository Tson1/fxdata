import { messageHandler, truncateTable, importTmp } from '../fxdal';
test('canmessageHandler', async () => {
    // Arrange
    await messageHandler();
});

//importTmp
test('canimportTmp', async () => {
    // Arrange
    truncateTable('dataTmp');
    const sqlstr =
        'C:\\gitTmp\\gitRef\\FX-1-Minute-Data\\2000-Jun2019\\eurjpy\\DAT_ASCII_EURJPY_M1_2016.csv';
    await importTmp(sqlstr);
});
