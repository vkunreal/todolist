const ProfilesServices = require("../services/ProfilesServices");
const fs = require("fs");
const path = require("path");

class ProfilesController {
  // get all profiles
  async getProfiles(req, res) {
    const profiles = await ProfilesServices.getProfiles();

    res.status(200).json(profiles);
  }

  // get one profile
  async getProfileByUserId(req, res) {
    const user_id = req.params.user_id;

    const profile = await ProfilesServices.getProfileByUserId(user_id);

    res.status(200).json(profile);
  }

  // create new profile
  async createProfile(req, res) {
    const { user_id } = req.body;

    const profile = await ProfilesServices.createProfile(user_id);

    res.status(201).json(profile);
  }

  async changeProfile(req, res) {
    const profile_id = req.params.user_id;
    const body = req.body;

    const profile = await ProfilesServices.changeProfileByUserId(
      body.name,
      body.email,
      profile_id
    );

    res.status(200).json(profile);
  }

  // change avatar in profile
  async putAvatarImage(req, res) {
    const { user_id, image } = req.body;
    const link = path.resolve(
      __dirname,
      "..",
      "images",
      `${user_id}-avatar.txt`
    );

    await fs.writeFile(link, image, (err) => {
      if (err) return console.error(err);

      const data = fs.readFileSync(link, "utf8");
      res.status(200).json(data);
    });
  }

  async getAvatarImage(req, res) {
    const { user_id } = req.params;

    await fs.readFile(
      path.resolve(__dirname, "..", "images", `${user_id}-avatar.txt`),
      "utf8",
      (err, data) => {
        if (err) return console.error(err);

        res.status(200).json(data);
      }
    );
  }

  // delete one profile
  async deleteProfile(req, res) {
    const { user_id } = req.body;

    await ProfilesServices.deleteProfileByUserId(user_id);

    res.status(200).json({ message: "Profile deleted" });
  }
}

module.exports = new ProfilesController();
