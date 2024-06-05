import React from "react";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import EditInstructor from "../dashboard/Instructors/editInstructor";
import Header from "@/widgets/layout/header";
import FooterPage from "@/widgets/layout/footerPages";
import AddCourse from "../dashboard/Courses/addCourse";
import { Link } from "react-router-dom";


export const InstructorProfile = () => {
  const { instructor } = useSelector((state) => { return state.instructors});
  const [username, setUserName] = useState(instructor.username);
  const [email, setEmail] = useState(instructor.email)
  const [phonenumber, setPhonenumber] = useState(instructor.phonenumber)
  const [name, setName] = useState(instructor.name)
  const [specialite, setSpecialite] = useState(instructor.specialite)
  const [image, setImage] = useState(instructor.Image)
  const [_id, setId] = useState(instructor._id)
  const [editCard, setEditCard] = useState(false);
  const [edited, setEdited] = useState(null);
  const [addCard, setAddCard] = useState(false);

  const hideEditCard = () => setEditCard(false);
  const hideAddCard = () => setAddCard(false);

  const post_date = (date1) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    date1 = date1.split('T')[0];
    let month = date1.split('-')[1];
    month = months[month - 1];
    return `${date1.split('-')[2]} ${month} ${date1.split('-')[0]}`;
  };

  return instructor != {} &&( 
  <>  
   <Header user='Instructor'/> 
    <div className="h-full bg-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img
            src="/img/background-image.png"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
            alt="Profile Background"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img
            src={image}
            className="w-40 border-4 border-black rounded-full"
            alt="Profile Picture"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl text-black">{username}</p>
            <span className="bg-black rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <p className="text-sm text-gray-500">Casa</p>
        </div>
      </div>
      <div className="my-4 flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4">
        <div className="w-full xl:w-full">
          <div className="bg-white rounded-lg shadow-xl pl-8 pr-8 pt-4 pb-6">
          
          <div className="flex items-center justify-between space-x-4 mt-2">
          <h4 className="text-xl text-black font-bold">Personal Info</h4>
            <button onClick={() => { setEditCard(true); setEdited({ name, email,username, phonenumber, specialite,image , _id }) }}
             className="flex items-center bg-black hover:bg-gray-900 text-white px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L11.9132 14.8422L9 11.9289L5 15.928V19H15.533L16.2414 19.0012L17.57 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"></path></svg>
              </svg>
              <span>Edit</span>
            </button>
            </div>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24 text-black">name:</span>
                <span className="text-gray-700">{name}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Email:</span>
                <span className="text-gray-700">{email}</span>
              </li>
              
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Mobile:</span>
                <span className="text-gray-700">{phonenumber}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Specialty:</span>
                <span className="text-gray-700">{specialite}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Joined:</span>
                <span className="text-gray-700">{post_date(instructor.createdAt)} </span>
              </li>  
            </ul>
          </div>
        </div>
      </div>
  <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl text-gray-900 font-bold">My Courses</h4>
        <button onClick={() => setAddCard(true)}
             className="flex items-center bg-black hover:bg-gray-900 text-white px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L11.9132 14.8422L9 11.9289L5 15.928V19H15.533L16.2414 19.0012L17.57 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"></path></svg>
              </svg>
              <span>Add Course</span>
            </button>
      </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {instructor.courses.map((course) => (
            <Link to={`InstPg/CourseDetail/${course._id}`}
             key={course._id} className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
              <img
                src={course.Image}
                alt={course.Title}
                className="h-40 bg-gray-400 rounded-lg object-cover w-full"
              />
              <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl font-semibold">{course.Title}</h4>
                <p className="text-sm">{course.Description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
<FooterPage/>
    {editCard && <EditInstructor show={hideEditCard} EditContent={edited}/> }
    {addCard && <AddCourse show={hideAddCard} id={instructor._id}/>}
  </>
  
  )
};

export default InstructorProfile;
