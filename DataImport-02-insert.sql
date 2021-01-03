USE [test]
GO

INSERT INTO [dbo].[fxdata]
           ([pairKb]
           ,[tmstamp]
           ,[openBid]
           ,[hightBid]
           ,[lowBid]
           ,[closeBid]
           ,[crtUser])
select 
'eurjpy' --<pairKb, varchar(6),>
,c1   --        ,<tmstamp, varchar(15),>
,c2 --           ,<openBid, money,>
,c3 --           ,<hightBid, money,>
,c4 --           ,<lowBid, money,>
,c5 --           ,<closeBid, money,>
,'tson1'   --        ,<crtUser, varchar(35),>)
from [dataTmp]
order by c1


/*
SELECT *
,SUBSTRING(tmstamp,1,4) as y
,SUBSTRING(tmstamp,5,2) as mt
,SUBSTRING(tmstamp,7,2) as d

,SUBSTRING(tmstamp,10,2) as h

,SUBSTRING(tmstamp,12,2) as m
,SUBSTRING(tmstamp,14,2) as s
  FROM [test].[dbo].[fxdata]
  where id=1;

update [fxdata]
set y=SUBSTRING(tmstamp,1,4) 
,mt=SUBSTRING(tmstamp,5,2) 
,d=SUBSTRING(tmstamp,7,2) 
,h=SUBSTRING(tmstamp,10,2) 
,m=SUBSTRING(tmstamp,12,2) 
,s='00'

*/
