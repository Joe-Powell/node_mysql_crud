const express = require("express");
const path = require('path');
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv");

dotenv.config();



app.use(express.static(path.join(__dirname, './public')));



//app.use(express.json());

app.use(express.urlencoded({ extended: false }));  /// built in body parser

app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));






















app.listen(4500, () => {
    console.log("server started on port 4500");

});
