import { useState } from "react";
import { useSelector } from "react-redux";
import { Rating } from "@material-tailwind/react";
import { useNavigate,Link } from "react-router-dom";

export function CoursesStartCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { students } = useSelector((state) => state.students);

  // Vérifier si students et students.courses sont définis
  if (!students || !students.courses) {
    return <div>Loading...</div>; // Vous pouvez aussi afficher un indicateur de chargement
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = students.courses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div role="article" className="bg-gray-100 md:px-8">
            <div className="px-4 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h4 className="font-semibold text-2xl text-gray-400">Courses</h4>
                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                      Enhance your skills
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 mb-8 flex flex-col gap-12">
              <div className="section cards mx-auto border grid md:grid-cols-3 md:px-12 bg-gray-200 text-gray-800">
                {currentCourses.map((course) => (
                  <Link to={`/StuPg/CourseDetail/${course._id}`}>
                  <div
                    key={course._id}
                    className="card min-h-24 text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded-lg bg-white p-6 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border border-gray-300"
                  >
                    <a
                      target="_self"
                      
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    ></a>
                    <div className="relative mb-4 rounded-2xl">
                      <img
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={course.Image}
                        alt=""
                      />
                      <a
                        className="flex justify-center items-center bg-black bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        Read Course
                        <svg
                          className="ml-2 w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                      <button
                        className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full flex items-center justify-center transition duration-300 transform scale-0 group-hover:scale-100"
                        onClick={() => handleAddToCart(course)}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-full pb-4 mb-auto">
                      <div className="flex items-center">
                        <div className="pr-3">
                          <button className="bg-black text-white rounded px-3 py-1 mx-1">
                            Start
                          </button>
                        </div>
                        <div className="flex flex-1">
                          <div>
                            <p className="text-sm font-semibold">{course.InstructorName}</p>
                            <p className="text-sm text-gray-500">{course.InstructorRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                      <a
                       
                        className="block relative group-hover:text-black transition-colors duration-200"
                      >
                        {course.Title}
                      </a>
                    </h3>
                    <div className="text-xs">{course.Description}</div>
                  </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center">
                 <button onClick={()=>setCurrentPage(currentPage-1)}
                    disabled={currentPage==1? true : false}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                       aria-hidden="true" class="w-4 h-4">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                     Previous
                 </button>
                <nav aria-label="Page navigation example">
                  <ul className="flex space-x-2">
                    {Array.from({ length: Math.ceil(students.courses.length / itemsPerPage) }, (_, i) => (
                      <li key={i} className="page-item">
                        <button
                          onClick={() => paginate(i + 1)}
                          className={`page-link ${
                            i + 1 === currentPage ? "bg-black text-white" : "bg-white text-black"
                          } rounded px-3 py-1 mx-1`}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <button onClick={()=>setCurrentPage(currentPage+1)} 
                        disabled={currentPage==Math.ceil(students.courses / itemsPerPage)? true : false}
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                         Next
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                           aria-hidden="true" class="w-4 h-4">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                    </button>
   
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesStartCard;
