const mysql = require("mysql2");

const conn = mysql
  .createConnection({
    host: "localhost",
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
  })
  .promise();

module.exports = conn;
