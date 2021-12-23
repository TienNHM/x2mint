import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from 'redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Register.scss'
import { isEmpty, isEmail, isLength, isMatch } from 'utils/Validation'
import { Navigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { toast } from 'react-toastify'

const initialState = {
    username: '',
    email: '',
    password: '',
    reEnterPassword: ''
}

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { authLoading, isAuthenticated } = useSelector((state) => state.auth.isAuthenticated)
    const [user, setUser] = useState(initialState)
    const [error] = useState('')
    const { username, email, password, reEnterPassword } = user

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isEmpty(email)|| isEmpty(username) || isEmpty(password)|| isEmpty(reEnterPassword))
        {
            toast.warning('📝 Vui lòng điền đủ thông tin nhé !')
            return null
        }
        if (!isEmail(email))
        {
            toast.warning('📧 Sai email, vui lòng nhập lại!')
            return null
        }
        if (isLength(password))
        {
            toast.warning('🔑 Mật khẩu yếu, hãy chọn mật khẩu khác!')
            return null
        }
        if (!isMatch(password, reEnterPassword))
        {
            toast.error('🔑 Sai mật khẩu, vui lòng nhập lại!')
            return null
        }
        try {
            dispatch(register(user))
        } catch (error) {
            error.response.data.msg &&
            setUser({ ...user, error: error.response.data.msg, success: '' })
        }
    }

    return isAuthenticated ? (
        <Navigate to="/login" />
    ) : (
        <div className="register container">
            {authLoading && (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        textAlign: 'center',
                        alignItems: 'center',
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        zIndex: 10000,
                        paddingTop: 300
                    }}
                >
                    <Spinner
                        animation="border"
                        color="#5FA509"
                        style={{ color: '#188a0b' }}
                        size={50}
                    ></Spinner>
                </div>
            )}

            <section className="signup__body row" onSubmit={handleSubmit} method="POST">
                <div className="register__right col">
                    <h1 className="form__title">Đăng ký tài khoản</h1>
                    <img className="auth__pic" src="assets/auth.svg"></img>
                </div>
                <div className="signup__area col">
                    <div className="input">
                        <div className="input_item" >
                            <input
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                placeholder="Username"
                                require
                            ></input>
                        </div>
                        <div className="input_item">
                            <input
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Email"
                                require
                            ></input>
                        </div>
                        <div className="input_item">
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="Mật khẩu"
                                require
                            ></input>
                        </div>
                        <div className="input_item">
                            <input
                                type="password"
                                name="reEnterPassword"
                                value={user.reEnterPassword}
                                onChange={handleChange}
                                placeholder="Xác nhận lại mật khẩu"
                                require
                            ></input>
                        </div>
                        <p
                            style={{
                                color: 'red',
                                fontSize: 14,
                                fontFamily: 'monospace'
                            }}
                        >
                            {error}
                        </p>
                        <button
                            type="submit"
                            className="btn__signup"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <p className="been-member">Bạn đã có tài khoản?</p>
                    <button
                        className="btn__login"
                        onClick={() => navigate('/login', { replace: true })}
                    >
                        Đăng nhập
                    </button>
                    {/* <button className="btn__signup-gg" onClick={register}><img src="google_32.png"></img></button> */}
                </div>
            </section>
        </div>
    )
}

export default Register
