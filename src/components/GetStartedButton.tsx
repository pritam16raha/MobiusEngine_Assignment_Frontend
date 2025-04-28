"use client";

import React from "react";

type GetStartedButtonProps = {
  text?: string;
};

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text = "Get Started",
}) => {
  return (
    <button className="w-[180px] flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-primary/90 transition">
      {text}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default GetStartedButton;
