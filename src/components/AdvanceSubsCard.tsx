"use client";

import { MdCheckCircle } from "react-icons/md";

const features = [
  "Everything in Plus",
  "Custom Resumes & Cover Letters",
  "20 fully customized applications/week",
  "Help with complex job searches",
  "Access to senior resume experts, Founder & Exec Coaches",
];

const AdvanceSubsCard = () => {
  return (
    <div className="w-full bg-primary rounded-2xl p-8 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-heading text-3xl mb-1">Advance</h3>
          <p className="text-white font-body text-lg">
            Top-tier support for serious job hunters:
          </p>
        </div>
        <div className="text-white font-heading text-5xl font-bold">
          $150
          <span className="text-2xl font-body font-bold">/week</span>
        </div>
      </div>

      <div className="h-px bg-white/40 max-w-[40%]" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1 max-w-[60%]">
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-3">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <MdCheckCircle size={20} className="text-green-400" />
                <span className="text-white text-lg font-body leading-tight">
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none">
          <button className="bg-white text-primary flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg hover:bg-white/90 transition">
            Get Started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >

              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSubsCard;
