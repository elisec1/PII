const mysql = require("mysql");
const dbConfig = require("./config/db.config");

const co = mysql.createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

co.connect(function (err) {
  if (err) throw err;
  console.log("connexion réussie");
});

module.exports = co;
