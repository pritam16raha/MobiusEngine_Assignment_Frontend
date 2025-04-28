"use client";

import ChooseUsCard from "../../../components/ChooseUsCard";
import { chooseUsData } from "../../../data/demoData";

const WhyChooseUs = () => {
  return (
    <section className="max-w-[1400px] mx-auto bg-light mt-32 mb-24 py-20 rounded-3xl">
      <div className="max-w-secondary_container mx-auto flex flex-col gap-12">
        <h2 className="text-secondary text-[32px] font-heading font-normal text-left">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
          {chooseUsData.map((item) => (
            <ChooseUsCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
