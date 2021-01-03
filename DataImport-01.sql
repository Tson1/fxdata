truncate table [test].[dbo].[dataTmp]
	 BULK INSERT dataTmp
	FROM 'C:\gitTmp\gitRef\FX-1-Minute-Data\2000-Jun2019\eurjpy\DAT_ASCII_EURJPY_M1_2016.csv'
	WITH (	   FIELDTERMINATOR = ';',	   KEEPNULLS,	   ROWTERMINATOR = '0x0a'	); 


	 BULK INSERT dataTmp
	FROM 'C:\gitTmp\gitRef\FX-1-Minute-Data\2000-Jun2019\eurjpy\DAT_ASCII_EURJPY_M1_2017.csv'
	WITH (	   FIELDTERMINATOR = ';',	   KEEPNULLS,	   ROWTERMINATOR = '0x0a'	); 


	 BULK INSERT dataTmp
	FROM 'C:\gitTmp\gitRef\FX-1-Minute-Data\2000-Jun2019\eurjpy\DAT_ASCII_EURJPY_M1_2018.csv'
	WITH (	   FIELDTERMINATOR = ';',	   KEEPNULLS,	   ROWTERMINATOR = '0x0a'	); 



/*
 BULK INSERT dataTmp
FROM 'C:\gitTmp\gitRef\FX-1-Minute-Data\2000-Jun2019\eurjpy\DAT_ASCII_EURJPY_M1_2018.csv'
WITH
(
   FIELDTERMINATOR = ';',
   KEEPNULLS,
   ROWTERMINATOR = '\n'
);
*/