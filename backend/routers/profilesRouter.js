const Router = require("express");
const ProfilesController = require("../controllers/ProfilesController");

const profilesRouter = new Router();

profilesRouter.get("/profiles", ProfilesController.getProfiles);
profilesRouter.get("/profiles/:id", ProfilesController.getProfileByUserId);

profilesRouter.post("/profile", ProfilesController.createProfile);

profilesRouter.delete("/profile", ProfilesController.deleteProfile);

module.exports = profilesRouter;
