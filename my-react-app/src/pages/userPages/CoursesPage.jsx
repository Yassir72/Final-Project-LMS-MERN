import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcourses } from '@/redux/course/slice';
import { getcategorys } from '@/redux/category/slice';
import Header from "@/widgets/layout/header";
import FooterPages from "@/widgets/layout/footerPages";
import CourseCarde from "@/widgets/layout/courseCarde";
import CardeCategory from "@/widgets/layout/cardeCategory";

export function CoursesPage() {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(3);
   const dispatch = useDispatch();
   const { courses } = useSelector((state) => state.courses);
   const { categorys } = useSelector((state) => state.categorys);
   const [searchItem, setSearchItem] = useState('');
   const [filteredCourses, setFilteredCourses] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   useEffect(() => {
      dispatch(getcategorys());
   }, [dispatch]);

   useEffect(() => {
      dispatch(getcourses());
   }, [dispatch]);

   useEffect(() => {
      setFilteredCourses(courses);
   }, [courses]);

   const handleInputChange = (e) => {
      const searchTerm = e.target.value;
      setSearchItem(searchTerm);
      const filteredItems = courses.filter((course) =>
         course.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filteredItems);
      setCurrentPage(1);
   }

   const filteredCategories = categorys.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <>
         <Header />
         <div className="pt-32 bg-white">
            <h1 className="text-center text-3xl font-bold text-gray-900">All Courses</h1>
         </div>
         <div className=" relative flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800 ">
            {filteredCategories.map(category => (
               <a key={category.id} href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 ">
                  <img src={category.image} alt={category.name} className="w-4 h-4" />
                  <span>{category.name}</span>
               </a>
            ))}
         </div>

         <CourseCarde/>
         <CardeCategory />
         <FooterPages />
      </>
   );
}

export default CoursesPage;
