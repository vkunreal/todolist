const UserServices = require("../services/UsersServices.js");

class UsersController {
  // get users
  async getUsers(req, res) {
    const users = await UserServices.getUsers();
    res.status(200).json(users);
  }

  // get user
  async getUser(req, res) {
    const user = await UserServices.getUser(req.params.id);
    res.status(200).json(user);
  }

  // create new user
  async createUser(req, res) {
    const body = req.body;
    const user = await UserServices.createUser(
      body.name,
      body.email,
      body.password
    );
    res.status(201).json(user);
  }
}

module.exports = new UsersController();
