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
      .catch((e) => console.error(e));

    return users;
  }

  // creates the request to database for take one user
  async getUserById(id) {
    let user;

    await conn
      .query(`SELECT * FROM users WHERE id = ${id}`)
      .then((results) => {
        user = results[0];
      })
      .catch((e) => console.error(err));

    return user;
  }

  // creates the request to database for create new user
  async createUser(name, email, password_hash) {
    let user;

    const request = `
          INSERT INTO users(name, email, password_hash)
            VALUES
            ("${name}", "${email}", "${password_hash}");
      `;

    await conn.query(request).catch((e) => console.error(e));

    await conn
      .query(`SELECT * FROM users WHERE email = "${email}"`)
      .then((results) => (user = results[0]))
      .catch(console.error);

    return user;
  }

  // get user from database by email
  async getUserByEmail(email) {
    let user;

    await conn
      .query(`SELECT * FROM users WHERE email = "${email}"`)
      .then((results) => {
        user = results[0][0];
      })
      .catch((e) => console.error(e));

    return user;
  }

  // check user in database by email
  async checkUserByEmail(email) {
    let isUserHas;

    await conn
      .query(`SELECT count(id) as count FROM users WHERE email="${email}"`)
      .then((results) => results[0][0]["count"])
      .then((result) => (isUserHas = !!result))
      .catch((e) => console.error(e));

    return isUserHas;
  }
}

module.exports = new UserServices();
