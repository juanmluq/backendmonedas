const DB_PORT = process.env.PORT || 3001;
const DB_USER= process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "11QAZWSX";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "usersmoneda";
const MP_KEY = process.env.MP_KEY ||"APP_USR-8214833007776308-041716-d6a52e949590a6ab9beb8587e25f9c8b-130971066"

module.exports={
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    MP_KEY
}

