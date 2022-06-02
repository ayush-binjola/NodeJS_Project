const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "saasimages_js"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
})

module.exports = connection;