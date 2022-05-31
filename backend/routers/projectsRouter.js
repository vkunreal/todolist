const Router = require("express");
const ProjectsController = require("../controllers/ProjectsController.js");

const projectsRouter = new Router();

projectsRouter.get("/projects", ProjectsController.getProjects);
projectsRouter.get("/projects/:user_id", ProjectsController.getProjects);
projectsRouter.get("/project/:id", ProjectsController.getProject);

projectsRouter.delete("/project/:id", ProjectsController.deleteProject);

module.exports = projectsRouter;
