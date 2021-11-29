import React, { useState } from 'react'
import './Register.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if ( name && email && password && (password === reEnterPassword)) {
            axios.post('http://localhost:3000/register', user)
                .then( res => {
                    alert(res.data.message)
                    navigate('/login', { replace: true })
                })
        } else {
            alert('invlid input')
        }
    }

    return (
        <div className="register"> {console.log('User', user)}
            <h1> __ Register __</h1>
            <section className="signup__body">
                <div className="signup__area">
                    <button className="btn__signup" onClick={register}>Đăng ký với Google</button>
                    <p className="been-member">Bạn đã có tài khoản?</p>
                    <button className="btn__login" onClick={() => navigate('/login', { replace: true })}>Đăng nhập</button>
                </div>
                <div>
                    <img className="auth__pic" src="auth.svg"></img>
                </div>
            </section>
        </div>
    )
}

export default Register