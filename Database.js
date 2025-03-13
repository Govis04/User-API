const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "userdb",
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

module.exports = db;
