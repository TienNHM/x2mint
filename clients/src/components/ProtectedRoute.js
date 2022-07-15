import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { loadUser } from 'redux/authSlice'
import { stopWebcam } from 'utils/faceDetection'

const ProtectedRoute = () => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.auth)
    const [ _, setIsTryLogin ] = useState(false)
    stopWebcam(null)

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
