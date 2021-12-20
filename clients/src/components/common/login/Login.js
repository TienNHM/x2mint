import React, { useState } from 'react'
import './Login.scss'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from 'redux/authSlice'
import { Navigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

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
        try {
            dispatch(loginUser(loginForm))
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

            <h1 className="form__title">
                Đăng nhập
            </h1>
            <Form className="form__body" onSubmit={login}>
                <img className="auth__pic" src="assets/auth.svg"></img>
                <div className="info__area">
                    <div className="input">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChangeLogin}
                            placeholder="Username..."
                        ></input>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChangeLogin}
                            placeholder="Mật khẩu..."
                        ></input>
                    </div>
                    <div className="login__forget">
                        <button
                            className="nav__btn__signup"
                            variant="success"
                            type="submit"
                        >
                            {' '}
                            Đăng nhập
                        </button>
                        <button className="forget__button">Quên mật khẩu</button>
                    </div>
                    <button
                        className="button__login-gg"
                        onClick={() => navigate('/login-gg', { replace: true })}
                    >
                        <img src="assets/icons/google_32.png"></img>Đăng nhập bằng Google
                    </button>
                    <br />
                    <button
                        className="nav__btn__login"
                        onClick={() => navigate('/register', { replace: true })}
                    >
                        Đăng ký
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default Login
