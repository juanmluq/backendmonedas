//const DB_PORT = process.env.PORT || 5432;
const DB_PORT = 8080;
const DB_USER= process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "11QAZWSX";
const DB_HOST = "localhost";
//const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "usersmoneda";
const MP_KEY = process.env.MP_KEY

module.exports={
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    MP_KEY
}

