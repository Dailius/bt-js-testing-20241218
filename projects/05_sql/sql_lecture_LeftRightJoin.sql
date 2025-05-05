 
SELECT * FROM credentials;
SELECT * FROM user_dtls;


INSERT INTO credentials(user_id, email, user_password)
	VALUES
		(2, 'demo01@demo.com', 'lst_nm_01'),
		(3, 'demo02@demo.com', 'lst_nm_02');

ALTER TABLE credentials
		ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP;

SELECT
	*
FROM user_dtls d
LEFT JOIN credentials c ON d.user_id = c.user_id

SELECT
	*
FROM credentials c
RIGHT JOIN user_dtls d  ON d.user_id = c.user_id


