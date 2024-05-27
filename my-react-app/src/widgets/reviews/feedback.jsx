import React, { useState } from 'react';
import { Card, Typography, Avatar, IconButton } from '@material-tailwind/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'; // Utilisation de react-icons

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
    message: 'The fitness apparel I bought here fits perfectly and feels amazing. Nice website. Keep up the amazing work.',
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
    message: 'Great prices and fantastic products. I always find what I need for my training sessions. So nice.',
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
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="h2" className="text-5xl font-bold leading-tight text-gray-900">
            What Our Customers Are Saying
          </Typography>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {currentTestimonials.map((testimonial, index) => (
            <li key={index}>
              <Card className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                {/* <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg> */}
                <blockquote className="relative">
                  <Typography variant="body1" className="text-lg tracking-tight text-gray-900">
                    {testimonial.message}
                  </Typography>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <Typography variant="h6" className="text-base text-gray-900">
                      {testimonial.name}
                    </Typography>
                  </div>
                  <div className="overflow-hidden rounded-full bg-gray-50">
                    <Avatar alt={testimonial.name} src={testimonial.imgSrc} size="lg" />
                  </div>
                </figcaption>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center gap-4">
          <IconButton
            color="gray"
            variant="outlined"
            onClick={handlePreviousPage}
            aria-label="Previous testimonials"
          >
            <FiArrowLeft className="h-6 w-6" />
          </IconButton>
          <IconButton
            color="gray"
            variant="outlined"
            onClick={handleNextPage}
            aria-label="Next testimonials"
          >
            <FiArrowRight className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
