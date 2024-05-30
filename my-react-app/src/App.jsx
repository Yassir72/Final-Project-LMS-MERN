import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth,UsersPg } from "@/layouts";
import { CoursesPage } from "./pages/userPages";
import { StudentProfile } from "./pages/userPages";
import AuthProvider from './context/AuthProvider'
import Protected from "./Protected";
import ProtectedStudent from "./ProtectedStudent";



function App() {
  return (
    <Routes>
      <Route path="/usersPg/*" element={<UsersPg />} />
      <Route element={<ProtectedStudent/>} >
      <Route path="/usersPg/CoursesPage" element={<CoursesPage />} />
        <Route path="/usersPg/StudentProfile" element={<StudentProfile/>} />
        {/* <Route path="/usersPg/StudentProfile" element={<UsersPg/>} /> */}
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
