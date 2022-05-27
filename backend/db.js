const mysql = require("mysql2");

const conn = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "todolist",
    password: "w147",
  })
  .promise();

module.exports = conn;
