/*#_8kyu_#_1. Find all active students*/

--  Create a simple SELECT query to display student information of all ACTIVE students.

--  TABLE STRUCTURE:

-- students
--  Id	FirstName	LastName	IsActive

--  Note: IsActive (true or false)


SELECT * FROM students WHERE IsActive  != 0