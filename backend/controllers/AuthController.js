const UserServices = require("../services/UsersServices.js");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

class AuthController {
  constructor() {
    this.registration = this.registration.bind(this);
  }

  // login
  async login(req, res) {
    // check errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);

    const { email, password } = req.body;

    // Checking for the existence of a user
    const isUserHas = await UserServices.checkUserByEmail(email);

    if (!isUserHas) {
      return res.status(400).send("Uncorrected data");
    }

    // Request to get user
    const user = await UserServices.getUserByEmail(email);

    // Password check
    const checkPass = await bcrypt.compareSync(password, user.password_hash);

    if (checkPass) {
      res.status(200).json(user);
    } else {
      res.status(400).send("Uncorrected data");
    }
  }

  // registration
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);

    const { name, email, password } = req.body;
    const isUserHas = await UserServices.checkUserByEmail(email);

    if (isUserHas) {
      return res.status(400).send("This user already exists");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await UserServices.createUser(name, email, hashedPassword);

    res.status(201).json(user);
  }
}

module.exports = new AuthController();
