import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;

// Determine the environment and set database credentials accordingly
const isProduction = process.env.NODE_ENV === 'production';
const config = {
    user: isProduction ? process.env.AWS_POSTGRES_USER : process.env.POSTGRES_USER,
    password: isProduction ? process.env.AWS_POSTGRES_PASSWORD : process.env.POSTGRES_PASSWORD,
    host: isProduction ? process.env.AWS_POSTGRES_HOST : process.env.POSTGRES_HOST,
    port: 5432,
    database: process.env.POSTGRES_DATABASE,
});

export default pool;
