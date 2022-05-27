const express = require("express");
const userRouter = require("./routers/userRouter.js");

const PORT = 5000;
const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.listen(PORT, () => {
  console.log("Server started listening port " + PORT);
});
