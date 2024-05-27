import { LandinPage ,CoursesPage } from "@/pages/userPages";
import CourseDetail from "./pages/userPages/CourseDetail";

export const usersroutes = [
  {
    layout: "usersPg",
    pages: [
      {
        path: "/LandingPage",
        element: <LandinPage/>,
      },
      {
        path: "/CoursesPage",
        element: <CoursesPage/>,
      },
      {
        path: "/CourseDetail",
        element: <CourseDetail/>,
      },
      
    ],
    
  }
];

export default usersroutes ;