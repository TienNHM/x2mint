import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from 'utils/Validation'
import './ForgotPassword.scss'
import Footer from 'pages/home/Footer'
import { stopWebcam } from 'utils/faceDetection'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    stopWebcam(null)

    const [data, setData] = useState(initialState)

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Invalid emails.', success: '' })
        try {
            const res = await axios.post('/auths/forgotPassword', { email })

            return setData({
                ...data,
                err: '',
                success: res.data.msg
            })
        } catch (err) {
            err.response.data.msg && setData({
                ...data,
                err: err.response.data.msg,
                success: ''
            })
        }
    }
    return (
        <div className="forgot-password d-flex flex-column justify-content-end">
            <div className="d-flex justify-content-center">
                <div className="forgot">
                    <h2 className="form__title">Lấy lại mật khẩu</h2>
                    <div>
                        {err &&
                            <div className="bg-danger text-light">
                                {err}
                            </div>
                        }

                        {success &&
                            <div className="bg-success text-light">
                                Vui lòng kiểm tra email để đặt lại mật khẩu!
                            </div>
                        }
                        <div className='email__reset'>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChangeInput}
                                placeholder="Email..."
                                className="text-center"
                            ></input>
                        </div>
                        <button
                            className="btn__resetPassword text-light"
                            onClick={forgotPassword}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgotPassword