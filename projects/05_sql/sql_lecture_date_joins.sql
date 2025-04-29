	SELECT * FROM rental;
	SELECT * FROM rental ORDER BY return_date DESC;
	
	SELECT * FROM rental WHERE return_date IS NULL;
	SELECT * FROM rental WHERE return_date IS NOT NULL;


/*
	MySQL date_formatter()
	PostgreSQL to_char()
*/
	SELECT * FROM rental;

	SELECT * FROM rental WHERE to_char(rental_date, 'YYYY') = '2005';
	SELECT * FROM rental WHERE to_char(rental_date, 'YYYY') = '2006';
	
	SELECT to_char(rental_date, 'YYYY') as metai, count(*) FROM rental GROUP BY metai;
	
	SELECT 
		to_char(rental_date, 'YYYY') as metai, 
		to_char(rental_date, 'MM') as menesiai, 
		count(*) 
	FROM rental 
	GROUP BY metai, menesiai;

	SELECT * FROM rental WHERE to_char(rental_date, 'YYYY/MM') = '2005/06';
	SELECT * FROM rental WHERE to_char(rental_date, 'YYYY/MM') = '2005/06' AND to_char(rental_date, 'HH24') = '18';
	SELECT * FROM rental WHERE to_char(rental_date, 'YYYY/MM') = '2005/06' AND CAST(to_char(rental_date, 'HH24') AS INTEGER) >= 18;

/*
	JOIN
*/

	SELECT * FROM film; -- film_id
	SELECT * FROM film_category; -- film_id, category_id
	SELECT * FROM category; -- category_id

	SELECT
		fc.film_id,
		f.title,
		f.description,
		f.rating,
		c.category_id,
		c.name
	FROM film f
	JOIN film_category fc ON f.film_id = fc.film_id
	JOIN category c ON c.category_id = fc.category_id;


	SELECT
		fc.film_id,
		f.title,
		f.description,
		f.rating,
		c.category_id,
		c.name
	FROM film f
	JOIN film_category fc ON f.film_id = fc.film_id
	JOIN category c ON c.category_id = fc.category_id
	WHERE c.name = 'Documentary';

	SELECT
		c.name,
		count(*)
	FROM film f
	JOIN film_category fc ON f.film_id = fc.film_id
	JOIN category c ON c.category_id = fc.category_id
	GROUP BY c.name;

------------------------------------------------------
	SELECT * FROM customer; -- customer_id
	SELECT * FROM rental; -- customer_id, inventory_id
	SELECT * FROM inventory; -- inventory_id, film_id
	SELECT * FROM film; -- film_id
	
	SELECT 
		c.customer_id,
		c.first_name || ' ' || c.last_name AS full_name,
		CONCAT(c.first_name, ' ', c.last_name) AS full_name,
		r.rental_id,
		r.inventory_id,
		f.film_id,
		f.title,
		r.rental_date,
		r.return_date
	FROM customer c
	JOIN rental r ON c.customer_id = r.customer_id
	JOIN inventory i ON r.inventory_id = i.inventory_id
	JOIN film f ON i.film_id = f.film_id
	WHERE return_date IS NULL
	ORDER BY 2;





	
