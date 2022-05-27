const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "todolist",
  password: "w147",
});

app.get("/", (req, res) => {
  res.end("Hello world");
});

// get all users
app.get("/users", (req, res) => {
  conn.connect((err) => {
    if (err) return console.err("Error: " + err);
    else {
      conn.query("SELECT * FROM users", (err, results) => {
        if (err) return console.log("Error: " + err);

        res.end(JSON.stringify(results));
      });
    }
  });
});

// get one user from id
app.get("/users/:id", (req, res) => {
  conn.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return console.log("Error: " + err);

      res.end(JSON.stringify(results));
    }
  );
});

// post user in database
app.post("/users", (req, res) => {
  const body = req.body;

  const request = `
      INSERT INTO users(name, email, password_hash)
        VALUES
        ("${body.name}", "${body.email}", "${body.password}");
  `;

  conn.query(request, (err, rows) => {
    if (err) return console.log("Error: " + err);

    res.send(JSON.stringify(rows));
  });
});

app.listen(PORT, () => {
  console.log("Server started listening port " + PORT);
});

// conn.end((err) => {
//   if (err) return console.err("Error: " + err);
//   console.log("Connection closed");
// });
