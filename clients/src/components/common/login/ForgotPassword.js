import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from 'utils/Validation'
import { showErrMsg, showSuccessMsg } from 'utils/notification/Notification'
import './Login.scss'
const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]:value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Email chưa đúng !', success: '' })
        try {
            const res = await axios.post('/auths/forgotPassword', { email })

            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg && setData({ ...data, err:  err.response.data.msg, success: '' })
        }
    }
    return (
        <div className="forgot">
            <h2 className="form__title">Lấy lại mật khẩu...</h2>
            <div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className='email__reset'>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                        placeholder="Email..."
                    ></input>
                </div>
                <button
                    className="btn__resetPassword"
                    onClick={forgotPassword}>Nhận Email</button>
            </div>
        </div>
    )
}

export default ForgotPassword