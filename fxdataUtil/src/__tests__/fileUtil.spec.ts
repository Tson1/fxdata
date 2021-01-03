import { getCsvs } from '../fileUtil';

test('cangetCsvs', async () => {
    // Arrange
    const fdstr =
        'C:\\gitTmp\\gitRef\\FX-1-Minute-Data\\2000-Jun2019\\eurjpy\\';
    const result = await getCsvs(fdstr);
    console.info(result);
});
