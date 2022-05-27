const Router = require("express");
const { check } = require("express-validator");
const UsersController = require("../controllers/UsersController");

const userRouter = new Router();

userRouter.get("/users", UsersController.getUsers);
userRouter.get("/users/:id", UsersController.getUserById);
userRouter.post("/users", UsersController.createUser);

module.exports = userRouter;
