import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-black">
      <div className="container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <FontAwesomeIcon icon={faBrain} className="h-8 inline mr-2" />
            KnowledgeBud
          </a>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline" onClick={() => scrollToSection('hero')}>About</button>
            </li>
            <li className="mr-3">
              <button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline" onClick={() => scrollToSection('courses')}>Courses</button>
            </li>
            <li className="mr-3">
              <button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline" onClick={() => scrollToSection('pricing')}>Pricing</button>
            </li>
            <li className="mr-3">
              <button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline" onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Sign In
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Navbar;
