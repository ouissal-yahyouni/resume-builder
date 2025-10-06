import Resume from "../models/Resume.js";

// Créer un nouveau CV
export const createResume = async (req, res) => {
  try {
    const resume = new Resume({ ...req.body, userId: req.user.id });
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer tous les CVs d'un utilisateur
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id }).populate(
      "templateId"
    );
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // Récupérer un CV spécifique
// export const getResumeById = async (req, res) => {
//   try {
//     const resume = await Resume.findOne({ _id: req.params.id, userId: req.user.id }).populate('templateId');
//     if (!resume) return res.status(404).json({ error: "Resume not found" });
//     res.json(resume);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Mettre à jour un CV
// export const updateResume = async (req, res) => {
//   try {
//     const resume = await Resume.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.id },
//       req.body,
//       { new: true }
//     );
//     if (!resume) return res.status(404).json({ error: "Resume not found" });
//     res.json(resume);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Supprimer un CV
// export const deleteResume = async (req, res) => {
//   try {
//     const resume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
//     if (!resume) return res.status(404).json({ error: "Resume not found" });
//     res.json({ message: "Resume deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
