import express from "express";
import { createResume, getResumes } from "../controllers/resumeController.js"; // 👈 add .js
import { protect } from "../middleware/authMiddleware.js"; // also add .js if using ES Modules

const router = express.Router();

router.post("/create", protect, createResume);
router.get("/", protect, getResumes);

export default router;
