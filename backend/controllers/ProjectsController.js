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

  async addProject(req, res) {
    const body = req.body;

    const project = await ProjectsServices.addProjectByUserId(
      body.project,
      body.user_id
    );

    res.status(201).json(project);
  }

  // delete one project
  async deleteProject(req, res) {
    const id = req.params.id;
    await ProjectsServices.deleteProjectById(id);

    const data = {
      message: `Project (index ${id}) deleted`,
    };

    res.status(200).json(data);
  }
}

module.exports = new ProjectsController();
