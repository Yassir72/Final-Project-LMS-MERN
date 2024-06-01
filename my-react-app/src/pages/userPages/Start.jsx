import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcourses } from '@/redux/course/slice';
import { getcategorys } from '@/redux/category/slice';
import Header from "@/widgets/layout/header";
import FooterPages from "@/widgets/layout/footerPages";
import CoursesStartCard from "@/widgets/layout/coursesStartCard";


export function Start() {

   const {students}= useSelector((state)=> state.students)


   return (
      <>
     <Header />
     <div className="bg-white">
         <div className="container mx-auto">
            <div role="article" className="bg-white py-5 md:px-8">
               <div className="px-4 xl:px-0 ">
                  <div className="flex flex-col lg:flex-row flex-wrap">
                     <div className="mt-4 lg:mt-0 lg:w-3/5">
                        <div>
                           <h1 className="  py-10 text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                             Hi, {students.username}
                           </h1>
                        </div>
                     </div>
                    <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                    <div class="flex space-x-6 items-center">
                        <img src="https://res.cloudinary.com/dxm05ueme/image/upload/v1717168958/omlxekfcbc0dlsitt7w7.png" class="w-auto h-24 rounded-lg"/>
                        <div>
                            <p class="font-semibold text-1xl">4</p>
                            <p class="font-semibold text-1xl text-gray-400">Courses</p>
                        </div>              
                    </div>
                </div>

                  </div>
                  </div>
                </div>
     

                  </div>
               </div>
    

   
   
         

         <CoursesStartCard/>

         <FooterPages />
      </>
   );
}

export default Start;
