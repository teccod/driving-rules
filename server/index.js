require('dotenv').config()
const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.PASSWORD
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/getCountriesTable', function(req, res) {

    let sql = "SELECT * FROM countries_rule";

    connection.query(sql, function(err, result){
        res.json(result)
    })
});

app.listen(process.env.PORT);