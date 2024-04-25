require('dotenv').config();

const poolConfig = {
    max: 50,
    min: 0,
    acquire: 1200000, // 20 mins
    idle: 1000000, // 16 min 40 sec
};

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PSWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        pool: poolConfig,
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PSWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        pool: poolConfig,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PSWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        pool: poolConfig,
    },
};
