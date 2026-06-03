import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  },
  experiences: [],
  education: [],
  skills: [],
  languages: [],
  interests: [],
  templateId: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducer: {
    updatePersonaleInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    addExperience: (state, action) => {
      state.experiences.push(action.payload);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setInterests: (state, action) => {
      state.interests = action.payload;
    },
    setTemplate: (state, action) => {
      state.templateId = action.payload;
    },
    resetResume: () => initialState,
  },
});

export const {
  updatePersonalInfo,
  addExperience,
  addEducation,
  setSkills,
  setLanguages,
  setInterests,
  setTemplate,
  resetResume,
} = resumeSlice.actions;

export default resumeSlice.reducer;
