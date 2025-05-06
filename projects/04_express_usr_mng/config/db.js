import envr from './env.js';
import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
    // user: process.env.DB_USER,
    user: envr.DB_USER,
    password: envr.DB_PASSWORD,
    database: envr.DB_NAME,
    host: envr.HOST,
    port: envr.PORT
});

export default pool;