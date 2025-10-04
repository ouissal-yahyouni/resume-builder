import express from "express";
import { createResume, getResumes } from "../controllers/resumeController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/createResume", protect, createResume);
router.get("/getResume", protect, getResumes);
export default router;
