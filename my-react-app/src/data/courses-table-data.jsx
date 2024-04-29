import { React,useState,useEffect } from "react";
import axios from 'axios';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip, } from "@material-tailwind/react";
export const projectsTableData = [
  {
    img: "/img/logo-xd.svg",
    name: "Material XD Version",
    members: [
      { img: "/img/team-1.jpeg", name: "Khadija Rhaoufal" },
      { img: "/img/team-2.jpeg", name: "Yassir Berraddach" },
      { img: "/img/team-4.jpeg", name: "Hicham Tachtoukt" },
    ],
    budget: "$14,000",
    completion: 60,
  },
  {
    img: "/img/logo-atlassian.svg",
    name: "Add Progress Track",
    members: [
      { img: "/img/team-2.jpeg", name: "Yassir Berraddach" },
      { img: "/img/team-4.jpeg", name: "Hicham Tachtoukt" },
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    img: "/img/logo-slack.svg",
    name: "Fix Platform Errors",
    members: [
      { img: "/img/team-1.jpeg", name: "Khadija Rhaoufal" },
    ],
    budget: "Not set",
    completion: 100,
  },
  {
    img: "/img/logo-spotify.svg",
    name: "Launch our Mobile App",
    members: [
      { img: "/img/team-4.jpeg", name: "Hicham Tachtoukt" },
      { img: "/img/team-2.jpeg", name: "Yassir Berraddach" },
      { img: "/img/team-1.jpeg", name: "Khadija Rhaoufal" },
    ],
    budget: "$20,500",
    completion: 100,
  },
  {
    img: "/img/logo-jira.svg",
    name: "Add the New Pricing Page",
    members: [{ img: "/img/team-4.jpeg", name: "Hicham Tachtoukt" }],
    budget: "$500",
    completion: 25,
  },
];

const Coursestable = () => {
  const [coursesData, setCoursesData] = useState(projectsTableData);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await axios.get("http://localhost:3000/course/getCourses");
        const fetchedCourses = courseRes.data; // Assuming the response contains an array of course data
        
        // Update each project with fetched course data
        const updatedProjects = projectsTableData.map((project, index) => {
          const fetchedCourse = fetchedCourses[index]; // Get corresponding fetched course
          return {
            ...project,
            name: fetchedCourse.Title || project.name, // Replace name with fetched title, or keep original
            budget: fetchedCourse.Price || project.budget, // Replace budget with fetched price, or keep original
            completion: fetchedCourse.Description || project.completion, // Replace completion with fetched description, or keep original
          };
        });

        setCoursesData(updatedProjects); // Update state with updated projects
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Rendering logic to display coursesData on your page
  return (
    <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6"
      >
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Courses
          </Typography>
          <Typography
            variant="small"
            className="flex items-center gap-1 font-normal text-blue-gray-600"
          >
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["courses", "students", "price", "description"].map(
                (el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {coursesData.map(
              ({ img, name, members, budget, completion }, key) => {
                const className = `py-3 px-5 ${
                  key === coursesData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={name}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <Avatar src={img} alt={name} size="sm" />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={className}>
                      {members.map(({ img, name }, key) => (
                        <Tooltip key={name} content={name}>
                          <Avatar
                            src={img}
                            alt={name}
                            size="xs"
                            variant="circular"
                            className={`cursor-pointer border-2 border-white ${
                              key === 0 ? "" : "-ml-2.5"
                            }`}
                          />
                        </Tooltip>
                      ))}
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        className="text-xs font-medium text-blue-gray-600"
                      >
                        {budget}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className="w-10/12">
                        <Typography
                          variant="small"
                          className="mb-1 block text-xs font-medium text-blue-gray-600"
                        >
                          {completion}
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default Coursestable;