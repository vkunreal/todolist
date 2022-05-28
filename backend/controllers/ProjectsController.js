const ProjectsServices = require("../services/ProjectsServices");

class ProjectsController {
  // get all projects
  async getProjects(req, res) {
    const projects = await ProjectsServices.getProjects();

    res.status(200).json(projects);
  }

  // get one project
  async getProject(req, res) {
    const id = req.params.id;
    const project = await ProjectsServices.getProjectById(id);

    res.status(200).json(project);
  }

  // delete one project
  async deleteProject(req, res) {
    const id = req.params.id;
    const data = await ProjectsServices.deleteProjectById(id);

    res.status(200).json(data);
  }
}

module.exports = new ProjectsController();
