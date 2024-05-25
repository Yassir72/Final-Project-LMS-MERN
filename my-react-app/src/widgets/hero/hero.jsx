import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <section>
          <div className="pt-24">
            <div className="container px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <h1 className="my-4 text-4xl md:text-5xl font-bold leading-tight md:leading-none">
                  Welcome to KnowledgeBud!
                </h1>
                <div className="bg-white text-black p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                  <p className="leading-normal text-2xl mb-8">
                    At KnowledgeBud, we are passionate about fostering a community where learning never stops. Our mission is to provide a dynamic, engaging platform where knowledge blossoms and learners thrive. Whether you are looking to deepen your understanding of a specific subject, explore new areas of interest, or enhance your professional skills, KnowledgeBud is here to support your educational journey.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-black text-white font-bold rounded-full py-5 px-10 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 py-6 text-center md:text-right">
                <img className="w-full md:w-4/5 z-50 md:ml-auto" src="../../../public/img/hero.png" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5 py-6 text-center md:text-left">
                <img className="w-full md:w-4/5 z-50 md:mr-auto" src="../../../public/img/elearning-website.jpg" />
              </div>
              <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <h2 className="my-4 text-4xl md:text-5xl font-bold leading-tight md:leading-none">
                  Why Choose KnowledgeBud?
                </h2>
                <div className="bg-white text-black p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                  <p className="leading-normal text-2xl mb-8">
                    We are committed to providing high-quality educational resources that empower you to achieve your goals. Our platform offers:
                  </p>
                  <ul className="list-disc list-inside text-left">
                    <li className="leading-normal text-2xl mb-4">Comprehensive Courses</li>
                    <li className="leading-normal text-2xl mb-4">Expert Instructors</li>
                    <li className="leading-normal text-2xl mb-4">Interactive Learning</li>
                    <li className="leading-normal text-2xl mb-4">Flexible Learning Paths</li>
                    <li className="leading-normal text-2xl mb-4">Supportive Community</li>
                  </ul>
                  <div className="flex justify-center">
                    <button className="bg-black text-white font-bold rounded-full py-5 px-10 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
