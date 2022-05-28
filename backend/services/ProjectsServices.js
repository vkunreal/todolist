const conn = require("../db.js");

class ProjectsServices {
  async getProjects() {
    let projects;

    await conn
      .query("SELECT * FROM projects")
      .then((results) => (projects = results[0]))
      .catch((e) => console.error(e));

    return projects;
  }
}

module.exports = new ProjectsServices();
