var mysql      = require('mysql');
var password = require('./config.js');

var connection = mysql.createConnection({
  user     : 'student',
  password : password,
  database : 'notable'
});
 
connection.connect();

module.exports = connection;