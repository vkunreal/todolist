const ProjectsServices = require("../services/ProjectsServices");

class ProjectsController {
  async getProjects(req, res) {
    const projects = await ProjectsServices.getProjects();

    res.status(200).json(projects);
  }
}

module.exports = new ProjectsController();
