import React from "react";

const ProgressBar = ({ completionPercentage }) => {
  return (
    <div className="mt-4 w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between mb-2">
        <span className="text-sm ">Progress</span>
        <span className="text-sm font-medium text-background">
          {completionPercentage}%
        </span>
      </div>
      <div className="w-full bg-accent-foreground rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
