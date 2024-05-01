import { useCookies } from 'react-cookie'
import { Outlet, Navigate } from "react-router-dom"
const Protected = () => {
    const [cookies] = useCookies(['token']);
    
    return  cookies.token ? <Outlet/> : <Navigate to="/"/>
  }
  export default Protected