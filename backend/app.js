require("dotenv").config();
const express = require("express");
const userRouter = require("./routers/userRouter.js");
const authRouter = require("./routers/authRouter.js");
const projectsRouter = require("./routers/projectsRouter");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api", userRouter);
app.use("/api", projectsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.listen(PORT, () => {
  console.log("Server started listening port " + PORT);
});
