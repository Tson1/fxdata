/****** SSMS の SelectTopNRows コマンドのスクリプト  ******/
SELECT *
,SUBSTRING(tmstamp,1,4) as y
,SUBSTRING(tmstamp,5,2) as mt
,SUBSTRING(tmstamp,7,2) as d

,SUBSTRING(tmstamp,10,2) as h

,SUBSTRING(tmstamp,12,2) as m
,SUBSTRING(tmstamp,14,2) as s
  FROM [test].[dbo].[fxdata]
  where id=1;

  /* insert times  */
delete from [timeScAll]
INSERT INTO [dbo].[timeScAll]
           (
		   tmstamp

           ,[crtUser])
select 
           c1--tmstamp--, varchar(15),>
		   ,'tson1'
		   from[dbo].[dataTmp]



update [timeScAll]
set y=SUBSTRING(tmstamp,1,4) 
,mt=SUBSTRING(tmstamp,5,2) 
,d=SUBSTRING(tmstamp,7,2) 
,h=SUBSTRING(tmstamp,10,2) 
,m=SUBSTRING(tmstamp,12,2) 
,s='00'

select * from [timeScAll]

select * from [fxdata] as a
left join [timeScAll] as  b on(a.tmstamp=b.tmstamp)

