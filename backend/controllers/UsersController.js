const UserServices = require("../services/UsersServices.js");
const bcrypt = require("bcryptjs");

class UsersController {
  // get users
  async getUsers(req, res) {
    const users = await UserServices.getUsers();
    res.status(200).json(users);
  }

  // get user
  async getUserById(req, res) {
    const user = await UserServices.getUserById(req.params.id);
    res.status(200).json(user);
  }

  // create new user
  async createUser(req, res) {
    const { name, email, password } = req.body;
    const password_hash = bcrypt.hashSync(password, 7);
    const user = await UserServices.createUser(name, email, password_hash);
    res.status(201).json(user);
  }

  // delete user
  async deleteUser(req, res) {
    const id = req.params.id;
    const data = await UserServices.deleteUserById(id);

    res.status(200).json(data);
  }
}

module.exports = new UsersController();
