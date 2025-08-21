"use client";
import React, { useState, useEffect } from "react";

import PersonalInformation from "./PersonalInformation.jsx";
import AssessmentQuestion from "./AssessmentQuestion.jsx";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../component/Button.jsx";
import { useSubmitAssessmentFormMutation } from "@/redux-toolkit/api.js";
import { useDispatch } from "react-redux";
import { setResult } from "@/redux/slice.js";
import { Loader2Icon } from "lucide-react";
import { useGetQuestionsQuery } from "@/redux-toolkit/api.js";
import ProgressBar from "./ProgressBar.jsx";

const Assessment = () => {
  const [questionList, setQuestionList] = React.useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const dispatch = useDispatch();
  const [submitAssessmentForm, { isLoading }] =
    useSubmitAssessmentFormMutation();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      department: "",
      yearsWorking: "",
      answers: [],
    },
  });

  const {
    data: questions,
    isSuccess,
    isFetching,
    isError,
  } = useGetQuestionsQuery({
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (isSuccess && questions) {
      setQuestionList(questions);
    }
  }, [isSuccess, questions]);

  useEffect(() => {
    const staticFields = 4;

    const values = methods.getValues();

    const dynamicFields = questionList.length;

    const filledStatic = [
      "firstName",
      "lastName",
      "department",
      "yearsWorking",
    ].filter((field) => Boolean(values[field])).length;

    const filledDynamic = values.answers.filter((a) =>
      Boolean(a?.score)
    ).length;

    const totalFilled = filledStatic + filledDynamic;
    const totalFields = staticFields + dynamicFields;

    const percentage = Math.round((totalFilled / totalFields) * 100);
    setCompletionPercentage(percentage);
  }, [methods.watch(), questionList.length]);

  const [scoreValue, setScoreValue] = useState(
    Array(questionList.length).fill(null)
  );

  const { handleSubmit, reset, control } = methods;

  const onSubmit = (data) => {
    try {
      const formData = {
        first_name: data.firstName,
        last_name: data.lastName,
        department: data.department,
        working_years: data.yearsWorking,
        answers: data.answers,
      };
      submitAssessmentForm(formData)
        .unwrap()
        .then((res) => {
          dispatch(
            setResult({
              result: res.result,
              totalScore: res.totalScore,
              totalQuestions: questionList.length,
            })
          );
          reset();
          setScoreValue(Array(questionList.length).fill(null));
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };
  return (
    <FormProvider {...methods}>
      <div className="p-4 text-background">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonalInformation />
          <ProgressBar completionPercentage={completionPercentage} />
          <AssessmentQuestion
            setScoreValue={setScoreValue}
            scoreValue={scoreValue}
            questionList={questionList}
            isFetching={isFetching}
            control={control}
          />
          <div className="flex flex-row-reverse items-center justify-center gap-3">
            <Button
              size={"lg"}
              className={
                "mt-4 mx-auto w-1/3 flex justify-center items-center hover: cursor-pointer"
              }
              type="submit"
              disabled={completionPercentage < 100 || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2Icon className="animate-spin mr-2" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit Assessment"
              )}
            </Button>
            <Button
              onClick={() => {
                reset();
                setScoreValue(Array(questionList.length).fill(null));
              }}
              size={"lg"}
              className={
                "mt-4 mx-auto w-1/3 flex justify-center items-center hover: cursor-pointer"
              }
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default Assessment;
