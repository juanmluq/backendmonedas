require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = require("./config.js");
// `postgresql://postgres:pbd1jHFIBof7LqPaQBcN@containers-us-west-209.railway.app:7122/railway`
// `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
// `postgres://postgres:11QAZWSX@localhost/usersmoneda`
//const sequelize = new Sequelize(`postgresql://postgres:ADdDZBnrtFcVvVINthmtSLbFmTcAsHdS@roundhouse.proxy.rlwy.net:18001/railway`
const sequelize = new Sequelize(`postgresql://postgres:11QAZWSX@192.168.43.154:5432/postgres`
, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Usermoneda } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Genre.belongsToMany(Videogame, {through : "videogames_genero"});//aca creo la relacion y tambien la tabla intermedia videogames_genero
// //un genero de mi tabla de genero pertenece a muchos videogames de mi tabla de videogames
// Videogame.belongsToMany(Genre, {through : "videogames_genero"});
// //un videogame de mi tabla de videogame pertenece a muchos generos de mi tabla de generos
// //haciendo esto, estoy creando una tabla intermedia en db con un id perteneciente al genero y un id perteneciente al videogame 

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
