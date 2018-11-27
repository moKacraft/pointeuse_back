module.exports = {
    "type": "mongodb",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "synchronize": true,
    "logging": false,
    "useNewUrlParser": true,
    "entities": ["src/**/**.entity{.ts,.js}"]
}