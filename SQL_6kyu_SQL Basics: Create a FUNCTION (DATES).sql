/*#_6kyu_#_SQL Basics: Create a FUNCTION (DATES)*/


-- For this challenge you need to create a basic Age Calculator function which calculates the age in years on the age field of the peoples table.

-- The function should be called agecalculator, it needs to take 1 date and calculate the age in years according to the date NOW and must return an integer.

-- You may query the people table while testing but the query must only contain the function on your final submit.

-- people table schema
-- id
-- name
-- age

CREATE FUNCTION agecalculator (annee timestamp) 
RETURNS integer AS 'SELECT CAST(EXTRACT(YEAR FROM AGE(annee)) AS int)'

LANGUAGE sql;


OU

CREATE FUNCTION agecalculator (annee timestamp) 
RETURNS integer AS 'SELECT EXTRACT(YEAR FROM AGE(annee))::int'

LANGUAGE sql;