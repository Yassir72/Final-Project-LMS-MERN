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
import { getadmins } from '@/redux/admin/slice'
  // import store from "@/redux/store";

  
  export function Admins() {
    const dispatch  = useDispatch();
    const {admins , isloading} = useSelector((state)=>state.admins);
      
      useEffect(()=>{
        dispatch(getadmins()); 
      },[dispatch])

      function post_date(date1){
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
          date1 = date1.split('T')[0];
          let month = date1.split('-')[1];
          month = months[month[1]-1]
    
    
    
          return `${date1.split('-')[2]} ${month} ${date1.split('-')[0]}`;
    
    
      }
    

    return ( 
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Admins Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Name", "Email", "status", "employed", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                { admins.map(
                  ({ Name, Email, createdAt }, key) => {
                    const className = `py-3 px-5 ${
                      key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={Name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src='../../public/img/icons8-admin-52.png' alt={Name} size="sm" variant="rounded" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {Name}
                              </Typography>
                              {/* <Typography className="text-xs font-normal text-blue-gray-500">
                                {email}
                              </Typography> */}
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {Email}
                          </Typography>
                          {/* <Typography className="text-xs font-normal text-blue-gray-500">
                            {Email}
                          </Typography> */}
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            // color={online ? "green" : "blue-gray"}
                            // value={online ? "online" : "offline"}
                            color={ "blue-gray"}
                            value={ "online" }
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {post_date(createdAt)}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-green-500"
                          >
                            Edit
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-red-500"
                          >
                            Delete
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default Admins;
  