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
import { getinstructors, deleteInstructor } from '@/redux/instructor/slice'
import AddInstructor from "./addInstructor";
import EditInstructor from "./editInstructor";
// import store from "@/redux/store";


export function Instructors() {
  const dispatch = useDispatch();
  const { instructors, isLoading } = useSelector((state) => state.instructors);

  const [addCard, setAddCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [edited, setEdited] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getinstructors());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInstructors = instructors.slice(indexOfFirstItem, indexOfLastItem);

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
        dispatch(deleteInstructor(id));
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
    month = months[month - 1];
    return `${date1.split('-')[2]} ${month} ${date1.split('-')[0]}`;
  };

  return ( 
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            Instructors Table
          </Typography>
          <button type="button" onClick={() => setAddCard(true)} className="px-2 py-1 font-semibold border rounded border-white-800 text-white-800">Add</button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Name", "PhoneNumber", "Status", "Specialty", ""].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentInstructors.map(({ name, email, phonenumber, specialite, _id, createdAt }, key) => {
                const className = `py-3 px-5 ${
                  key === currentInstructors.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={email}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <Avatar src='../../public/img/icons8-student-52.png' alt={name} size="sm" variant="rounded" />
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-semibold">
                            {name}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {phonenumber}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Chip
                        variant="gradient"
                        color="blue-gray"
                        value="online"
                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                      />
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {specialite}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography as="button" className="text-xs font-semibold text-green-500" onClick={() => { setEditCard(true); setEdited({ name, email, phonenumber, specialite, _id }) }}>
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
      {addCard && <AddInstructor show={hideAddCard}/>}
      {editCard && <EditInstructor show={hideEditCard} EditContent={edited}/> }
      
      {/* Pagination Controls */}
      <div className=" flex justify-center">
        {Array.from({ length: Math.ceil(instructors.length / itemsPerPage) }, (_, i) => (
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

export default Instructors;