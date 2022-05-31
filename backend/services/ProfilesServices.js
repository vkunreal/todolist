const { request } = require("../db");

class ProfilesServices {
  constructor() {
    this.createProfile = this.createProfile.bind(this);
  }

  // get all profiles from database
  async getProfiles() {
    return await request("SELECT * FROM profiles");
  }

  /**
   * get one profile from database by user id
   *
   * @param {string} user_id
   * @return {Profile}
   */
  async getProfileByUserId(user_id) {
    const reqFunc = (results) => results[0][0];
    return await request(
      `SELECT * FROM profiles WHERE user_id = "${user_id}"`,
      reqFunc
    );
  }

  // get profile image in datebase
  async getProfileImageByUserId(user_id) {
    const reqFunc = (results) => results[0][0];
    return await request(
      `SELECT image FROM profiles WHERE user_id = "${user_id}"`,
      reqFunc
    );
  }

  /**
   * create profile in database by user id
   *
   * @param {string} user_id
   * @return {Profile}
   */
  async createProfile(user_id) {
    const sqlReq = `
        INSERT INTO profiles(user_id, created_at)
        VALUES 
        ("${user_id}", "${Date.now()}")
      `;

    await request(sqlReq);

    return await this.getProfileByUserId(user_id);
  }

  async putAvatarImage(user_id, image) {
    const sqlReq = `UPDATE profiles SET image = "${image}" WHERE user_id = "${user_id}"`;

    await request(sqlReq);

    const reqFunc = (results) => results[0][0];
    return await request(
      `SELECT image FROM profiles WHERE user_id = "${user_id}"`,
      reqFunc
    );
  }

  /**
   * delete profile in database by user id
   *
   * @param {string} user_id
   * @return {void}
   */
  async deleteProfileByUserId(user_id) {
    await request(`DELETE FROM profiles WHERE user_id = "${user_id}"`);
  }
}

module.exports = new ProfilesServices();
