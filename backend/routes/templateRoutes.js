import express from "express";
import { createTemplate,getTemlates } from "../controllers/TemplateController.js"; // ✅ add .js
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Créer un template (protégé)
router.post("/createTemplate", createTemplate);

// Récupérer tous les templates
router.get("/",getTemlates);

export default router;
