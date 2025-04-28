"use client";

import PricingCard from "../../../components/PricingCard";
import { pricingPlans } from "../../../data/demoData";

const ResumeComponent = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-secondary_container mx-auto flex flex-col gap-8">
        <div className="py-10">
          <h2 className="text-primary font-heading text-[32px] font-semibold text-left">
            Resume Building & Coaching
          </h2>
          <p className="text-primary font-body text-[16px] mt-3 max-w-[600px] text-left leading-tight">
            Let’s talk about where you’re headed — and how your resume can get
            you there.{" "}
            <span className="font-bold">Schedule a call to get started.</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              billing={plan.billing}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
