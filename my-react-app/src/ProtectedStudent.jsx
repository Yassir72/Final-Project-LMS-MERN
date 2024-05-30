import { jwtDecode } from "jwt-decode"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import axiosInstance from "./API/axiosConfig"
import { getStudent } from "./redux/student/slice"

const ProtectedStudent = () => {
    const { isLoading, loggedIn } = useSelector(state => state.students)
    const token = localStorage.getItem("token")

    if (!token) return <Navigate to="/usersPg/signin" />

    axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${token}`

        return config
    })

    const dispatch = useDispatch()
    const payload = jwtDecode(token)

    useEffect(() => {
        dispatch(getStudent(payload))
    }, [])


    return !isLoading && (loggedIn ? <Outlet /> : <Navigate to="/usersPg/signin" />)
}

export default ProtectedStudent