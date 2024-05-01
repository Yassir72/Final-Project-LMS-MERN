import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications,Admins, Students, Instructors, Courses } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "admins",
        path: "/admins",
        element: <Admins />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "students",
        path: "/students",
        element: <Students />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "instructors",
        path: "/instructors",
        element: <Instructors />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "courses",
        path: "/courses",
        element: <Courses />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
    
  }
];

export default routes;
