create or alter View UsrContactAgeDays
as 
select id as UsrId, Name as UsrName, BirthDate as UsrBirthDate, datediff(day,BirthDate,getdate()) as UsrAgeDays
from Contact