import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getcoursebyID } from "../../redux/course/slice"; // Assurez-vous que votre slice est correctement importé

export const CourseVideos = () => {
  const { courseId } = useParams(); // Récupère l'ID du cours depuis l'URL
  const dispatch = useDispatch();
  const { courseOne, isLoading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getcoursebyID(courseId)); // Dispatch l'action pour récupérer le cours par son ID
  }, [dispatch, courseId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courseOne || !courseOne.Videos) {
    return <div>No course data available</div>;
  }

  return (
    <div className="flex items-center justify-center w-full py-12 md:py-16 lg:py-20">
      <div className="overflow-x-auto scrollbar-custom scroll-smooth flex space-x-6 w-full min-w-full">
        {courseOne.Videos.map((video) => (
          <div
            key={video._id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out min-w-[300px]"
          >
            
           
           
            <img
              alt={video.title}
              className="object-cover w-full aspect-[3/2]"
              src={video.v_image}
              width="300"
              height="200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-end h-full p-4">
                <h3 className="text-white font-semibold text-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          </div>
         
        ))}
      </div>

      {/* Styles pour la scrollbar horizontale personnalisée */}
      <style>
        {`
          .scrollbar-custom {
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
            overflow-x: auto;
            white-space: nowrap;
          }

          .scrollbar-custom::-webkit-scrollbar {
            height: 8px;
          }

          .scrollbar-custom::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .scrollbar-custom::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 10px;
            border: 2px solid #f1f1f1;
          }

          .scrollbar-custom::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </div>
  );
};

export default CourseVideos;
