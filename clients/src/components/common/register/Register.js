import React, { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import { register } from 'actions/api/AuthAPI'

const Register = () => {
    const navigate = useNavigate()
    const [ user, setUser] = useState({
        username: '',
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

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { username, email, password, reEnterPassword } = user
        const data = JSON.parse(register(user))
        console.log(data)

        // try {
        //     if ( username && email && password && (password === reEnterPassword))
        //         axios.post('http://localhost:5000/register', JSON.parse(user))
        //             .then( res => {
        //                 alert(res.data.message)
        //                 navigate.push('/login')})
        // } catch (error) {
        //     console.log(error)
        // }
        // const register = () => {
        //     const { name, email, password, reEnterPassword } = user
        //     if ( name && email && password && (password === reEnterPassword)) {
        //         axios.post('http://localhost:5000/register', user)
        //             .then( res => {
        //                 alert(res.data.message)
        //                 navigate.push('/login')
        //             })
        //     } else {
        //         alert('invlid input')
        //     }
        // }
    }

    return (
        <div className="register"> {console.log('User', user)}
            <section className="signup__body" onSubmit={handleSubmit} method="POST" >
                <div className="signup__area">
                    <div className="input">
                        <input type="text" name="username"
                            value={user.username} onChange={handleChange}
                            placeholder="Username" require >
                        </input>
                        <input type="text" name="email"
                            value={user.email} onChange={handleChange}
                            placeholder="Email" require >
                        </input>
                        <input type="password" name="password"
                            value={user.password} onChange={handleChange}
                            placeholder="Mật khẩu" require >
                        </input>
                        <input type="password" name="reEnterPassword"
                            value={user.reEnterPassword} onChange={handleChange}
                            placeholder="Xác nhận lại mật khẩu" require >
                        </input>
                        <button type="submit" className="btn__signup" onClick={register}>Đăng ký</button>
                    </div>
                    <p className="been-member">Bạn đã có tài khoản?</p>
                    <button className="btn__login" onClick={() => navigate('/login', { replace: true })}>Đăng nhập</button>
                    {/* <button className="btn__signup-gg" onClick={register}><img src="google_32.png"></img></button> */}
                </div>
                <div className="register__right">
                    <h1 className="form__title">Đăng ký tài khoản</h1>
                    <img className="auth__pic" src="auth.svg"></img>
                </div>
            </section>
        </div>
    )
}

export default Register