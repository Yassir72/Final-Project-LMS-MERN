import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AuthProvider from './context/AuthProvider'
import Protected from "./Protected";



function App() {
  return (
  <AuthProvider>
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      <Route element = {<Protected/>}>
         <Route path="/dashboard/*" element={<Dashboard />} />
         <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Route>  
    </Routes> 
  </AuthProvider>
  );
}

export default App;
