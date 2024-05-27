import { SignIn} from "@/pages/auth";

export const authroutes = [
  {
    layout: "auth",
    pages: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      // {
      //   path: "/sign-up",
      //   element: <SignUp />,
      // },
    ],
    
  }
];

export default authroutes;
