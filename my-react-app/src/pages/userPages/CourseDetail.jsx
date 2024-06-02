import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getcoursebyID } from '@/redux/course/slice'
import VideoPlayer from "../dashboard/Courses/videoPlayer";
import Header from "@/widgets/layout/header";
import FooterPage from "@/widgets/layout/footerPages";

function CourseDetail() {
    const dispatch = useDispatch();

    const { courseOne } = useSelector((state) => state.courses);
    const [vtitle,setVtitle] = useState();
    const [description,setDescription] = useState();


    // const [videos,setVideos]=useState(courses[0].Videos);

    function define_video(title,description){
        setVtitle(title);
        setDescription(description)
    }

    function display_video(){ console.log(vtitle);console.log(description);
        if(vtitle && description){ console.log("aaa");
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
        dispatch(getcoursebyID());
        
      }, [dispatch]);


    return(courseOne.Videos && 
        <>
        
<Header/>
<section className="pb-5 bg-gray-100 text-gray-800">
	
           {display_video()}
       
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 "> 
    <article >
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            { courseOne.Videos.map(({title,v_image,description},key) => {   
                return(
            <article key={key} 
             className="relative hover:bg-black  w-full h-64  group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div className="absolute bg-black bg-opacity-25 inset-0 transition duration-300 ease-in-out"></div>
                <div style={{backgroundImage:`url(${v_image})`,opacity:.8}} className=" bg-cover relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    
                        <a href="#" onClick={()=>{define_video(title,description)}} className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end" >
                            
                            <p className="mb-6 text-white ">{title}</p>
                        </a>
                    
                </div>
            </article>)
            })}
        </section>
    </article>
</section>
</section>
<section className="w-full py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
      <h2 className="text-3xl font-bold tracking-tight">Featured Videos</h2>
    </div>
    <div className="overflow-x-auto pb-4 scrollbar-custom scroll-smooth">
      <div className="flex space-x-6 w-max min-w-full">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 1"
            className="object-cover w-full aspect-[3/2]"
            height="200"
            src="/placeholder.svg"
            width="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end h-full p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Introducing the New Product Line
              </h3>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 2"
            className="object-cover w-full aspect-[3/2]"
            height="200"
            src="/placeholder.svg"
            width="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end h-full p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Behind the Scenes: Product Photoshoot
              </h3>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 3"
            className="object-cover w-full aspect-[3/2]"
            height="200"
            src="/placeholder.svg"
            width="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end h-full p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Product Demo: How to Use Our New Feature
              </h3>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 4"
            className="object-cover w-full aspect-[3/2]"
            height="200"
            src="/placeholder.svg"
            width="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end h-full p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Customer Testimonial: Why They Love Our Product
              </h3>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 5"
            className="object-cover w-full aspect-[3/2]"
            height="200"
            src="/placeholder.svg"
            width="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end h-full p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Expert Interview: Industry Insights
              </h3>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt="Video 6"
            className="object-cover w-full aspect-[3/2]"
            height="200"
            src="/placeholder.svg"
            width="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-end h-full p-4">
              <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Product Launch Highlights
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






        <FooterPage/>

</>
    );
}

export default CourseDetail;