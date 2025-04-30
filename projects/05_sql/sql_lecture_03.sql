
	CREATE TABLE IF NOT EXISTS user_dtls(
		user_id SERIAL PRIMARY KEY, 
		user_name VARCHAR(50) UNIQUE NOT NULL,
		first_name VARCHAR(50) NOT NULL,
		last_name VARCHAR(50) NOT NULL,
		created_at TIMESTAMP NOT NULL
	);
	
	SELECT * FROM user_dtls;
	
	/*
		!!!!!!!! NEVER EVER USE DROP
	*/
	-- DROP TABLE user_dtls;

	SELECT * FROM film;

	CREATE TABLE IF NOT EXISTS film_copy AS (SELECT * FROM film);
	SELECT * FROM film_copy;
	-- DROP TABLE film_copy;

	CREATE TEMPORARY TABLE IF NOT EXISTS film_copy_02 AS (SELECT * FROM film);
	SELECT * FROM film_copy_02;

	CREATE TABLE IF NOT EXISTS credentials(
		credentials_id SERIAL PRIMARY KEY,
		user_id INT,
		email VARCHAR(50) UNIQUE NOT NULL,
		user_password VARCHAR(255),
		created_at TIMESTAMP NOT NULL,
		FOREIGN KEY (user_id) REFERENCES user_dtls(user_id)
	)

	SELECT 
		* 
	FROM user_dtls u
	JOIN credentials c ON u.user_id = c.user_id;

/*
	INSERT INTO
*/

	INSERT INTO user_dtls(user_name, first_name, last_name)
	VALUES
		('usr_nm_01', 'frst_nm_01', 'lst_nm_01'),
		('usr_nm_02', 'frst_nm_02', 'lst_nm_02'),
		('usr_nm_03', 'frst_nm_03', 'lst_nm_03'),
		('usr_nm_04', 'frst_nm_04', 'lst_nm_04');

	INSERT INTO user_dtls(user_name, last_name)
	VALUES
		('usr_nm_0111', 'lst_nm_01');

/*
	UPDATE TABLE
*/
	SELECT * FROM user_dtls;
	
	ALTER TABLE user_dtls
		-- ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;
		ALTER COLUMN created_at TYPE TIMESTAMPTZ;

	ALTER TABLE user_dtls
	RENAME COLUMN name TO first_name;

	-- ALTER [ COLUMN ] column { SET | DROP } NOT NULL
	ALTER TABLE user_dtls ALTER COLUMN first_name DROP NOT NULL;

/*
	UPDATE ROW VALUES
*/

	UPDATE user_dtls
	SET first_name = 'name_a',
	    last_name = 'name_b'
	WHERE user_id in (5,7);

	-- DELETE FROM table_name
	-- WHERE condition;
	DELETE FROM user_dtls
	WHERE user_id in (5,7,12);

