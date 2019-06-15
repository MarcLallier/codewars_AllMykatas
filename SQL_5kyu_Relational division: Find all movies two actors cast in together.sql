/*#_5kyu_#_Relational division: Find all movies two actors cast in together*/



-- Given film_actor and film tables from the DVD Rental sample database find all movies both Sidney Crowe (actor_id = 105) and Salma Nolte (actor_id = 122) cast in together and order the result set alphabetically.

-- film schema
--  Column     | Type                        | Modifiers
-- ------------+-----------------------------+----------
-- title       | character varying(255)      | not null
-- film_id     | smallint                    | not null
-- film_actor schema
--  Column     | Type                        | Modifiers
-- ------------+-----------------------------+----------
-- actor_id    | smallint                    | not null
-- film_id     | smallint                    | not null
-- last_update | timestamp without time zone | not null 
-- actor schema
--  Column     | Type                        | Modifiers
-- ------------+-----------------------------+----------
-- actor_id    | integer                     | not null 
-- first_name  | character varying(45)       | not null
-- last_name   | character varying(45)       | not null
-- last_update | timestamp without time zone | not null 
-- The desired output:

-- title
-- -------------
-- Film Title 1
-- Film Title 2
-- ...
-- title - Film title


SELECT title FROM film 

JOIN film_actor AS PERSON_1
ON film.film_id = PERSON_1.film_id

JOIN film_actor AS PERSON_2
ON film.film_id = PERSON_2.film_id

WHERE PERSON_1.actor_id = 105 AND PERSON_2.actor_id = 122
ORDER BY title;