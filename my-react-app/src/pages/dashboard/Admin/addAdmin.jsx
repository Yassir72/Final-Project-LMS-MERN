import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import { useEffect, useState } from "react";
  import {useSelector, useDispatch} from 'react-redux'
  import {addAdmin} from '@/redux/admin/slice'


function AddAdmin({show}){
   const dispatch = useDispatch();
   const [image,setImage] = useState();
   const [email,setEmail] = useState();
   const [name,setName] = useState();
   const [password,setPassword] = useState();
   const [role,setRole] = useState();

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
    }
     
   async function addButton() {
      const secureUrl = await uploadImage(); // Call uploadImage function
      if (secureUrl) {
          dispatch(addAdmin({Name : name, Email: email, Password : password, Image : secureUrl, Role : role}))
       }
       }

    return (
                <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-100 bg-opacity-70 inset-0 z-50 overflow-y-auto">
<div class="w-96">
   <div class="m-auto">
      <div>
        <div class="mt-5 bg-white rounded-lg shadow">
            <div class="flex">
               <div class="flex flex-row-reverse p-3">
               <button onClick={show} className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
               </div>
            </div>
            <div class="px-5 pb-5">

               <input placeholder="Name" id="Name" 
               value={name} onChange={(e)=>{setName(e.target.value)}}
               class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               <input placeholder="Email" 
               value={email} onChange={(e)=>{setEmail(e.target.value)}}
               class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               <input placeholder="Password" 
               value={password} onChange={(e)=>{setPassword(e.target.value)}}
               class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               <select name="cars" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" 
               onChange={(e)=>{setRole(e.target.value)}}>
                  <option value="Admin">Admin</option>
                  <option value="Super Admin">Super Admin</option>
               </select>
               <input name="Image" type="file" 
                onChange={(e)=>{Handlerphoto(e)}}/>
            </div>
            
            <div class="px-5 ">  
            </div>
            <hr class="mt-4"/>
            <div class="flex justify-center p-3">
               <div class="flex-initial pl-3">
                  <button type="button" onClick={()=>{addButton(); show()}}
                  class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span class="pl-2 mx-1">Add</span>
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




export default AddAdmin;