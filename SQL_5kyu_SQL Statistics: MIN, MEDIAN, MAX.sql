/*#_5kyu_#_SQL Statistics: MIN, MEDIAN, MAX*/


-- For this challenge you need to create a simple SELECT statement.
--  Your task is to calculate the MIN, MEDIAN and MAX scores of the students from the results table.

-- Tables and relationship below:
-- table "student" => ID,NAME
-- table "result" => ID,student_id, score

-- Resultant table:
-- min
-- median
-- max



SELECT MIN(score) , PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY score) AS median, MAX(score) 
FROM student
JOIN result 
ON student_id = student.id