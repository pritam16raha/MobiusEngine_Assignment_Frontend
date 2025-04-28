"use client";

import React from "react";

type TestimonialCardProps = {
  text: (string | { bold: string })[];
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text }) => {
  return (
    <div className="bg-primary flex-1 min-w-[300px] max-w-[400px] rounded-3xl overflow-hidden border border-primary flex flex-col justify-between">
      {/* Top (Play Button Area) */}
      <div className="bg-white rounded-3xl flex items-center justify-center h-[250px]">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
          </svg>
        </div>
      </div>

      {/* Bottom (Text Area) */}
      <div className="text-white p-6 flex flex-col justify-between min-h-[150px]">
        <p className="text-[16px] leading-snug text-white">
          {text.map((part, idx) =>
            typeof part === "string" ? (
              part
            ) : (
              <span key={idx} className="font-bold">
                {part.bold}
              </span>
            )
          )}
        </p>

        {/* Bottom Arrow Button */}
        <div className="flex justify-end mt-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
