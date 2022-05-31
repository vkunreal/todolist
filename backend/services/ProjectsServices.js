const { request } = require("../db.js");

class ProjectsServices {
  // get all projects from database
  async getProjects() {
    return await request("SELECT * FROM projects");
  }

  async getProjectsByUserId(id) {
    const sqlReq = `SELECT * FROM projects WHERE id IN (SELECT project_id FROM projects_users WHERE user_id = "${id}")`;
    return await request(sqlReq);
  }

  /**
   * get one project from database by id
   *
   * @param {string} id
   * @return {User}
   */
  async getProjectById(id) {
    return await request(`SELECT * FROM projects WHERE id = "${id}"`);
  }

  /**
   * delete one project from database by id
   *
   * @param {string} id
   * @return {Request Data}
   */
  async deleteProjectById(id) {
    return await request(`DELETE FROM projects WHERE id = "${id}"`);
  }
}

module.exports = new ProjectsServices();
