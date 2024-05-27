import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getcoursebyID } from '@/redux/course/slice'
import VideoPlayer from "../dashboard/Courses/videoPlayer";

function CourseDetail() {
    const dispatch = useDispatch();

    const { courseOne } = useSelector((state) => state.courses);
    console.log(courseOne);
    // const [videos,setVideos]=useState(courses[0].Videos);




  useEffect(() => { 
        dispatch(getcoursebyID());
      }, [dispatch]);
    return(
        <>
        
<section className="bg-gray-100 text-gray-800">
	<div className="container max-w-9xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div className="h-[540px] block gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 bg-gray-50">
			<div className="h-full rounded lg:col-span-9 bg-gray-500 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" >
            
            <VideoPlayer/>
            
            </div>
			<div className="p-6 space-y-2 lg:col-span-3">
				<h3 className="text-2xl font-semibold sm:text-4xl ">
                {courseOne.Videos && courseOne.Videos[0].title}
                </h3>
				<span className="text-xs text-gray-600">February 19, 2021</span>
				<p>{courseOne.Videos && courseOne.Videos[0].description}</p>
			</div>
		</div>
	</div>


<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 "> 
    <article>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {courseOne.Videos && courseOne.Videos.map(({title,description},key) => {   
                return(
            <article key={key} className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    
                        <a className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center" href="#">
                            <img src={courseOne.Image} alt="" />
                        </a>
                    
                </div>
            </article>)
            })}
        </section>
    </article>
</section>
</section>


</>
    );
}

export default CourseDetail;