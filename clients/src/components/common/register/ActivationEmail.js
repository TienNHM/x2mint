import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from 'utils/notification/Notification'
import { useDispatch} from 'react-redux'
import { activation } from 'redux/authSlice'
import { Navigate } from 'react-router-dom'

const ActivationEmail = () => {
    const dispatch = useDispatch()
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success] = useState('')

    try {
        dispatch(activation(activation_token))
    } catch (error) {
        error.response.data.msg &&
        setErr({ error: error.response.data.msg, success: '' })
    }

    return (
        <>
            <Navigate to="/login" />
            <div className="active_page">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
            </div>
        </>
    )
}

export default ActivationEmail
