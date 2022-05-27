const Router = require("express");
const { check } = require("express-validator");
const AuthController = require("../controllers/AuthController");

const authRouter = new Router();

authRouter.post(
  "/login",
  [
    check("email", "Uncorrected data").notEmpty().isEmail(),
    check("password", "Uncorrected data")
      .notEmpty()
      .isLength({ min: 8, max: 32 }),
  ],
  AuthController.login
);

authRouter.post(
  "/registration",
  [
    check("email", "Uncorrected data").notEmpty().isEmail(),
    check("password", "Uncorrected data")
      .notEmpty()
      .isLength({ min: 8, max: 32 }),
  ],
  AuthController.registration
);

module.exports = authRouter;
