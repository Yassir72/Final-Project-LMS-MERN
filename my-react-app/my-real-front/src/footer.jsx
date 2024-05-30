import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className=" w-full z-30 bottom-0 text-white bg-black">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center"
              href="#"
            >
              <FontAwesomeIcon icon={faBrain} className="h-8 inline mr-2" />
              KnowledgeBud
            </a>
          </div>
          <div className="flex-1 md:ml-8">
            <p className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline">Links</p>
            <ul className="list-none md:list-disc mb-6 ">
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white "
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline">Legal</p>
            <ul className="list-none md:list-disc mb-6">
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline">Social</p>
            <ul className="list-none md:list-disc mb-6">
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline">Company</p>
            <ul className="list-none md:list-disc mb-6">
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Official Blog
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 md:mt-0 md:ml-8">
                <a
                  href="#"
                  className="no-underline hover:underline text-white hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
