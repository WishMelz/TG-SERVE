
const mysql = require('mysql');
const config = require('../config')
const conn = mysql.createPool(config.db);
module.exports = conn;