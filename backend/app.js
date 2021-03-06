require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/userRouter.js");
const authRouter = require("./routers/authRouter.js");
const projectsRouter = require("./routers/projectsRouter");
const profilesRouter = require("./routers/profilesRouter.js");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api", userRouter);
app.use("/api", projectsRouter);
app.use("/api", profilesRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.listen(PORT, () => {
  console.log("Server started listening port " + PORT);
});
