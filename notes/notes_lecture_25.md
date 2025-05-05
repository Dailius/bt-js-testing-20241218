## 1. Repeat and check homework

## 2. LEFT and ARIGHT JOIN 

![](/pictures/sql_join_types.png)

Change database user password:
```sql
ALTER USER postgres PASSWORD 'your_new_user_password';
```

```javascript
import pkg from 'pg'

const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    password: "root123",
    database: "usrauth",
    host: "localhost",
    port: 5432
});


const createUsersTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users(
            user_id SERIAL PRIMARY KEY,
            user_name VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        );
    `;

    try {
        await pool.query(query);
        console.log('User table was created');
    } catch (error) {
        console.error("Error creating user table: ", error);
    }
}

```

```javascript
try {
        const result = await pool.query(
            `INSERT INTO users
            (user_name, email, password, created_at, updated_at)
            VALUES
            ($1, $2, $3, NOW(), NOW())
            RETURNING *;`,
            [username, email, password]
        );

        res.status(201).json({
            message: "User registered successfully",
            user: result.rows[0]
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
```