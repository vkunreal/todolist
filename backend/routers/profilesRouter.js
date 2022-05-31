const Router = require("express");
const ProfilesController = require("../controllers/ProfilesController");

const profilesRouter = new Router();

profilesRouter.get("/profiles", ProfilesController.getProfiles);
profilesRouter.get("/profile/:id", ProfilesController.getProfileByUserId);
profilesRouter.get(
  "/profile/image/:user_id",
  ProfilesController.getProfileImage
);

profilesRouter.post("/profile", ProfilesController.createProfile);

profilesRouter.put("/profile/image", ProfilesController.putAvatarImage);

profilesRouter.delete("/profile", ProfilesController.deleteProfile);

module.exports = profilesRouter;
