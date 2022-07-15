import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { stopWebcam } from 'utils/faceDetection'

const ActivationEmail = () => {
    stopWebcam(null)

    const { activation_token } = useParams()
    const [success, setSuccess] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/auths/activation', { activation_token })
                    if (res.data.message === 'success') {
                        toast.success('🎉 Tài khoản đã tạo thành công. Vui lòng đăng nhập để tiếp tục sử dụng các chức năng của hệ thông!')
                    }
                    else {
                        toast.warning('💢 Tài khoản đã được xác thực. Vui lòng đăng nhập để tiếp tục sử dụng các chức năng của hệ thông!')
                    }
                    setSuccess(res.data.success)
                } catch (err) {
                    console.log(err)
                }
            }
            activationEmail()
        }
    }, [activation_token])

    return (
        <div className="active_page">
            {success && navigate('/login')}
            {!success && <p>Lỗi</p>}
        </div>
    )
}

export default ActivationEmail
