-- -- actor

-- SELECT * FROM actorr;
-- SELECT * FROM actor;
-- select * from actor;

/*
	Komentaras
	select * from actor;
*/
-- Komentars
select * from actor;

SELECT 'Sveikas', 'Pasauli!';
SELECT 'Hello', 'Wolrd!';
SELECT 'Bonjour', 'la Monde!';

SELECT 'Sveikas', 'Pasauli!', null
UNION
SELECT 'Hello', 'Wolrd!', '???????'
UNION
SELECT 'Bonjour', 'la Monde!', '';


SELECT * FROM actor;
SELECT first_name, last_name FROM actor;
SELECT actor_id FROM actor;

SELECT first_name AS "Vardas", last_name AS "Pavarde" FROM actor;
SELECT first_name AS "Vardas", last_name AS "Vardas" FROM actor;

SELECT first_name Vardas, last_name Pavarde FROM actor;

SELECT first_name, UPPER(first_name), LOWER(first_name) FROM actor;


SELECT * FROM country;
SELECT * FROM country WHERE country = 'Lithuania';
SELECT * FROM country WHERE country = 'United States';

SELECT first_name Vardas, last_name Pavarde FROM actor ORDER BY Vardas;
SELECT first_name Vardas, last_name Pavarde FROM actor WHERE first_name = 'Adam' ORDER BY Vardas;
SELECT first_name Vardas, last_name Pavarde FROM actor WHERE first_name = 'Adam' ORDER BY 2;

-- 56
SELECT * FROM city WHERE country_id = 56;

SELECT * FROM country WHERE country = 'United States';
SELECT country_id FROM country WHERE country = 'United States';

SELECT * FROM city WHERE country_id = 103;
SELECT * FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'United States');




