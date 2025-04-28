"use client";

import StepsCard from "../../../components/StepCards";

const stepsData = [
  { stepNumber: 1, title: "Submit Intake Form" },
  { stepNumber: 2, title: "We do the search and curation for list of jobs" },
  { stepNumber: 3, title: "You approve, we do the tedious part (applying)" },
  { stepNumber: 4, title: "You get the interviews" },
];

const StepsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-secondary_container mx-auto px-8">
        <h2 className="text-primary text-[26px] font-heading text-left mb-16">
          How we work?
        </h2>

        {/* Steps Cards */}
        <div className="flex flex-wrap justify-between gap-6">
          {stepsData.map((step) => (
            <StepsCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
