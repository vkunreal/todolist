const Router = require("express");
// const { check } = require("express-validator");
const ProjectsController = require("../controllers/ProjectsController.js");

const projectsRouter = new Router();

projectsRouter.get("/projects", ProjectsController.getProjects);

// projectsRouter.post();

module.exports = projectsRouter;
