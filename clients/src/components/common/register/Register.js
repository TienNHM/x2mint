import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { register } from 'redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from 'redux/authSlice'
import { COOKIES } from 'utils/constants'
import './Register.scss'
import { isEmpty, isEmail, isLength, isMatch } from 'utils/Validation'
import { store } from 'react-notifications-component'
import { Navigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const notify = {
    insert: 'top',
    container: 'top-center',
    animationIn: ['animated fadeIn'],
    animationOut: ['animated fadeOut'],
    dismiss: {
        duration: 5000,
        onScreen: true
    }
}


const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { authLoading, isAuthenticated } = useSelector((state) => state.auth.isAuthenticated)
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })
    const [error, setError] = useState('')
    const { username, email, password, reEnterPassword } = user
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isEmpty(email)|| isEmpty(username) || isEmpty(password)|| isEmpty(reEnterPassword))
        {
            store.addNotification({
                ...notify,
                title: 'THÔNG TIN CÒN THIẾU',
                message: 'Vui lòng điền đủ thông tin nhé !!',
                type: 'warning'
            })
            return null
        }
        if (!isEmail(email))
        {
            store.addNotification({
                ...notify,
                title: 'EMAIL KHÔNG ĐÚNG',
                message: 'Vui lòng điền lại thông tin nhé !!',
                type: 'warning'
            })
            return null
        }
        if (isLength(password))
        {
            store.addNotification({
                ...notify,
                title: 'MẬT KHẨU YẾU',
                message: 'Hãy chọn mật khẩu khác !!',
                type: 'warning'
            })
            return null
        }
        if (!isMatch(password, reEnterPassword))
        {
            store.addNotification({
                ...notify,
                title: 'MẬT KHẨU KHÔNG KHỚP',
                message: 'Hãy nhập lại mật khẩu khác !!',
                type: 'warning'
            })
            return null
        }
        try {
            dispatch(register(user))
        } catch (error) {
            console.log(error)
        }
    }
    // // const data = JSON.parse(register(user));
    // const data = await register(user)

    // console.log(data)
    // if (data)
    //     if (data.success) {
    //         // Set cookies
    //         Cookies.set(ACCESS_TOKEN, data.accessToken, { expires: MAX_DAYS_EXPIRE })
    //         Cookies.set(USER_ID, data.user._id, { expires: MAX_DAYS_EXPIRE })

    //         // Get User Info
    //         await dispatch(loadUser(data.accessToken))
    //         navigate('/', { replace: true })
    //     } else {
    //         setError(data.message)
    //     }
    // else setError('Some error happened!')

    return isAuthenticated ? (
        <Navigate to="/login" />
    ) : (
        <div className="register">
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

            <section className="signup__body" onSubmit={handleSubmit} method="POST">
                <div className="signup__area">
                    <div className="input">
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            placeholder="Username"
                            require
                        ></input>
                        <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Email"
                            require
                        ></input>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Mật khẩu"
                            require
                        ></input>
                        <input
                            type="password"
                            name="reEnterPassword"
                            value={user.reEnterPassword}
                            onChange={handleChange}
                            placeholder="Xác nhận lại mật khẩu"
                            require
                        ></input>
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
                <div className="register__right">
                    <h1 className="form__title">Đăng ký tài khoản</h1>
                    <img className="auth__pic" src="assets/auth.svg"></img>
                </div>
            </section>
        </div>
    )
}

export default Register
