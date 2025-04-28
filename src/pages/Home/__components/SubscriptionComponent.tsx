"use client";

import AdvanceSubsCard from "../../../components/AdvanceSubsCard";
import SubscriptionCard from "../../../components/SubscriptionCard";
import { subscriptionPlans } from "../../../data/demoData";

const SubscriptionComponent = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-secondary_container mx-auto flex flex-col gap-14">
        <div>
          <h2 className="text-primary font-heading text-[32px] leading-tight font-semibold text-left mb-10">
            Job Application Service Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              billingCycle={plan.billingCycle}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        <div className="w-full">
          <AdvanceSubsCard />
        </div>
        <div className="w-full">
          <hr className="border border-gray-300 opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionComponent;
