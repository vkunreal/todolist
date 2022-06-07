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

  async addProjectByUserId(proj, user_id) {
    const lastUpdate = new Date().getTime();
    const projectId = Math.round(Math.random() * 100000000);
    const reqProject = `
      INSERT INTO projects (id, name, description, last_update)
      VALUES
      ("${projectId}", "${proj.name}", "${proj.description}", "${lastUpdate}");
    `;
    const reqUserProject = `
      INSERT INTO projects_users (project_id, user_id)
      VALUES
      ("${projectId}", "${user_id}");
    `;
    const reqGetProject = `SELECT * FROM projects WHERE id = "${projectId}"`;

    await request(reqProject);
    await request(reqUserProject);
    return await request(reqGetProject);
  }

  /**
   * delete one project from database by id
   *
   * @param {string} id
   * @return {Request Data}
   */
  async deleteProjectById(id) {
    await request(`DELETE FROM projects WHERE id = "${id}"`);
  }
}

module.exports = new ProjectsServices();
