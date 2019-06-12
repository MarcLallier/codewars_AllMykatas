/*#_8kyu_#_SQL Basics: Simple SUM*/

--  For this challenge you need to create a simple SUM statement that will sum all the ages.

--  people table schema
--  id
--  name
--  age
--  select table schema
--  age_sum (sum of ages)


SELECT sum(age) AS age_sum FROM people