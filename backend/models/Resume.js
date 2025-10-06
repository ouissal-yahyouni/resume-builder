import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },

    personalInfo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String },
      phone: { type: String },
      address: { type: String },
      photo: { type: String },
    },

    experiences: [
      {
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],

    education: [
      {
        school: String,
        fieldOfStudy: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],

    skills: [String],
    languages: [String],
    interests: [String],

    templateId: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
