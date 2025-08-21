import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AssessmentFormAPI = createApi({
  reducerPath: "AssessmentFormAPI",
  tagTypes: ["ASSESSMENT_FORM_API"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    submitAssessmentForm: builder.mutation({
      query: (formData) => ({
        url: "/assessment",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: "ASSESSMENT_FORM_API",
      transformResponse: (response) => response.data,
    }),
    getQuestions: builder.query({
      query: () => "/questions",
      providesTags: ["ASSESSMENT_FORM_API"],
      transformResponse: (response) => response.data,
    }),
  }),
});
export const { useSubmitAssessmentFormMutation, useGetQuestionsQuery } =
  AssessmentFormAPI;
