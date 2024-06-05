import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, UsersPg } from "@/layouts";
import { CoursesPage, Description, StudentProfile } from "./pages/userPages";
import AuthProvider from './context/AuthProvider';
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
    <AuthProvider>
      <Routes>
        <Route path="/usersPg/*" element={<UsersPg />} />
        <Route path="/auth/*" element={<Auth />} />

        {/* Routes protégées pour les étudiants */}
        <Route element={<ProtectedStudent />}>
          <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
          <Route path="/usersPg/StudentProfile" element={<StudentProfile />} />
          <Route path="/usersPg/DescriptionCourse/courses/:courseId" element={<Description />} />
        </Route>

        {/* Routes protégées pour le dashboard */}
        <Route element={<Protected />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>

        {/* Redirections */}
        <Route path="*" element={<Navigate to="/usersPg/LandingPage/" replace />} />
        <Route path="/auth/*" element={<Navigate to="/auth/sing-in" replace />} />
        <Route path="/dashboard/*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
