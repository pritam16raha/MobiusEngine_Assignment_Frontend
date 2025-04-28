"use client";

import React from "react";

type FounderProps = {
  imageSrc: string;
  name: string;
  description: string[];
  linkedinUrl: string;
};

const FounderCard: React.FC<FounderProps> = ({
  imageSrc,
  name,
  description,
  linkedinUrl,
}) => {
  return (
    <section className="w-full">
      <div className="max-w-secondary_container mx-auto flex flex-col md:flex-row items-center gap-20 px-6 py-16 md:pl-48">
        <div className="relative flex-shrink-0">
          <img
            src={imageSrc}
            alt={`${name} Image`}
            width={250}
            height={250}
            className="rounded-full object-cover"
          />

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 w-16 h-16 rounded-full overflow-hidden backdrop-blur bg-white/30 border border-white flex items-center justify-center"
          >
            <img
              src="/icons/abouticon.svg"
              alt="LinkedIn Icon"
              width={25}
              height={25}
            />
          </a>
        </div>

        <div className="max-w-2xl space-y-2 mt-6">
          {description.map((para, index) => (
            <p key={index} className="text-white text-[18px] leading-[1.2] mb-4">
              {index === 0 ? (
                <>
                  <span className="font-bold">{name}</span> {para}
                </>
              ) : (
                para
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
