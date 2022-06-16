const { request } = require("../db.js");

class ProjectsServices {
  // get all projects from database
  async getProjects() {
    return await request("SELECT * FROM projects");
  }

  // get all user's projects
  async getProjectsByUserId(id) {
    const sqlReq = `SELECT * FROM projects WHERE id IN (SELECT project_id FROM projects_users WHERE user_id = "${id}")`;
    return await request(sqlReq);
  }

  // get project by project's id
  async getProjectById(id) {
    return await request(`SELECT * FROM projects WHERE id = "${id}"`);
  }

  // add project in database by user's id
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

  // delete project by project's id
  async deleteProjectById(project_id) {
    await request(`DELETE FROM projects WHERE id = "${project_id}"`);
  }

  // get all todos by project's id
  async getTodosByProjectId(project_id) {
    const reqTodos = `SELECT * FROM todocards WHERE project_id IN (SELECT id FROM projects WHERE id = "${project_id}")`;
    return await request(reqTodos);
  }
}

module.exports = new ProjectsServices();
