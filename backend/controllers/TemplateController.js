import Template from "../models/Template";

export const createTemplate = async (req, res) => {
  try {
    const template = new Template(req.body);
    await template.save();
    res.status(201).json(template);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTemlates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getTemplateById = async (res, req) => {
  try {
    const template = await Template.findById(req.prams.id);
    if (!template) return res.status(404).json({ error: "Template not found" });
    res.json(template);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const updateTemplate = async (req, res) => {
//   try {
//     const template = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!template) return res.status(404).json({ error: "Template not found" });
//     res.json(template);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Supprimer un template
// export const deleteTemplate = async (req, res) => {
//   try {
//     const template = await Template.findByIdAndDelete(req.params.id);
//     if (!template) return res.status(404).json({ error: "Template not found" });
//     res.json({ message: "Template deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
