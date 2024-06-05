import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcourses } from '@/redux/course/slice';
import { Rating } from "@material-tailwind/react";
import { addCourseToCart } from "@/redux/cartSlice";

export function CourseCarde({ client }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.courses);
    const [searchItem, setSearchItem] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
        const filteredItems = courses.filter((course) =>
            course.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filteredItems);
        setCurrentPage(1); 
    }

    useEffect(() => {
        dispatch(getcourses());
    }, [dispatch]);

    useEffect(() => {
        setFilteredCourses(courses);
    }, [courses]);

    const handleAddToCart = (courseId) => { console.log(client);
        dispatch(addCourseToCart({ client, courseId }));
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div role="article" className="bg-gray-100 py-12 md:px-8">
                    <div className="px-4 xl:px-0 py-10">
                        <div className="flex flex-col lg:flex-row flex-wrap">
                            <div className="mt-4 lg:mt-0 lg:w-3/5">
                                <div>
                                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                                        Popular Courses
                                    </h1>
                                </div>
                            </div>
                            <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                                <div className="pt-2 relative text-gray-600">
                                    <input 
                                        className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
                                        type="text" 
                                        name="search" 
                                        placeholder="Search" 
                                        value={searchItem} 
                                        onChange={handleInputChange}
                                    />
                                    <button type="submit" className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4">
                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="mt-12 mb-8 flex flex-col gap-12">
                        <div className="section cards mx-auto border grid md:grid-cols-3 md:px-12 bg-gray-200 text-gray-800">
                            {currentCourses.map((course) => (
                                <div
                                    key={course._id}
                                    className="card min-h-24 text-sm shadow-lg max-w-sm m-5 mx-auto sm:mx-auto md:m-5 overflow-hidden flex flex-col rounded-lg bg-white p-6 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border border-gray-300"
                                >
  
                                    <div className="relative mb-4 rounded-2xl">
                                        <img
                                            className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                            src={course.Image}
                                            alt=""
                                        />
                                        <a
                                            className="flex justify-center items-center bg-black bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                                            href={course.Description}
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
                                            onClick={() => handleAddToCart(course._id)}
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
                                                <img
                                                    className="h-12 w-12 rounded-full object-cover"
                                                    src="../../../public/img/team-4.jpeg"
                                                    alt=""
                                                />
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
                                            href={course.Image}
                                            className="block relative group-hover:text-black transition-colors duration-200"
                                        >
                                            {course.Title}
                                        </a>
                                    </h3>
                                    <div className="mt-2">
                                        <div className="flex items-center">
                                            <Rating value={5} />
                                        </div>
                                        <div className="mt-2 text-lg text-gray-900 font-semibold">
                                            ${course.Price}
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-col space-y-2 text-sm text-gray-500">
                                        <div className="py-4 border-t border-b text-xs text-gray-700">
                                            <div className="grid grid-cols-6 gap-1">
                                                <div className="col-span-2">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1Z"></path></svg>
                                                        </svg>
                                                        <span>{course.InstructorName} Instructor</span>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                                                        </svg>
                                                        <span>{course.Hours} Hours</span>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
                                                        </svg>
                                                        <span>Student</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs">{course.Description}</div>
                                    </div>
                                    <button onClick={() => handleAddToCart(course._id)} className="bg-black text-white font-bold py-2 px-4 rounded-full mt-4">
                                        Add To Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <nav aria-label="Page navigation example">
                                <ul className="flex space-x-2">
                                    {Array.from({ length: Math.ceil(filteredCourses.length / itemsPerPage) }, (_, i) => (
                                        <li key={i} className="page-item">
                                            <button
                                                onClick={() => paginate(i + 1)}
                                                className={`page-link ${
                                                    i + 1 === currentPage ? 'bg-black text-white' : 'bg-white text-black'
                                                } rounded px-3 py-1 mx-1`}
                                            >
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCarde;