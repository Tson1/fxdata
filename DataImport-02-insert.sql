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

