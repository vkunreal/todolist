const express = require("express");

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.listen(PORT, () => {
  console.log("Server started listening port " + PORT);
});
