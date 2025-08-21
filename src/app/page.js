"use client";
import { useDispatch, useSelector } from "react-redux";
import Assessment from "../component/Assessment.jsx";
import Header from "../component/Header.jsx";
import { setResult } from "@/redux/slice.js";
import { Spinner } from "@/component/Spinner.jsx";
import { useState } from "react";
import ResultCard from "../component/ResultCard.jsx";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const assessmentResult = useSelector((state) => state.assessment);
  const { result, totalScore, totalQuestions } = assessmentResult;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <Spinner variant="default" />
          <p className="text-lg mt-2">
            Please wait while we take you back to home
          </p>
        </div>
      </div>
    );
  }
  const backToHome = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setResult({ result: null, totalScore: null }));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto min-h-screen p-8 bg-foreground">
      {result && totalScore && totalQuestions ? (
        <div className="flex flex-col text-center mb-8 text-white">
          <ResultCard
            backToHome={backToHome}
            totalScore={totalScore}
            result={result}
            totalQuestions={totalQuestions}
          />
        </div>
      ) : (
        <>
          <Header />
          <Assessment />
        </>
      )}
    </div>
  );
}
