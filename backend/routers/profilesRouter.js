const Router = require("express");
const ProfilesController = require("../controllers/ProfilesController");

const profilesRouter = new Router();
profilesRouter.get("/profiles", ProfilesController.getProfiles);
profilesRouter.get("/profile/:user_id", ProfilesController.getProfileByUserId);
profilesRouter.get(
  "/profile/image/:user_id",
  ProfilesController.getProfileImage
);

// create profile
profilesRouter.post("/profile", ProfilesController.createProfile);
// change profile
profilesRouter.post("/profile/:user_id", ProfilesController.changeProfile);

profilesRouter.put("/profile/image", ProfilesController.putAvatarImage);

profilesRouter.delete("/profile", ProfilesController.deleteProfile);

module.exports = profilesRouter;
