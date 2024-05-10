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
// import store from "@/redux/store";


export function Courses() {
  const dispatch = useDispatch();
  const { courses, isLoading } = useSelector((state) => state.courses);

  const [addCard, setAddCard] = useState(false);
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
                      <Typography as="button" className="text-xs font-semibold text-green-500">
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
      
      {/* Pagination Controls */}
      <div className=" flex justify-center">
        {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mx-1 rounded-full ${
              currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Courses;