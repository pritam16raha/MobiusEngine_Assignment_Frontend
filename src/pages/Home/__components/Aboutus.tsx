"use client";

import FounderCard from "../../../components/FounderCard";
import { founders } from "../../../data/demoData";

const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#00072D] via-[#00072D] to-[#0034DB] py-20 px-6">
      <div className="max-w-secondary_container mx-auto px-6">
        <h2 className="text-white text-[32px] font-heading mb-16 text-left">
          About Us
        </h2>

        <div className="flex flex-col gap-20">
          {founders.map((founder, index) => (
            <FounderCard
              key={index}
              imageSrc={founder.imageSrc}
              name={founder.name}
              description={founder.description}
              linkedinUrl={founder.linkedinUrl}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <div className="mt-12 text-sm space-y-8 pl-[150px]">
            <p className="text-white">
              Learn more about our Board of Advisors ↗
            </p>
            <p className="text-white">Follow us on our LinkedIn page ↗</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
