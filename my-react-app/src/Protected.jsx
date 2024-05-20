import { jwtDecode } from "jwt-decode"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import axiosInstance from "./API/axiosConfig"
import { getUser } from "./redux/authAdmin/slice"

const Protected = () => {
    const { isLoading, loggedIn } = useSelector(state => state.user)
    const token = localStorage.getItem("token")

    if (!token) return <Navigate to="auth/sign-in" />

    axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${token}`

        return config
    })

    const dispatch = useDispatch()
    const payload = jwtDecode(token)

    useEffect(() => {
        dispatch(getUser(payload))
    }, [])


    return !isLoading && (loggedIn ? <Outlet /> : <Navigate to="auth/sign-in" />)
}

export default Protected