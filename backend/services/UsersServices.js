const conn = require("../db.js");

class UserServices {
  // creates the request to database for take users
  async getUsers() {
    let users;

    await conn
      .query("SELECT * FROM users")
      .then((results) => {
        users = results[0];
      })
      .catch((e) => console.log(e));

    return users;
  }

  // creates the request to database for take one user
  async getUser(id) {
    let user;

    await conn
      .query(`SELECT * FROM users WHERE id = ${id}`)
      .then((results) => {
        user = results[0];
      })
      .catch((e) => console.log(err));

    return user;
  }

  // creates the request to database for create new user
  async createUser(name, email, password) {
    let user;

    const request = `
          INSERT INTO users(name, email, password_hash)
            VALUES
            ("${name}", "${email}", "${password}");
      `;

    await conn
      .query(request)
      .then((results) => {
        user = results[0];
      })
      .catch((e) => console.log(e));

    return user;
  }
}

module.exports = new UserServices();
