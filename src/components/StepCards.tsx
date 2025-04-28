"use client";

import React from "react";

type StepProps = {
  stepNumber: number;
  title: string;
};

const StepsCard: React.FC<StepProps> = ({ stepNumber, title }) => {
  return (
    <div className="flex flex-col items-left max-w-[220px]">
      <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-black text-4xl">
        {stepNumber}
      </div>
      <div className="w-48 h-[2px] bg-primary mt-5 mb-4" />
      <p className="text-primary font-body text-[20px] leading-snug break-words">
        {title}
      </p>
    </div>
  );
};

export default StepsCard;
