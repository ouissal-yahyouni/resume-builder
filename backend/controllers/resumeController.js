import Resume from "../models/Resume.js";

export const createResume = async (req, res) => {
  try {
    const resume = new Resume({ ...req.body, user: req.user.id });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
