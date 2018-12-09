module.exports = {
    "type": "mongodb",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": Number(process.env.DB_PORT) || 27017,
    "username": process.env.DB_USERNAME || "",
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DATABASE || "pointeuse_database",
    "synchronize": true,
    "logging": false,
    "useNewUrlParser": true,
    "entities": ["dist/**/**.entity.js"]
}