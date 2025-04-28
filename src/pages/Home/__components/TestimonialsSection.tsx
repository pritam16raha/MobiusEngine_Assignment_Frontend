"use client";

import TestimonialCard from "../../../components/TestimonialCard";
import { testimonials } from "../../../data/demoData";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-white px-6">
      <div className="max-w-secondary_container mx-auto flex flex-col gap-12">
        <h2 className="text-primary text-[36px] font-medium text-left mb-10">
          What our clients have to say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} text={testimonial.text} />
          ))}
        </div>

        <div className="flex flex-wrap gap-20 justify-center mt-8">
          <button className="flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-heading text-lg hover:bg-primary hover:text-white transition">
            More customer testimonials
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-heading text-lg hover:bg-primary/90 transition">
            Get Started
            <svg
              className="w-4 h-4"
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
    </section>
  );
};

export default TestimonialSection;
