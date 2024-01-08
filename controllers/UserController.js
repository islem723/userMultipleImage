// UserController.js
import User from "../models/user.js";
import ImageModel from "../models/imageModel.js";

export async function createProfile(req, res) {
  try {
    const { username } = req.body;
    // Create the User instance
    const user = await User.create({ username });

    if (!user) {
      // If user creation fails, delete the associated images
      await Promise.all(
        imageModels.map(async (image) => {
          await ImageModel.findByIdAndDelete(image._id);
        })
      );

      return res.status(400).json({
        error: "Erreur lors de la création du profil utilisateur",
      });
    }
    // Extract filenames of uploaded images
    const images = req.files.map((file) => file.filename);

    // Create ImageModel instances for each uploaded image
    const imageModels = await Promise.all(
      images.map(async (filename) => {
        const image = await ImageModel.create({
          title: filename, // You can set a title if needed
          owner: user._id, // Will be populated below
        });
        return image;
      })
    );
    return res
      .status(201)
      .json({ message: "Profil utilisateur créé avec succès", user });
  } catch (error) {
    console.error("Erreur lors de la création du profil utilisateur", error);
    return res
      .status(500)
      .json({ error: "Erreur lors de la création du profil utilisateur" });
  }
}
