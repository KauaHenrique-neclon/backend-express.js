//const mysql = require('mysql2/promise');
const { Pool } = require('pg');

require('dotenv').config(); // configurando e passando o .env

/* MYSQL é um lixo de banco de dados
const connect = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});*/

const connect = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});



module.exports = connect;