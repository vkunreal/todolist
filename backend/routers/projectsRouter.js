const Router = require("express");
const ProjectsController = require("../controllers/ProjectsController.js");

const projectsRouter = new Router();

projectsRouter.get("/projects", ProjectsController.getProjects);
projectsRouter.get("/projects/:id", ProjectsController.getProject);

projectsRouter.delete("/projects/:id", ProjectsController.deleteProject);

module.exports = projectsRouter;
