import { AssessmentFormAPI } from "@/redux-toolkit/api";
import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "@/redux/slice";

export const store = configureStore({
  reducer: {
    assessment: assessmentReducer,
    [AssessmentFormAPI.reducerPath]: AssessmentFormAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AssessmentFormAPI.middleware),
});
