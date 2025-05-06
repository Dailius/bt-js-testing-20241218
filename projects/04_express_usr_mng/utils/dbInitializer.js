import pool from "../config/db.js";

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
        process.exit(1);
    }
}

export default createUsersTable