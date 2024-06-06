import { useLocation, Link, useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from "jwt-decode"

const Header = () => {
  
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  let payload = {};
  if(token){ payload = jwtDecode(token)}
  
  console.log(payload);
  const handleLogout = (e) => {
    e.preventDefault() 
    localStorage.removeItem('token')
    navigate('/usersPg/signin')
  };
  function user_Profile(){ 
  if(payload.accountType=='Instructor') 
    return'/InstPg/InstructorProfile'
  else
  return'/StuPg/StudentProfile'
  }
  function course_path(){ 
    if(payload.accountType=='Instructor') 
      return'/InstPg/CoursesPage'
    else
    return'/StuPg/CoursesPage'
    }
  
  return ( 
    <nav id="header" className=" w-full z-30 top-0 text-white bg-black">
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
            <Link to='/StuPg/StartCourse'>
              <button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline" >Start</button>
            </Link>
            </li>
            <li className="mr-3">
            <Link to={course_path()}>
              <button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline">Courses</button></Link>
            </li>
            <li className="mr-3">
              <Link to={user_Profile()}><button className="inline-block py-2 px-4 text-white font-bold no-underline hover:underline">Profile</button></Link>
            </li>
          </ul>
          
           <button
            id="navAction"
            onClick={handleLogout}
            className="mx-auto lg:mx-0 hover:underline bg-gray-300 text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >Sign Out
           </button>
           <Link to="/StuPg/Shop" className="flex items-center space-x-2 lg:mx-10">
      <svg className="h-8 w-8 text-white mb-2 mx-auto" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="9" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
      </svg>
      <span className="text-white">My Cart</span>
    </Link>
  
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
