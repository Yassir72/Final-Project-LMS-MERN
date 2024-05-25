import React from "react";
import Hero from "../hero/hero";
import Course from "../Courses/courses";
import Pricing from "../pricing/pricing";
import Contact from "../contact/contactForm";
import Subscribe from "../subscribe/subscribe";
import Feedback from "../reviews/feedback";

const Landing = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <section id="hero" className="mb-12">
        <Hero />
      </section>

      <section className="bg-white border-b border-gray-200" id="courses">
        <div className="container mx-auto py-12">
          <h2 className="text-5xl font-bold text-center text-black-800 mb-8">
            Our Courses
          </h2>
          <Course />
        </div>
      </section>

      <section className="bg-gray-100">
        <Feedback />
      </section>

      <section className="bg-white border-b border-gray-200" id="pricing">
        <Pricing />
      </section>

      <section className="bg-white" id="contact">
        <Contact />
      </section>

      <section className="bg-white border-b border-gray-200">
        <Subscribe />
      </section>
    </div>
  );
};

export default Landing;
