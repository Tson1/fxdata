import { importByRoot } from '../importer';

test('importByRoot', async () => {
    jest.setTimeout(100000);
    // Arrange
    const fdstr =
        'C:\\gitTmp\\gitRef\\FX-1-Minute-Data\\2000-Jun2019\\eurjpy\\';
    const result = await importByRoot(fdstr);
    console.info(result);
});
