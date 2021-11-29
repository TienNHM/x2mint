import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:'',
        password:''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post('http://localhost:3000/login', user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate('/', { replace: true })
            })
    }

    return (
        <div className="login">
            <h1> __ Login __</h1>
            <section className="form__body">
                <div>
                    <img className="auth__pic" src="auth.svg"></img>
                </div>
                <div className="info__area">
                    <div className="input">
                        <input type="text" name="email"
                            value={user.email} onChange={handleChange}
                            placeholder="Email...">
                        </input>
                        <input type="password" name="password"
                            value={user.password} onChange={handleChange}
                            placeholder="Mật khẩu..." >
                        </input>
                    </div>
                    <div className="login__forget">
                        <button className="button__signupp" onClick={login}>Đăng nhập</button>
                        <button className="forget__button">Quên mật khẩu</button>
                    </div>
                    <button className="button__loginn-gg" onClick={() => navigate('/login-gg', { replace: true })}>Đăng nhập bằng Google</button>
                    <br/><button className="button__loginn" onClick={() => navigate('/register', { replace: true })}>Đăng ký</button>
                </div>
            </section>
        </div>
    )
}

export default Login