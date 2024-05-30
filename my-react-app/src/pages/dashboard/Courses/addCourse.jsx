// import {
//     Card,
//     Input,
//     Checkbox,
//     Button,
//     Typography,
//   } from "@material-tailwind/react";
//   import { Link } from "react-router-dom";
//   import { useEffect, useState } from "react";
//   import {useSelector, useDispatch} from 'react-redux'
//   import {addCourse} from '@/redux/course/slice'


// function AddCourse({show}){
//    const dispatch = useDispatch();
//    const [image,setImage] = useState();
//    const [title,setTitle] = useState();
//    const [description,setDescription] = useState();
//    const [price,setPrice] = useState();

//    ///////////////// videos

//    const [videoNum,setVideoNum] = useState(1);
//    const [video,setVideo] = useState([]);
//    const [videos,setVideos] = useState([{title : "", description :"" , videoURL : ""}]);

//    function addVideo(){
//           setVideoNum(videoNum+1)
//           setVideos([...videos,{title : "", description :"" , videoURL : ""}])
//   }

//   async function handleVideos (index, field, value) { 
//    if(field == 'videoURL'){ setVideo(value.files[0]);
//       value = await uploadVideo();
//    }
//    const updatedVideos = [...videos];
//    updatedVideos[index][field] = value;
//    setVideos(updatedVideos);
//  };

//   function newVideo(index,video){   return(
//                <div class="px-5 pb-5">
//                <input placeholder="Title" value={video.title}
//                onChange={(e)=>handleVideos(index,'title',e.target.value)}
//                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
//                <textarea placeholder="Description"  value={video.description}
//                onChange={(e)=>handleVideos(index,'description',e.target.value)}
//                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>  
//                 <input name="Video" type="file" value={video.videoURL}
//                 onChange={(e)=>handleVideos(index,'videoURL',e.target)}
//                 class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
//                </div>
// );  
// }

//    //////////////////

//    /////////////IMAGE
//    const uploadImage = async () => {
//       const data = new FormData();
//       data.append("file", image);
//       data.append("upload_preset", "ciof6yzr");
//       data.append("cloud_name", "dxm05ueme");
//       data.append("folder", "Cloudinary-React");
   
  
//       try {
//         const response = await fetch( 
//           "https://api.cloudinary.com/v1_1/dxm05ueme/image/upload",
//           {
//             method: "POST",
//             body: data,
//           }
//         );
//         const responseData = await response.json(); // Parse response JSON
//         console.log("Cloudinary API Response:", responseData); // Log entire response
//         if (responseData && responseData.secure_url) {
//           // Check if secure_url is available in the response
//           return responseData.secure_url 
          
//         }else {
//           console.error("Image upload failed: Secure URL not found in response");
//         }
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//     ;
//     const Handlerphoto = (event) => {
//       const file = event.target.files[0];
//       console.log(file)
//       setImage(file);
  
  
//     };

//     ////////////

//     ////////////Video

//     const uploadVideo = async () => {
//       const urls=[];
//       const data = new FormData();
//       data.append("file", video);
//       data.append("upload_preset", "ciof6yzr");
//       data.append("cloud_name", "dxm05ueme");
//       data.append("folder", "Courses-videos");
   
  
//       try {
//         const response = await fetch( 
//           "https://api.cloudinary.com/v1_1/dxm05ueme/video/upload",
//           {
//             method: "POST",
//             body: data,
//           }
//         );
//         const responseData = await response.json(); // Parse response JSON
//         console.log("Cloudinary API Response:", responseData); // Log entire response
//         if (responseData && responseData.secure_url) {
//           // Check if secure_url is available in the response
//           return responseData.secure_url; 
          
//         }else {
//           console.error("Video upload failed: Secure URL not found in response");
//         }
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//     ;
//     const Handlervideo = (event) => {
//       const file = event.target.files[0];
//       console.log(file)
//       setVideo(file);

//     };
   
//    async function addButton() {
//   const secureUrl = await uploadImage(); // Call uploadImage function
//   if (secureUrl) {
//       dispatch(addCourse({Title : title, Description: description, Price : price, Image : secureUrl}))
//    }
//    }
//     return (
//                 <div className="overflow-y-scroll h-screen w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-100 bg-opacity-70 inset-0 z-50 ">
// <div class=" w-96">
//    <div class=" m-auto">
//       <div>
//         <div class=" mt-5 bg-white rounded-lg shadow">
//             <div class=" flex">
//                <div class="flex flex-row-reverse p-3">
//                <button onClick={show} className="btn btn-square btn-outline">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
//                </button>
//                </div>
//             </div>
//             <div class="px-5 pb-5">

//                <input placeholder="Title" 
//                value={title} onChange={(e)=>{setTitle(e.target.value)}}
//                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
//                <textarea placeholder="Description" 
//                value={description} onChange={(e)=>{setDescription(e.target.value)}}
//                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
//                <input placeholder="Price" 
//                value={price} onChange={(e)=>{setPrice(e.target.value)}}
//                class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
//                 <input name="Image" type="file" 
//                 onChange={(e)=>{Handlerphoto(e)}}
//                 class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
//                 {videos.map((video,index)=>{ return newVideo(index,video)})}
//                 <div className="flex justify-center" >
//                 <div className="w-28 text-center btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-black-500 bg-gray-600 " 
//                 onClick={addVideo}>add Video</div>
//                 </div>
//             </div>
            
//             <div class="px-5 ">  
//             </div>
//             <hr class="mt-4"/>
//             <div class="flex justify-center p-3">
//                <div class="flex-initial pl-3">
//                   <button type="button" onClick={()=>{addButton(); show()}}
//                   class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
//                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
//                         <path d="M0 0h24v24H0V0z" fill="none"></path>
//                         <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
//                         <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
//                      </svg>
//                      <span class="pl-2 mx-1">Add</span>
//                   </button>
//                </div>
//             </div>
//          </div>
         
//       </div>
//    </div>
// </div>
// </div>

//       );
// }

// export default AddCourse;

import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "@/redux/course/slice";

function AddCourse({ show }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([
    { v_image: "", title: "", description: "", videoUrl: "" },
  ]);

  function addVideo() {
    setVideos([...videos, { v_image: "", title: "", description: "", videoUrl: "" }]);
  }

  async function handleVideos(index, field, value) {
    const updatedVideos = [...videos];
    if (field === "videoUrl") {
      const file = value.files[0]; 
      const videoURL = await uploadVideo(file,`${title}_videos\/${updatedVideos[index]["title"]}`);
      value = videoURL;
    }
    if (field === "v_image") {
      const file = value.files[0]; 
      const v_image = await uploadv_Image(file,`${title}_images\/${updatedVideos[index]["title"]}`);
      value = v_image;
    }
    
    updatedVideos[index][field] = value;
    setVideos(updatedVideos);
  }

  function newVideo(index, video) {
    return (
      <div className="px-5 pb-5" key={index}>
        <input
          placeholder="Title"
          value={video.title}
          onChange={(e) => handleVideos(index, "title", e.target.value)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
        <textarea
          placeholder="Description"
          value={video.description}
          onChange={(e) => handleVideos(index, "description", e.target.value)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
        <input
          name="Image"
          type="file"
          onChange={(e) => handleVideos(index, "v_image", e.target)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
        <input
          name="Video"
          type="file"
          onChange={(e) => handleVideos(index, "videoUrl", e.target)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
      </div>
    );
  }

  const uploadv_Image = async (file,name) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ciof6yzr");
    data.append("public_id", name);
    data.append("cloud_name", "dxm05ueme");
    data.append("folder", title);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxm05ueme/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const responseData = await response.json();
      if (responseData && responseData.secure_url) {
        return responseData.secure_url;
      } else {
        console.error("Image upload failed: Secure URL not found in response");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ciof6yzr");
    data.append("public_id", title);
    data.append("cloud_name", "dxm05ueme");
    data.append("folder", title);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxm05ueme/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const responseData = await response.json();
      if (responseData && responseData.secure_url) {
        return responseData.secure_url;
      } else {
        console.error("Image upload failed: Secure URL not found in response");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };


  const uploadVideo = async (file,name) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ciof6yzr");
    data.append("public_id", name);
    data.append("cloud_name", "dxm05ueme");
    data.append("folder", title);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxm05ueme/video/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const responseData = await response.json();
      if (responseData && responseData.secure_url) {
        return responseData.secure_url;
      } else {
        console.error("Video upload failed: Secure URL not found in response");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const Handlerphoto = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  async function addButton() {
    const secureUrl = await uploadImage();
    if (secureUrl) { 
      dispatch(
        addCourse({ Title: title, Description: description, Price: price, Image: secureUrl, Videos : videos })
      );
    }
  }

  return (
    <div className="overflow-y-scroll h-screen w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-100 bg-opacity-70 inset-0 z-50">
      <div className="w-96">
        <div className="m-auto">
          <div>
            <div className="mt-5 bg-white rounded-lg shadow">
              <div className="flex">
                <div className="flex flex-row-reverse p-3">
                  <button onClick={show} className="btn btn-square btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-5 pb-5">
                <input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  name="Image"
                  type="file"
                  onChange={Handlerphoto}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                {videos.map((video, index) => newVideo(index, video))}
                <div className="flex justify-center">
                  <div
                    className="w-28 text-center btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-black-500 bg-gray-600"
                    onClick={addVideo}
                  >
                    Add Video
                  </div>
                </div>
              </div>
              <div className="px-5"></div>
              <hr className="mt-4" />
              <div className="flex justify-center p-3">
                <div className="flex-initial pl-3">
                  <button
                    type="button"
                    onClick={() => {
                      addButton();
                      show();
                    }}
                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path
                        d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                        opacity=".3"
                      ></path>
                      <path
                        d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
                      ></path>
                    </svg>
                    <span className="pl-2 mx-1">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
