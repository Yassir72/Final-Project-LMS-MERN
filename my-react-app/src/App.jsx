import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth,UsersPg } from "@/layouts";

import AuthProvider from './context/AuthProvider'
import Protected from "./Protected";



function App() {
  return (
    <Routes>
      <Route path="/usersPg/*" element={<UsersPg />} />
      <Route path="*" element={<Navigate to="/usersPg/LandingPage/" replace />} />
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
