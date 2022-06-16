const Router = require("express");
const ProjectsController = require("../controllers/ProjectsController.js");

const projectsRouter = new Router();

projectsRouter.get("/projects", ProjectsController.getAllProjects);
projectsRouter.get(
  "/projects/:user_id",
  ProjectsController.getProjectsByUserId
);
projectsRouter.get("/project/:id", ProjectsController.getProject);

projectsRouter.get("/todos/:project_id", ProjectsController.getTodos);

projectsRouter.post("/project", ProjectsController.addProject);

projectsRouter.delete("/project/:id", ProjectsController.deleteProject);

module.exports = projectsRouter;
