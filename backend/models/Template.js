import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  previewImage: { type: String }, 
  filePath: { type: String, required: true }, 
  isPremium: { type: Boolean, default: false },
}, { timestamps: true });