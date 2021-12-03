import React, { useState, useContext } from 'react'
import { AuthContext } from 'contexts/AuthContext'
import './Login.scss'
import { Form } from 'react-bootstrap'
import { AlertMessage } from 'utils/AlertMessage'
import { useNavigate } from 'react-router-dom'
import Profile from 'components/common/profile/Profile'

const Login = () => {
    //Context
    const { loginUser } = useContext(AuthContext)

    //Route
    const navigate = useNavigate()

    //Local
    const [loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })

    const [alert, setAlert] = useState(null)
    const { username, password } = loginForm

    const onChangeLogin = event =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async (event) => {
        event.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (!loginData.success) {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 5000)
                console.log(loginData)
            }
            if (loginData.success) {
                navigate('/profile'),
                console.log(loginData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login">
            <AlertMessage info={alert} />
            <h1 h1 className="form__title" >Đăng nhập</h1>
            <Form className="form__body" onSubmit = {login}>
                <img className="auth__pic" src="auth.svg"></img>
                <div className="info__area">
                    <div className="input">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChangeLogin}
                            placeholder="Username...">
                        </input>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChangeLogin}
                            placeholder="Mật khẩu..." >
                        </input>
                    </div>
                    <div className="login__forget">
                        <button className="nav__btn__signup" variant='success' type='submit'> Đăng nhập</button>
                        <button className="forget__button">Quên mật khẩu</button>
                    </div>
                    <button className="button__login-gg" onClick={() => navigate('/login-gg', { replace: true })}><img src="google_32.png"></img>Đăng nhập bằng Google</button>
                    <br/><button className="nav__btn__login" onClick={() => navigate('/register', { replace: true })}>Đăng ký</button>
                </div>
            </Form>
        </div>
    )
}

export default Login