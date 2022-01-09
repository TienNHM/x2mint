import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { isEmpty, isLength, isMatch } from 'utils/Validation'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from 'redux/authSlice'
import { toast } from 'react-toastify'
import './ResetPassword.scss'
import Footer from 'pages/home/Footer'

const ResetPassword = () => {
    const [resetForm, setResetForm] = useState({
        password: '',
        reEnterPassword: '',
        token: ''
    })
    const dispatch = useDispatch()
    const token = useParams().activation_token
    const success = useSelector((state) => state.auth.success)
    const { password, reEnterPassword } = resetForm

    const handleChange = (event) => {
        setResetForm({ ...resetForm, token, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isEmpty(password) || isEmpty(reEnterPassword)) {
            toast.warning('📝 Vui lòng điền đủ thông tin nhé !')
            return null
        }
        if (isLength(password)) {
            toast.warning('🔑 Mật khẩu yếu, hãy chọn mật khẩu khác!')
            return null
        }
        if (!isMatch(password, reEnterPassword)) {
            toast.error('🔑 Sai mật khẩu, vui lòng nhập lại!')
            return null
        }
        try {
            dispatch(resetPassword(resetForm, token))
        } catch (error) {
            error.response.data.msg &&
                setResetForm({ ...resetForm, error: error.response.data.msg, success: '' })
        }
    }

    if (success) {
        window.open('/login', '_self')
    }
    else return (
        <div className="reset-password d-flex flex-column justify-content-between align-items-center">
            <div className="reset">
                <h2 className="form__title">Đặt lại mật khẩu</h2>
                <div>
                    <div className='password__reset'>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Mật khẩu..."
                            require
                        ></input>
                    </div>
                    <div className='password__reset'>
                        <input
                            type="password"
                            name="reEnterPassword"
                            value={reEnterPassword}
                            onChange={handleChange}
                            placeholder="Xác nhận mật khẩu..."
                            require
                        ></input>
                    </div>
                    <button
                        className="btn__resetPassword"
                        onClick={(e) => handleSubmit(e)}>Đặt lại
                    </button>
                </div>
            </div>

            <div style={{ width: '100vw' }}>
                <Footer />
            </div>
        </div>
    )
}
export default ResetPassword