import React, { useState } from 'react'
import './Login.scss'
import { Form, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, loginViaGoogle } from 'redux/authSlice'
import { Navigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { isEmpty } from 'utils/Validation'
import { toast } from 'react-toastify'

import { GoogleLogin } from 'react-google-login'


const Login = () => {
    //Route
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authLoading = useSelector((state) => state.auth.authLoading)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    //Local
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const { username, password } = loginForm

    const onChangeLogin = (event) =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async (event) => {
        event.preventDefault()
        if (isEmpty(username) || isEmpty(password)) {
            toast.warning('❌ Thiếu username hoặc mật khẩu. Vui lòng nhập lại!')
            return null
        }
        try {
            dispatch(loginUser(loginForm))
        } catch (error) {
            console.log(error)
        }
    }
    const responseGoogle = async (response) => {
        try {
            dispatch(loginViaGoogle(response))
        } catch (error) {
            console.log(error)
        }
    }

    return isAuthenticated ? (
        <Navigate to="/" />
    ) : (
        <div className="login">
            {authLoading && (
                <div
                    style={{
                        width: '100%', height: '100%',
                        position: 'absolute',
                        textAlign: 'center',
                        alignItems: 'center',
                        top: 0, left: 0,
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

            <h1 className="form__title">Đăng nhập</h1>

            <Form className="form__body container" onSubmit={login}>
                <div className="row">
                    <Image className="auth__pic col"
                        src={process.env.PUBLIC_URL + 'assets/images/auth.svg'} />
                    <div className="info__area col">
                        <div className="input">
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChangeLogin}
                                placeholder="Username..."
                                autoComplete='on'
                            ></input>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChangeLogin}
                                placeholder="Mật khẩu..."
                                autoComplete='on'
                            ></input>
                        </div>
                        <div className="login__forget">
                            <button
                                className="nav__btn__signup"
                                variant="success"
                                type="submit"
                            >
                                Đăng nhập
                            </button>
                            <button className="forget__button"
                                onClick={() => navigate('/forgotPassword', { replace: true })}>Quên mật khẩu</button>
                        </div>
                        <div className="login__gg">
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Đăng nhập với Google"
                                onSuccess={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        </div>

                        <button className="nav__btn__login"
                            onClick={() => navigate('/register', { replace: true })}>
                            Đăng ký
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Login
