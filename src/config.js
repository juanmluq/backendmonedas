const DB_PORT = process.env.PORT || 3001;
const DB_USER= process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "11QAZWSX";
const DB_HOST = process.env.DB_HOST || "127.0.0.23";
const DB_NAME = process.env.DB_NAME || "usersmoneda";

module.exports={
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
}

//`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
