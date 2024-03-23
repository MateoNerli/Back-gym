require("dotenv").config();
const mysql = require("mysql");

const config_mysql = {
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "gimnasio",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  port: process.env.DB_PORT || 3306,
  insecureAuth: true,
};

exports.queryMySQL = (query, params) => {
  return new Promise((resolve, reject) => {
    var connection = mysql.createConnection(config_mysql);
    //console.log(query)
    // console.log(connection);
    connection.query(query, params, (err, rows, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(rows);
      connection.end();
    });
  });
};
