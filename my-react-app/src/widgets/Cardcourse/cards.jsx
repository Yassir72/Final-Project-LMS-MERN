import React, { useEffect, useState } from "react";
import axios from "axios";
import Card3 from "./minicards";
import { Link } from "react-router-dom";

const Card3Presentation = () => {
  const [cards, setCards] = useState([
    {
      className: "bg-[#fcf4ff]",
      heading: "Heading",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      thumbnailSrc: "/img/placeholder-1.jpg",
    },
    {
      className: "bg-[#fefaf0]",
      heading: "Heading",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      thumbnailSrc: "/img/placeholder-1.jpg",
    },
    {
      className: "bg-[#f3faff]",
      heading: "Heading",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      thumbnailSrc: "/img/placeholder-1.jpg",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsRes = await axios.get("http://localhost:3000/course/getCourses");
        const fetchedCards = cardsRes.data; // Assuming the response contains an array of course data

        // Update each project with fetched course data
        const updatedCards = cards.map((card, index) => {
          const fetchedCard = fetchedCards[index]; // Get corresponding fetched course
          return {
            ...card,
            thumbnailSrc: fetchedCard.Image || card.thumbnailSrc,
            heading: fetchedCard.Title || card.heading,
            description: fetchedCard.Price+"$" || card.description,
          };
        });

        setCards(updatedCards); 
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-hidden w-full h-full bg">
      <div className="top-0 left-0 whitespace-nowrap animate-marquee flex">
        {cards.map((card, index) => (
          <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 p-3">
            <Card3
              className={card.className}
              heading={card.heading}
              description={card.description}
              thumbnailSrc={card.thumbnailSrc}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 whitespace-nowrap animate-marquee2 flex">
        {cards.map((card, index) => (
          <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 p-3">
            <Card3
              className={card.className}
              heading={card.heading}
              description={card.description}
              thumbnailSrc={card.thumbnailSrc}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center overflow-hidden">
          <Link to='/usersPg/CoursesPage'>
            <button className="bg-black text-white font-bold rounded-full py-5 px-10 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Discover More Courses 
            </button>
          </Link> 
          </div>
    </div>
  );
};

export default Card3Presentation;
