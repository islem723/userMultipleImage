import { Router } from "express";
import { createProfile } from "../controllers/UserController.js";
import multerConfig from "../middleware/multer.js";

const router = Router();

// Endpoint pour créer un profil utilisateur avec des images
router.post("/create-profile", multerConfig, createProfile);

export default router;
