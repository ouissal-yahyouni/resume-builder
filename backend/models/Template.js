import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    previewImage: { type: String },
    filePath: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Create and export the model
const Template = mongoose.model("Template", templateSchema);
export default Template;
