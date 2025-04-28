"use client";

import React from "react";

type ChooseUsCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ChooseUsCard: React.FC<ChooseUsCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="border border-primary rounded-3xl p-6 py-8 gap-4 flex flex-col items-start text-left bg-light min-h-[250px]">
      <img src={icon} alt={title} className="w-12 h-12 mb-6" />
      <h3 className="text-secondary font-semibold text-2xl mb-3">{title}</h3>
      <p className="text-black text-[18px] font-body leading-snug">
        {description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
