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

/*
	WHERE
*/

	SELECT * FROM country;
	SELECT * FROM country WHERE country = 'Lithuania';
	SELECT * FROM country WHERE country = 'United States';

/*
	ORDER BY
*/
	SELECT first_name Vardas, last_name Pavarde FROM actor ORDER BY Vardas;
	SELECT first_name Vardas, last_name Pavarde FROM actor WHERE first_name = 'Adam' ORDER BY Vardas;
	SELECT first_name Vardas, last_name Pavarde FROM actor WHERE first_name = 'Adam' ORDER BY 2;
	
	-- 56
	SELECT * FROM city WHERE country_id = 56;
	
	SELECT * FROM country WHERE country = 'United States';
	SELECT country_id FROM country WHERE country = 'United States';
	
	SELECT * FROM city WHERE country_id = 103;
	SELECT * FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'United States');

/*
	Logical operators
	>, <, >=, <=, =, <> or !=

	AND, OR
	&&, ||
*/
	SELECT * FROM city WHERE country_id = 103 ORDER BY 1 ASC;
	SELECT * FROM city WHERE country_id = 103 ORDER BY 1 DESC;
	
	
	SELECT * FROM city 
	WHERE country_id = 103 AND city_id >= 400 AND city_id <= 600 
	ORDER BY 1 DESC;
	
	-- 573 449
	SELECT * FROM city 
	WHERE country_id = 103 AND  city_id != 573 AND city_id <> 449
	ORDER BY 1 DESC;
	
	-- is not in range [400, 450]
	SELECT * FROM city 
	WHERE country_id = 103 AND (city_id <= 400 OR city_id >= 450) 
	ORDER BY 1 DESC;

/*
	BETWEEN AND
*/

-- range
	SELECT * FROM city 
	WHERE country_id = 103 AND city_id >= 400 AND city_id <= 600 
	ORDER BY 1 DESC;
	
	SELECT * FROM city 
	WHERE country_id = 103 AND city_id BETWEEN  400 and 600
	ORDER BY 1 DESC;
	
	-- not in the range
	SELECT * FROM city 
	WHERE country_id = 103 AND (city_id <= 400 OR city_id >= 450) 
	ORDER BY 1 DESC;
	
	SELECT * FROM city 
	WHERE country_id = 103 AND city_id NOT BETWEEN  400 and 450
	ORDER BY 1 DESC;

/*
	IN ()
*/
--  520, 499, 333, 306
	SELECT * FROM city 
	WHERE city_id = 520 OR city_id = 499 OR city_id = 333 OR city_id = 306 
	ORDER BY 1 DESC;

	SELECT * FROM city 
	WHERE city_id IN (520, 499, 333, 306)
	ORDER BY 1 DESC;

-- negative IN
	SELECT * FROM city 
	WHERE (city_id != 520 OR city_id != 499 OR city_id != 333 OR city_id != 306) AND country_id = 103
	ORDER BY 1 DESC;

	SELECT * FROM city 
	WHERE city_id NOT IN (520, 499, 333, 306) AND country_id = 103
	ORDER BY 1 DESC;

/*
	LIKE
*/

	SELECT * FROM city 
	WHERE city = 'Warren'
	ORDER BY 1 DESC;

	SELECT * FROM city WHERE city LIKE 'W%';
	SELECT * FROM city WHERE city LIKE 'Nam%';
	SELECT * FROM city WHERE city LIKE '%s';
	SELECT * FROM city WHERE city LIKE '% %';
	SELECT * FROM city WHERE city LIKE '% %' AND city NOT LIKE '% % %';
	SELECT * FROM city WHERE city LIKE '_a%';
	SELECT * FROM city WHERE city LIKE '%e__';

/*
	Agrecation function
	count(), sum(), avg(), min(), max()
*/
	SELECT count(city_id), count(*) FROM city;
	SELECT * FROM payment;
	SELECT * FROM payment WHERE customer_id IN (341, 342, 389, 479) ORDER BY 2;
	SELECT count(*), sum(amount), avg(amount), min(amount), max(amount) FROM payment WHERE customer_id IN (341, 342, 389, 479);

	SELECT max(payment_id) FROM payment;
	SELECT max(payment_id) + 1 FROM payment;

	SELECT count(*), sum(amount), avg(amount),  max(amount) - min(amount) FROM payment WHERE customer_id IN (341, 342, 389, 479);

/*
	GROUP BY
	HAVING
*/

	SELECT * FROM payment WHERE customer_id IN (341, 342, 389, 479) ORDER BY 2;
	SELECT count(*) FROM payment WHERE customer_id IN (341, 342, 389, 479);
	
	SELECT customer_id, count(*) AS total, avg(amount), sum(amount), min(amount), max(amount) FROM payment 
	WHERE customer_id IN (341, 342, 389, 479)
	GROUP BY customer_id
	ORDER BY total DESC;

	SELECT customer_id, count(*) AS total, avg(amount), sum(amount), min(amount), max(amount) FROM payment 
	-- WHERE count(*) >= 25
	GROUP BY customer_id
	-- HAVING customer_id IN (341, 342, 389, 479)
	HAVING count(*) > 25 AND avg(amount) > 5
	ORDER BY total ASC;

	SELECT * FROM film;
	
	SELECT rating, rental_duration, count(*) 
	FROM film
	GROUP BY rating, rental_duration
	ORDER BY 1 ASC, 2 DESC;

/*
	DISTINCT
*/
	SELECT first_name FROM actor ORDER BY first_name;
	SELECT DISTINCT first_name FROM actor ORDER BY first_name;
	SELECT DISTINCT first_name, last_name FROM actor ORDER BY first_name;
	
	SELECT first_name, last_name, count(*) FROM actor 
	GROUP BY first_name, last_name
	ORDER BY 3 DESC;

/*
	array
*/

	SELECT * FROM film;
	SELECT title, special_features, special_features[1], special_features[2]  FROM film;
	
	SELECT title, special_features 
	FROM film
	WHERE special_features[2] IS NULL;

	SELECT title, special_features 
	FROM film
	WHERE special_features[2] IS NOT NULL;

	SELECT title, special_features 
	FROM film
	WHERE 'Commentaries' = ANY(special_features);
	
	SELECT title, special_features 
	FROM film
	WHERE special_features[1] = 'Commentaries';
	

