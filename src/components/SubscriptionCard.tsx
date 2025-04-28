"use client";

import React from "react";
import { MdCheckCircle } from "react-icons/md";
import GetStartedButton from "./GetStartedButton";

type SubscriptionCardProps = {
  title: string;
  price: string;
  billingCycle: string;
  features: string[];
  isPopular: boolean;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  billingCycle,
  features,
  isPopular,
}) => {
  return (
    <div className="relative flex flex-col justify-between border-2 border-primary rounded-3xl p-6 w-full min-h-[520px] bg-white">
      {isPopular && (
        <div className="absolute top-6 right-6 px-4 py-1 text-sm rounded-full border border-primary text-primary font-semibold">
          Popular
        </div>
      )}
      <div>
        <h3 className="text-primary text-3xl font-semibold mb-6">{title}</h3>
        <div className="text-primary font-bold text-[52px] flex items-baseline gap-1 mb-4">
          ${price}
          <span className="text-2xl font-bold">/{billingCycle}</span>
        </div>

        <div className="w-full h-px bg-gray-200 my-6" />
        <ul className="flex flex-col gap-3">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-primary text-[16px] font-semibold"
            >
              <MdCheckCircle size={20} className="text-green-500 mt-[2px]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <GetStartedButton text="Get Started" />
      </div>
    </div>
  );
};

export default SubscriptionCard;
