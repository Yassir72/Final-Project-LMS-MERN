import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, UsersPg } from "@/layouts";
import { CoursesPage, Description, Start, StudentProfile } from "./pages/userPages";
import AuthProvider from './context/AuthProvider';
import Protected from "./Protected";
import ProtectedStudent from "./ProtectedStudent";
import ProtectedInstructor from "./ProtectedInstructor";
import InstructorProfile from "./pages/userPages/instructorProfile";
import CourseDetail from "./pages/userPages/CourseDetail";
import { jwtDecode } from "jwt-decode"
import ShoppingCart from "./widgets/shopping/shoppingCart";

function App() {
//   let payload=null;
//   const token = localStorage.getItem("token")
//   console.log(token);
//   if(token){
//   console.log("aaa");
//   payload = jwtDecode(token).accountType
// }
//   function Protected(){ 
//     console.log(payload);
//     if(payload=='Instructor') 
//       return (<Route element={<ProtectedInstructor/>} >
//     <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
//     <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
//     <Route path="/usersPg/InstructorProfile" element={<InstructorProfile/>} />
//     </Route> )
//     else
//     return (<Route element={<ProtectedStudent/>} >
//     <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
//     <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
//     <Route path="/usersPg/StudentProfile" element={<StudentProfile/>} />
    
//   </Route>  )
  
//     }
  return (

  //   <Routes>
  //     <Route path="/usersPg/*" element={<UsersPg />} />
  //     <Route path="*" element={<Navigate to="/usersPg/LandingPage/" replace />} />
      
  //     {/* {Protected()} */}
  //     <Route element={<ProtectedInstructor/>} >
  //   <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
  //   <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
  //   <Route path="/usersPg/InstructorProfile" element={<InstructorProfile/>} />
  //   </Route> 
  //   <Route element={<ProtectedStudent/>} >
  //   <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
  //   <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
  //   <Route path="/usersPg/StudentProfile" element={<StudentProfile/>} />
    
  //   </Route> 
      
  //     <Route path="/auth/*" element={<Auth />} />
  //     <Route path="*" element={<Navigate to="/auth/sing-in" replace />} />
  //     <Route element = {<Protected/>}>
  //        <Route path="/dashboard/*" element={<Dashboard />} />
  //        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
  //     </Route>  
  // </Routes> 

    
      <Routes>
        <Route path="/usersPg/*" element={<UsersPg />} />
        <Route path="*" element={<Navigate to="/usersPg/LandingPage/" replace />} />

        <Route element={<ProtectedInstructor/>} >
        <Route path="/InstPg/CoursesPage" element={<CoursesPage />} />
        <Route path="/InstPg/InstructorProfile" element={<InstructorProfile/>} />
        <Route path="/InstPg/DescriptionCourse/courses/:courseId" element={<Description />} />
        <Route path="/InstPg/CourseDetail/:id" element={<CourseDetail />} />
        </Route> 
        
        {/* Routes protégées pour les étudiants */}
        <Route element={<ProtectedStudent />}>
          <Route path="/StuPg/CoursesPage" element={<CoursesPage />} />
          <Route path="/StuPg/StudentProfile" element={<StudentProfile />} />
          <Route path="/StuPg/DescriptionCourse/courses/:courseId" element={<Description />} />
          <Route path="/StuPg/CourseDetail/:id" element={<CourseDetail />} />
          <Route path="/StuPg/StartCourse" element={<Start />} />
          <Route path="/StuPg/Shop" element={<ShoppingCart />} />
        </Route>
        
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/usersPg/sign-in" replace />} />
        
        

        {/* Routes protégées pour le dashboard */}
        <Route element={<Protected />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Route>

        {/* Redirections */}
        {/* <Route path="*" element={<Navigate to="/usersPg/LandingPage/" replace />} />
        <Route path="/auth/*" element={<Navigate to="/auth/sing-in" replace />} />
        <Route path="/dashboard/*" element={<Navigate to="/dashboard/home" replace />} /> */}
      </Routes>
    
  );
}

export default App;
