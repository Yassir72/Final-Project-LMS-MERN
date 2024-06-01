import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStudent} from "../../redux/student/slice";
import Header from "@/widgets/layout/header";
import FooterPage from "@/widgets/layout/footerPages";

export const StudentProfile = () => {
  const dispatch = useDispatch();
  const { students, isLoading, error } = useSelector((state) => state.students);
  const [username, setUserName] = useState(students.username);
  const [email, setEmail] = useState(students.email)
  const [phonenumber, setPhonenumber] = useState(students.phoneNumber)
  const [location, setLocation] = useState(students.location)
  const [firstname, setFirstname] = useState(students.firstname)
  const [lastname, setLastname] = useState(students.lastname)
  const [birthday, setBirthday] = useState(students.birthday)
  const [linkedIn, setLinkedIn] = useState(students.linkedIn)
  const [github, setGithub] = useState(students.github)
  const [image, setImage] = useState(students.Image)


  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ciof6yzr");
    data.append("cloud_name", "dxm05ueme");
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch( 
        "https://api.cloudinary.com/v1_1/dxm05ueme/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const responseData = await response.json(); // Parse response JSON
      console.log("Cloudinary API Response:", responseData); // Log entire response
      if (responseData && responseData.secure_url) {
        // Check if secure_url is available in the response
        return responseData.secure_url 
        
      }else {
        console.error("Image upload failed: Secure URL not found in response");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
  ;
  const Handlerphoto = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setImage(file);
  };


  async function editButton(){ 
    const secureUrl = await uploadImage(); 
 if (secureUrl) {
    dispatch(editStudent({id : students._id,email:email,username: username,firstname : firstname,lastname :lastname,location:location,phoneNumber:phonenumber,birthday:birthday,linkdIn:linkedIn,github:github,Image:secureUrl}))
    setShowForm(false)
  }
  
 }

  return (
  <>  
   <Header/> 
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
            src={students.Image}
            className="w-40 border-4 border-black rounded-full"
            alt="Profile Picture"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl text-black">{students.username}</p>
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
          <p className="text-sm text-gray-500">{students.location}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">

            <button onClick={handleShowForm} className="flex items-center bg-black hover:bg-gray-900 text-white px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L11.9132 14.8422L9 11.9289L5 15.928V19H15.533L16.2414 19.0012L17.57 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"></path></svg>
              </svg>
              <span>Edite</span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4">
        <div className="w-full xl:w-full">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-black font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24 text-black">first name:</span>
                <span className="text-gray-700">{students.firstname}</span>
              </li>
              <li className="flex border-y py-2">
                <span className="font-bold w-24 text-black">last name:</span>
                <span className="text-gray-700">{students.lastname}</span>
              </li> 
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Birthday:</span>
                <span className="text-gray-700">{students.birthday}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Joined:</span>
                <span className="text-gray-700">{students.createdAt} </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Mobile:</span>
                <span className="text-gray-700">{students.phoneNumber}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Email:</span>
                <span className="text-gray-700">{students.email}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24 text-black">Location:</span>
                <span className="text-gray-700">{students.location}</span>
              </li>
              <li className="flex items-center border-b py-2 space-x-2">
                <span className="font-bold w-24 text-black">Elsewhere:</span>
                
                <a href={students.linkedIn} title="LinkedIn">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333333 333333"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                      fill="#0077b5"
                    />
                  </svg>
                </a>
                <a href={students.github} title="Github">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                      fill="#000"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl text-gray-900 font-bold">Enrolled Courses</h4>
      </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {students.courses.map((course) => (
            <div key={course._id} className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
              <img
                src={course.Image}
                alt={course.Title}
                className="h-40 bg-gray-400 rounded-lg object-cover w-full"
              />
              <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl font-semibold">{course.Title}</h4>
                <p className="text-sm">{course.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterPage/>
    </div>

{showForm && (
<div className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-100 bg-opacity-70 inset-0 z-50 overflow-y-auto">
    <div class="w-96">
       <div class="m-auto">
          <div>
            <div class="mt-5 bg-white rounded-lg shadow">
                <div class="flex">
                   <div class="flex flex-row-reverse p-3">
                   <button onClick={() => setShowForm(false)} className="btn btn-square btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
                   </div>
                </div>
                <div class="px-5 pb-5">
    
                   
                  <input placeholder="First name"  type="text"
                   value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}
                   class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Last name"  
                  value={lastname} onChange={(e)=>{setLastname(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  <input placeholder="Email" type="email" 
                  value={email} onChange={(e)=>{setEmail(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Username" type="text" 
                  value={username} onChange={(e)=>{setUserName(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Mobile" type="text" 
                  value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Birthday" type="text" 
                  value={birthday} onChange={(e)=>{setBirthday(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Location" type="text" 
                  value={location} onChange={(e)=>{setLocation(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Your path LinkedIn" type="text"
                  value={linkedIn} onChange={(e)=>{setLinkedIn(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  <input placeholder="Your path Github " type="text" 
                  value={github} onChange={(e)=>{setGithub(e.target.value)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                  
                
                  <input name="Image"  type="file"
                  onChange={(e)=>{Handlerphoto(e)}}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               
                </div>
                
                <div class="px-5 ">  
                </div>
                <hr class="mt-4"/>
                <div class="flex justify-center p-3">
                   <div class="flex-initial pl-3">
                      <button type="button" onClick={()=>{editButton()}} 
                      class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                         </svg>
                         <span class="pl-2 mx-1">Save</span>
                      </button>
                   </div>
                </div>
             </div>
             
          </div>
       </div>
    </div>
  </div>
  )}
  </>
  
  )
};

export default StudentProfile;
