const Router = require("express");
const UsersController = require("../controllers/UsersController.js");

const userRouter = new Router();

userRouter.get("/users", UsersController.getUsers);
userRouter.get("/users/:id", UsersController.getUserById);

userRouter.post("/users", UsersController.createUser);

userRouter.delete("/users/:id", UsersController.deleteUser);

module.exports = userRouter;
