import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { isLength, isMatch } from 'utils/Validation'
import { showErrMsg, showSuccessMsg } from 'utils/notification/Notification'
import './Login.scss'
const initialState = {
    password: '',
    reEnterPassword: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const { token } = useParams()

    const { password, reEnterPassword, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]:value, err: '', success: '' })
    }

    const resetPassword = async () => {
        if (!isLength(password))
            return setData({ ...data, err: 'Password must be at least 6 characters.', success: '' })
        if (!isMatch(password, reEnterPassword))
            return setData({ ...data, err: 'Password did not match.', success: '' })
        try {
            const res = await axios.post('/auths/resetPassword', { password }, {
                headers: { Authorization: token }
            })

            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg && setData({ ...data, err:  err.response.data.msg, success: '' })
        }
    }
    return (
        <div className="reset">
            <h2 className="form__title">Đặt lại mật khẩu...</h2>
            <div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className='password__reset'>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChangeInput}
                        placeholder="Mật khẩu..."
                    ></input>
                </div>
                <div className='password__reset'>
                    <input
                        type="password"
                        name="reEnterPassword"
                        value={reEnterPassword}
                        onChange={handleChangeInput}
                        placeholder="Xác nhận mật khẩu..."
                    ></input>
                </div>
                <button
                    className="btn__resetPassword"
                    onClick={resetPassword}>Đặt lại</button>
            </div>
        </div>
    )
}

export default ResetPassword