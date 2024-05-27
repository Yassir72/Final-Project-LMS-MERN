import { CoursesPage } from "@/pages/userPages";
import LandinPage from "@/pages/userPages/landing-page/landingPage"
import ShoppingCart from "./pages/userPages/shopping/shoppingCart";

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
        path: "/Shop",
        element: <ShoppingCart/>,
      },
      
    ],
    
  }
];

export default usersroutes ;