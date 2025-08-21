"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../component/Card.jsx";
import { Label } from "../component/Label.jsx";
import { cn, RATING_EMOJI, RATING_LABEL, SCORE } from "@/lib/utils.js";
import { useFieldArray } from "react-hook-form";
import { Spinner } from "./Spinner.jsx";
import { Check } from "lucide-react";
const AssessmentQuestion = ({
  setScoreValue,
  scoreValue,
  questionList,
  isFetching,
  control,
}) => {
  const { fields, append, update } = useFieldArray({
    control,
    name: "answers",
    rules: { required: true, minLength: questionList.length },
  });

  return (
    <>
      <Card className="mt-6 bg-accent-foreground border-accent-foreground text-white">
        <CardHeader>
          <CardTitle className="text-xl">Assessment Questions</CardTitle>
          <CardDescription>
            Rate your agreement with the following statements about your
            supervisor's management style. All questions are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isFetching ? (
            <div className="flex flex-col gap-2 justify-center items-center h-32">
              <Spinner variant={"default"} />
              <span>Fetching questions...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 mt-8">
              {questionList?.map((question, index) => (
                <div key={index} className="space-y-2">
                  <Label
                    htmlFor={`question-${index}`}
                    className="text-sm font-bold"
                  >
                    {question.question}
                  </Label>
                  <div
                    className={`flex flex-col py-6 ${
                      questionList.length - 1 === index
                        ? "border-b-0"
                        : "border-b border-muted-foreground"
                    }`}
                  >
                    <div className="flex py-6 items-center justify-between">
                      <div className="text-sm text-muted-foreground text-left">
                        Strongly Disagree
                      </div>
                      <div className="flex gap-6">
                        {SCORE.map((score) => {
                          const isSelected = scoreValue[index] === score;
                          return (
                            <div key={score} className="">
                              <button
                                type="button"
                                className={cn(
                                  "w-12 h-12 flex items-center justify-center text-lg font-bold  rounded-full bg-foreground transition-all duration-200 ease-out",
                                  "bg-foreground hover:scale-110 hover:bg-foreground hover:cursor-pointer",
                                  isSelected && "bg-foreground/90"
                                )}
                                aria-label={`Rate ${score}`}
                                onClick={() => {
                                  const answeredIndex = fields.findIndex(
                                    (field) => field.question_id === question.id
                                  );
                                  if (answeredIndex === -1) {
                                    append({
                                      question: question.question,
                                      score: score,
                                      question_id: question.id,
                                      category_id: question.categoryId,
                                    });
                                  } else {
                                    update(answeredIndex, {
                                      ...fields[answeredIndex],
                                      score: score,
                                    });
                                  }
                                  const updated = [...scoreValue];
                                  updated[index] = score;
                                  setScoreValue(updated);
                                }}
                              >
                                {isSelected ? (
                                  <Check className="animate-[scaleIn_200ms_ease-out]" />
                                ) : (
                                  score
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        Strongly Agree
                      </div>
                    </div>
                    {scoreValue[index] && (
                      <div className="text-center text-white">
                        {RATING_LABEL[scoreValue[index] - 1]}{" "}
                        {RATING_EMOJI[scoreValue[index] - 1]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default AssessmentQuestion;
