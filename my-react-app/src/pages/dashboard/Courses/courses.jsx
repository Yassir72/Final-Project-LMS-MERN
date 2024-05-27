import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { getcourses , deleteCourse } from '@/redux/course/slice'
import AddCourse from "./addCourse";
import EditCourse from "./editCourse";
// import store from "@/redux/store";


export function Courses() {
  const dispatch = useDispatch();
  const { courses, isLoading } = useSelector((state) => state.courses);
  const [addCard, setAddCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [edited, setEdited] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getcourses());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const hideAddCard = () => setAddCard(false);
  const hideEditCard = () => setEditCard(false);

  const post_date = (date1) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    date1 = date1.split('T')[0];
    let month = date1.split('-')[1];
    month = months[parseInt(month) - 1];
    return `${date1.split('-')[2]} ${month} ${date1.split('-')[0]}`;
  };

  return ( 
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            Courses Table
          </Typography>
          <button type="button" onClick={() => setAddCard(true)} className="px-2 py-1 font-semibold border rounded border-white-800 text-white-800">Add</button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Course", "Description", "Price", "Posted", ""].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentCourses.map(({ Image, Title, Description, Price, _id, createdAt }, key) => {
                const className = `py-3 px-5 ${
                  key === currentCourses.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={Title}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <Avatar src={Image} alt={Title} size="sm" variant="rounded" />
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-semibold">
                            {Title}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {Description}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {Price}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {post_date(createdAt)}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography as="button" className="text-xs font-semibold text-green-500"
                      onClick={() => { setEditCard(true); setEdited({ Image, Title, Description, Price, _id }) }}>
                        Edit
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography as="button" className="text-xs font-semibold text-red-500" onClick={() => deleteButton(_id)}>
                        Delete
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {addCard && <AddCourse show={hideAddCard}/>}
      {editCard && <EditCourse show={hideEditCard} EditContent={edited}/> }
      
      {/* Pagination Controls */}
      <div className=" flex justify-center gap-2">
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
        {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, i) => (
          <button
          key={i}
            onClick={() => paginate(i + 1)}
            className={`  ${
              currentPage === i + 1 ? 'relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' 
              : 'relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            } `}>
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      {i+1}
      </span>
          </button>
        ))}
      <button onClick={()=>setCurrentPage(currentPage+1)} 
              disabled={currentPage==Math.ceil(courses.length / itemsPerPage)? true : false}
    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button">
    Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg>
    </button>
      </div>
    </div>
  );
};

export default Courses;