//the model goes between the database and the js
const pgp = require('pg-promise')();

const dbConfig = require('../db/dbConfig');
const db = pgp(dbConfig);
