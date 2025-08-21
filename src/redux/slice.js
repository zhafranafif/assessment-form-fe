import { createSlice } from "@reduxjs/toolkit";

export const assessmentSlice = createSlice({
  name: "assessment",
  initialState: {
    totalScore: 0,
    totalQuestions: 0,
    result: null,
    loading: false,
  },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload.result;
      state.totalScore = action.payload.totalScore;
      state.totalQuestions = action.payload.totalQuestions;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setResult, setLoading } = assessmentSlice.actions;
export default assessmentSlice.reducer;
