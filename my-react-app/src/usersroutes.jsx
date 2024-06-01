import { LandinPage ,CoursesPage } from "@/pages/userPages";
import CourseDetail from "./pages/userPages/CourseDetail";
import {SignUpUser , SignInUser } from "@/pages/auth"
import ShoppingCart from "./widgets/shopping/shoppingCart";
import { StudentProfile } from "@/pages/userPages";
import InstructorProfile from "./pages/userPages/instructorProfile";

export const usersroutes = [
  {
    layout: "usersPg",
    pages: [
      {
        path: "/LandingPage",
        element: <LandinPage/>,
      },
      {
        path: "/Shop",
        element: <ShoppingCart/>,
      },
      {
        path: "/CoursesPage",
        element: <CoursesPage/>,
      },
      {
        path: "/signup",
        element: <SignUpUser/>,
      },
      {
        path: "/signin",
        element: <SignInUser/>,
      },
      {
        path: "/CourseDetail",
        element: <CourseDetail/>,
      },
      {
        path: "/StudentProfile",
        element: <StudentProfile/>,
      },
      {
        path: "/InstructorProfile",
        element: <InstructorProfile/>,
      },

      
    ],
    
  }
];

export default usersroutes ;