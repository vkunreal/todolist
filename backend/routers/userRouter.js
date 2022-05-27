const Router = require("express");
const UsersController = require("../controllers/UsersController");

const userRouter = new Router();

userRouter.get("/users", UsersController.getUsers);
userRouter.get("/users/:id", UsersController.getUser);
userRouter.post("/users", UsersController.createUser);

module.exports = userRouter;
