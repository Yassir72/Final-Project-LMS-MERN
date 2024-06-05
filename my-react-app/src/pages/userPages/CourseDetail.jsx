import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getcoursebyID } from '@/redux/course/slice'
import VideoPlayer from "../dashboard/Courses/videoPlayer";
import Header from "@/widgets/layout/header";
import FooterPage from "@/widgets/layout/footerPages";
import { useParams } from "react-router-dom";

function CourseDetail() {
    const dispatch = useDispatch();

    const { courseOne } = useSelector((state) => state.courses);
    console.log(courseOne);
    const [vtitle,setVtitle] = useState();
    const [description,setDescription] = useState();
    const {id} = useParams();
    console.log(id);


    // const [videos,setVideos]=useState(courses[0].Videos);

    function define_video(title,description){
        setVtitle(title);
        setDescription(description)
    }

    function display_video(){ 
        if(vtitle && description){
            return(
              <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
              <div className="h-[540px] block gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 bg-gray-50">
                <div className="h-full rounded lg:col-span-9 bg-gray-500 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                  <VideoPlayer title={`${courseOne.Title}\/${courseOne.Title}_videos\/${vtitle}`} />
                </div>
                <div className="p-6 space-y-2 lg:col-span-3">
                  <h3 className="text-2xl font-semibold sm:text-4xl">
                    {vtitle}
                  </h3>
                  <span className="text-xs text-gray-600">February 19, 2021</span>
                  <p>{description}</p>
                </div>
              </div>
           </div>
                     
            )
        }
        else{
            return(
            <div className="container max-w-9xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="h-[540px] block gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 bg-gray-50">
                    <div className="h-full rounded lg:col-span-9 bg-gray-500 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" >
                    
                    <VideoPlayer title={`${courseOne.Title}\/${courseOne.Title}_videos\/${courseOne.Videos[0].title}`}/>
                    
                    </div>
                    <div className="p-6 space-y-2 lg:col-span-3">
                        <h3 className="text-2xl font-semibold sm:text-4xl ">
                        { courseOne.Videos[0].title}
                        </h3>
                        <span className="text-xs text-gray-600">February 19, 2021</span>
                        <p>{ courseOne.Videos[0].description}</p>
                    </div>
                </div>
            </div>
            )
        }
    }


  useEffect(() => { 
        dispatch(getcoursebyID(id));
        
      }, [dispatch]);


    return(courseOne.Videos && 
        <>
        
<Header/>
<section className="pb-5 bg-gray-100 text-gray-800">
	
           {display_video()}
       


<section className="w-full py-4">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-start p-4 md:items-center justify-between gap-4 md:gap-8">
      <h2 className="text-3xl font-bold tracking-tight">Videos</h2>
    </div>
    <div className="overflow-x-auto pb-4 scrollbar-custom scroll-smooth">
      <div className="flex space-x-6 w-max min-w-full">
      { courseOne.Videos.map(({title,v_image,description},key) => {   
                return(
            
          <div key={key} 
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-[200px] w-[300px] ">
          <a className="absolute inset-0 z-10" href="#" onClick={()=>{define_video(title,description)}}>
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 1"
            className="object-cover h-full w-full"       
            src={v_image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end justify-center h-full pb-7">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {title}
              </h3>
            </div>
          </div>
          </div>
            
            )
            })}
        
      </div>
    </div>
  </div>
</section>
</section>





        <FooterPage/>

</>
    );
}

export default CourseDetail;