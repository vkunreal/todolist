const ProjectsServices = require("../services/ProjectsServices");

class ProjectsController {
  // get all projects
  async getAllProjects(req, res) {
    const projects = await ProjectsServices.getProjects();

    res.status(200).json(projects);
  }

  async getProjectsByUserId(req, res) {
    const user_id = req.params.user_id;
    const projects = await ProjectsServices.getProjectsByUserId(user_id);

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
