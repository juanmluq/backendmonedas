const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors')
const punycode = require('punycode/')
require('./db.js');

const server = express();
server.use(cors())

server.name = 'API';

server.use(bodyParser.urlencoded({
  extended: false
  //  extended: true, limit: '50mb'
   }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use('/', routes);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// Error catching endware.
//server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
 // const status = err.status || 500;
  //const message = err.message || err;
  //console.error(err);
  //res.status(status).send(message);
//});

module.exports = server;
