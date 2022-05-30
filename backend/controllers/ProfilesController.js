const ProfilesServices = require("../services/ProfilesServices");

class ProfilesController {
  // get all profiles
  async getProfiles(req, res) {
    const profiles = await ProfilesServices.getProfiles();

    res.status(200).json(profiles);
  }

  // get one profile
  async getProfileByUserId(req, res) {
    const user_id = req.params.id;

    const profile = await ProfilesServices.getProfileByUserId(user_id);

    res.status(200).json(profile);
  }

  // create new profile
  async createProfile(req, res) {
    const { user_id } = req.body;

    const profile = await ProfilesServices.createProfile(user_id);

    res.status(201).json(profile);
  }

  // delete one profile
  async deleteProfile(req, res) {
    const { user_id } = req.body;

    await ProfilesServices.deleteProfileByUserId(user_id);

    res.status(200).json({ message: "Profile deleted" });
  }
}

module.exports = new ProfilesController();
