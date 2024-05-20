import { LandinPage ,CoursesPage } from "@/pages/userPages";

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
      
    ],
    
  }
];

export default usersroutes ;