import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import resumeReducer from "./features/resume/resumeSlice";
// import templateReducer from "./features/template/templateSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer,
    // template: templateReducer,
  },
});
