import { LandinPage ,CoursesPage } from "@/pages/userPages";
import {SignUpUser , SignInUser } from "@/pages/auth"

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
        path: "/signup",
        element: <SignUpUser/>,
      },
      {
        path: "/signin",
        element: <SignInUser/>,
      },

      
    ],
    
  }
];

export default usersroutes ;