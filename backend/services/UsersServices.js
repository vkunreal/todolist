const { connection, request } = require("../db.js");

/**
 * User {
 *  id: number;
 *  name: string;
 *  email: string;
 *  password_hash: string;
 *  is_deleted: Buffer (0/1);
 * }
 */

class UserServices {
  // creates the request to database for take users
  async getUsers() {
    return await request("SELECT * FROM users");
  }

  /**
   * get user from database by id
   *
   * @param {string} id
   * @return {User}
   */
  async getUserById(id) {
    const reqFunc = (results) => results[0][0];
    return await request(`SELECT * FROM users WHERE id = ${id}`, reqFunc);
  }

  /**
   * creates the request to database for create new user
   *
   * @param {string} name
   * @param {string} email
   * @param {string} password_hash
   * @return {User}
   */
  async createUser(name, email, password_hash) {
    const req = `
          INSERT INTO users(name, email, password_hash)
            VALUES
            ("${name}", "${email}", "${password_hash}");
      `;

    await connection.query(req).catch((e) => console.error(e));

    const reqFunc = (results) => results[0][0];
    return await request(
      `SELECT * FROM users WHERE email = "${email}"`,
      reqFunc
    );
  }

  /**
   * get user from database by email
   *
   * @param {string} email
   * @return {User}
   */
  async getUserByEmail(email) {
    const reqFunc = (results) => results[0][0];
    return await request(
      `SELECT * FROM users WHERE email = "${email}"`,
      reqFunc
    );
  }

  /**
   * heck user in database by email
   *
   * @param {string} email
   * @return {boolean}
   */
  async checkUserByEmail(email) {
    const reqFunc = (results) => results[0][0]["count"];
    return await request(
      `SELECT count(id) as count FROM users WHERE email="${email}"`,
      reqFunc
    );
  }

  /**
   * heck user in database by email
   *
   * @param {string} id
   * @return {Request Data}
   */
  async deleteUserById(id) {
    return await request(`DELETE FROM users WHERE id = "${id}"`);
  }
}

module.exports = new UserServices();
