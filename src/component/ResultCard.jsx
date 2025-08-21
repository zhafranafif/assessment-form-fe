import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../component/Card.jsx";
import { CheckCircle, Target } from "lucide-react";
import { Button } from "../component/Button.jsx";
import { SCORE } from "@/lib/utils.js";
import StarRating from "../component/StarRating.jsx";

const ResultCard = ({ backToHome, totalScore, result, totalQuestions }) => {
  const percentage =
    (totalScore / (totalQuestions * SCORE[SCORE.length - 1])) * 100;
  const rating = totalScore / totalQuestions;

  const LEVELS = [
    {
      min: 90,
      bgcolor: "bg-green-500",
      level: "Outstanding",
      color: "text-white",
    },
    {
      min: 80,
      bgcolor: "bg-yellow-400",
      level: "Excellent",
      color: "text-black",
    },
    {
      min: 70,
      bgcolor: "bg-orange-400",
      level: "Good",
      color: "text-black",
    },
    {
      min: 60,
      bgcolor: "bg-amber-400",
      level: "Average",
      color: "text-black",
    },
    {
      min: 0,
      bgcolor: "bg-red-600",
      level: "Below Average",
      color: "text-white",
    },
  ];

  const getLevelPercentage = () => {
    return LEVELS.find(({ min }) => percentage >= min) || LEVELS.at(-1);
  };

  return (
    <>
      <Card className="bg-secondary border-accent-foreground">
        <CardHeader className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-gradient-to-b from-[#4BBF6B] to-[#2F7745] inline-block p-3 rounded-full">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold mb-2">
            Assessment Successfully Completed 🎉
          </CardTitle>
          <p>
            Thankyou for your valuable feedback. Your assessment has been
            recorded
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-6xl font-bold"> {totalScore}</p>
          <p className="text-2xl font-light">
            Out of {totalQuestions * SCORE[SCORE.length - 1]}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                percentage >= 90
                  ? "bg-green-400"
                  : percentage >= 80
                  ? "bg-blue-400"
                  : percentage >= 70
                  ? "bg-yellow-400"
                  : percentage >= 60
                  ? "bg-orange-400"
                  : "bg-red-400"
              }`}
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
          <div
            className={`${getLevelPercentage().color} ${
              getLevelPercentage().bgcolor
            } rounded-lg w-1/3 mx-auto `}
          >
            <p className="text-xl font-semibold mt-4 p-2">
              <span className="font-bold">{getLevelPercentage().level}</span>
            </p>
          </div>
          <StarRating rating={rating} className="mt-2 justify-center" />
          <div className="bg-card mt-4 rounded-xl p-4 mb-8 border border-white/10">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Performance Feedback
            </h3>
            <p className="text-foreground text-lg text-left">{result}</p>
          </div>
          <Button
            onClick={backToHome}
            className="mt-4 text-white bg-primary hover:bg-primary/90"
            size={"lg"}
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ResultCard;
