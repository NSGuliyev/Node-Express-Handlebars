// Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Nn18101988',
    database: 'burgers_db'
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.log('Error connectiong: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export conection for our ORM to use.
module.exports = connection;