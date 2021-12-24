import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'

const ActivationEmail = () => {
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/auths/activation', { activation_token })
                    console.log(res)
                    setSuccess(res.data.success)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token])

    return (
        <div className="active_page">
            {success && navigate('/')}
            {!success && <p>Lỗi</p>}
        </div>
    )
}

export default ActivationEmail
