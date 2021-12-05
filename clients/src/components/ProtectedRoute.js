import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Outlet } from 'react-router-dom'
import { loadUser } from '../redux/authSlice'

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const dispatch = useDispatch()
    const { authLoading, isAuthenticated } = useSelector((state) => state.auth)
    const [isTryLogin, setIsTryLogin] = useState(false)
    //loadUser
    useEffect(() => {
        if (isAuthenticated) {
            setIsTryLogin(true)
        } else {
            dispatch(loadUser())
        }
    }, [])

    return isAuthenticated ? <Outlet /> : <Navigate replace to="/login" />
}

export default ProtectedRoute
