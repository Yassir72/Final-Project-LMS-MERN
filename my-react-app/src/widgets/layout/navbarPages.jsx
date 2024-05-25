// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
// import React,{ useState } from "react";


// export function NavPage() {
//   const [isOpen , setIsOpen] = useState(false);
//   const [openNav, setOpenNav] = React.useState(false);
  
  
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);

   
//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
//       >
//         <Link to ='/usersPg/LandingPage' className="flex items-center">
//           Home
//         </Link>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
//       >
//         <Link to='/usersPg/CoursesPage' className="flex items-center">
//           Course
//         </Link>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
//       >
//         <a href="#" className="flex items-center">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="font-normal transition-colors hover:text-blue-900 focus:text-blue-100"
//       >
//         <a href="#" className="flex items-center">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );

//   return (
//     <>

// <nav class="top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
//   <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
//     <a href="#" class="flex items-center">
//     <img src="https://res.cloudinary.com/dkolh6t1e/image/upload/e_gen_restore/v1716485577/Capture_d_%C3%A9cran_2024-05-23_181844-removebg-preview_n5reon.png" alt="logo-ct" className="w-10" />
//      <span class="self-center whitespace-nowrap text-xl font-semibold">KNOWLEDGBUD</span>
//     </a>
//     <div class="mt-2 sm:mt-0 sm:flex md:order-2">
//     <div className="relative inline-block">
//             <button
//               onClick={() => setIsOpen((prev) => !prev)}
//               className="  bg-black py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-black ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
//             >
//             <li className="list-none">  Sing In/ Sing Up </li>
//             <svg
//               className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-90'}`}
//               xmlns="http://www.w3.org/2000/svg"
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//             >
//             <path
//               fill="currentColor"
//               d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
//             />
//             </svg>
//             </button>
//       {isOpen && (
//         <ul className="absolute mt-2 flex flex-col items-start rounded-lg p-2 w-full shadow-lg bg-white border border-zinc-200 gap-2">
//           <li className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"></path></svg></svg>

//             <Link to="/dashboard/home">Admin</Link>
//           </li>
//           <li className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1Z"></path></svg>
//           </svg>
          
//             <Link to="/">Instructor</Link>
//           </li>
//           <li className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
//           </svg>

//             <Link to="/student">Student</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//     <div className="relative inline-block">
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setOpenNav((prev) => !prev)}>
//         <span class="sr-only">Open main menu</span>
//         <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//       </button>
//       {openNav && (navList)}
//     </div>
//     </div>
//     <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
//       <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
//         <li>
//           <Link to="/usersPg/LandingPage" class="block rounded bg-black py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-black" >Home</Link>
//         </li>
//         <li>
//           <Link to="/usersPg/CoursesPage" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-black" aria-current="page">Couses</Link>
//         </li>
//         <li>
//           <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-black">Services</a>
//         </li>
//         <li>
//           <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-black">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>




// </>
//       )
// }
// export default NavPage;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const NavbarPage = () => {
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

export default NavbarPage;
