import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setProfile: (state, action) => { state.profile = action.payload; },
    addEducation: (state, action) => { state.education.push(action.payload); },
    updateEducation: (state, { payload }) => {
      state.education[payload.index] = payload.data;
    },
    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },
    // Repeat add, update, delete actions for skills, projects, social...
  },
});

export const {
  setProfile, addEducation, updateEducation, deleteEducation,
  // other actions
} = resumeSlice.actions;
export default resumeSlice.reducer;
