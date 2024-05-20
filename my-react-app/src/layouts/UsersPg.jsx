import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";
// import {
//   Sidenav,
// } from "@/widgets/layout";
// import routes from "@/routes";
// import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import usersroutes from "@/usersroutes";



export function UsersPg() {
    // const [controller, dispatch] = useMaterialTailwindController();
    // const { sidenavType } = controller;
    const userroute = [
       {
            name: "Landing Page",
            path: "/usersPg/LandingPage",
            icon: BookOpenIcon,
  
        },
        {
          name: "Courses Page",
          path: "/usersPg/CoursesPage",
          icon: BookOpenIcon,

      },
      {
        name: "dashboard",
        path: "/dashboard/home",
        icon: ChartPieIcon,
      },
      {
        name: "profile",
        path: "/dashboard/home",
        icon: UserIcon,
      },
      {
        name: "sign up",
        path: "/auth/sign-up",
        icon: UserPlusIcon,
      },
      {
        name: "sign in",
        path: "/auth/sign-in",
        icon: ArrowRightOnRectangleIcon,
      },
    ];
  
    return (
    <div className="relative min-h-screen w-full">
      {/* <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      /> */}
        <Routes>
          {usersroutes.map(
            ({ layout, pages }) =>
              layout === "usersPg" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    );
  }
  
  UsersPg.displayName = "/src/layout/UsersPg.jsx";
  
  export default UsersPg;
  