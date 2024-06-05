import { jwtDecode } from "jwt-decode"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import axiosInstance from "./API/axiosConfig"
import { getInstructor } from "./redux/instructor/slice"

const ProtectedInstructor = () => { 
    const { isloading, loggedIn } = useSelector(state => state.instructors)
    
    const token = localStorage.getItem("token")
    console.log(token);

    if (!token) { console.log('here');
        return <Navigate to="/usersPg/signin" />}

    axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${token}`

        return config
    })

    const dispatch = useDispatch()
    const payload = jwtDecode(token)

    useEffect(() => { console.log(payload);
        dispatch(getInstructor(payload))
    }, [])


    return !isloading && (loggedIn ? <Outlet /> : <Navigate to="/usersPg/signin" />)
}

export default ProtectedInstructor;