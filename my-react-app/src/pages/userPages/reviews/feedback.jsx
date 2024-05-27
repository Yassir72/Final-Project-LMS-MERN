import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Sheryl Berge',
    message: 'I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.',
    imgSrc: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'Leland Kiehn',
    message: 'As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of products.',
    imgSrc: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    name: 'Peter Renolds',
    message: 'The fitness apparel I bought here fits perfectly and feels amazing. Nice website . kepp up the amazing work ',
    imgSrc: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Jessica Lee',
    message: 'Amazing customer service and quick delivery. The products are top-notch and exactly as described.',
    imgSrc: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    name: 'James Smith',
    message: 'I have been a regular customer and I am always impressed with the quality and variety of the products offered.',
    imgSrc: 'https://randomuser.me/api/portraits/men/16.jpg',
  },
  {
    name: 'Linda Johnson',
    message: 'Great prices and fantastic products. I always find what I need for my training sessions. So Nice',
    imgSrc: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
];

const Feedback = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePreviousPage = () => {
    setPageIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    pageIndex * testimonialsPerPage,
    (pageIndex + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" aria-label="What our customers are saying" className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black-800">What Our Customers Are Saying</h2>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {currentTestimonials.map((testimonial, index) => (
            <li key={index}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">{testimonial.message}</p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">{testimonial.name}</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img alt={testimonial.name} className="h-14 w-14 object-cover" src={testimonial.imgSrc} />
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="inline-flex items-center justify-center rounded-full bg-black text-white p-2 hover:bg-slate-700"
            onClick={handlePreviousPage}
            aria-label="Previous testimonials"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center rounded-full bg-black text-white p-2 hover:bg-slate-700"
            onClick={handleNextPage}
            aria-label="Next testimonials"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
