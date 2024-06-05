import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth,UsersPg } from "@/layouts";
import { CoursesPage } from "./pages/userPages";
import { StudentProfile } from "./pages/userPages";
import AuthProvider from './context/AuthProvider'
import Protected from "./Protected";
import ProtectedStudent from "./ProtectedStudent";
import ProtectedInstructor from "./ProtectedInstructor";
import InstructorProfile from "./pages/userPages/instructorProfile";
import CourseDetail from "./pages/userPages/CourseDetail";
import { jwtDecode } from "jwt-decode"



function App() {
  let payload=null;
  const token = localStorage.getItem("token")
  console.log(token);
  if(token){
  console.log("aaa");
  payload = jwtDecode(token).accountType
}
  function Protected(){ 
    console.log(payload);
    if(payload=='Instructor') 
      return (<Route element={<ProtectedInstructor/>} >
    <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
    <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
    <Route path="/usersPg/InstructorProfile" element={<InstructorProfile/>} />
    </Route> )
    else
    return (<Route element={<ProtectedStudent/>} >
    <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
    <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
    <Route path="/usersPg/StudentProfile" element={<StudentProfile/>} />
    
  </Route>  )
  
    }
  return (
    <Routes>
      <Route path="/usersPg/*" element={<UsersPg />} />
      <Route path="*" element={<Navigate to="/usersPg/LandingPage/" replace />} />
      
      {/* {Protected()} */}
      <Route element={<ProtectedInstructor/>} >
    <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
    <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
    <Route path="/usersPg/InstructorProfile" element={<InstructorProfile/>} />
    </Route> 
    <Route element={<ProtectedStudent/>} >
    <Route path="/usersPg/CourseDetail/:id" element={<CourseDetail />} />
    <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
    <Route path="/usersPg/StudentProfile" element={<StudentProfile/>} />
    
    </Route> 
      
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth/sing-in" replace />} />
      <Route element = {<Protected/>}>
         <Route path="/dashboard/*" element={<Dashboard />} />
         <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Route>  
  </Routes> 
  );
}


export default App;
