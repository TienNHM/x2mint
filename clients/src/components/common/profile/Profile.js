import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { isLength, isMatch } from 'utils/Validation'
import { showSuccessMsg, showErrMsg } from 'utils/notification/Notification'
import './Profile.scss'

const initialState = {
    username: '',
    role:'',
    full_name:'',
    address:'',
    dob:'',
    school:'',
    phone:'',
    avatar:'',
    _status:'',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)
    const users = useSelector(state => state.users)

    const { user, isAdmin } = auth
    const [data, setData] = useState(initialState)
    const {
        username,
        role,
        full_name,
        dob,
        address,
        school,
        phone } = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if (isAdmin) {
    //         fetchAllUsers(token).then(res => {
    //             dispatch(dispatchGetAllUsers(res))
    //         })
    //     }
    // }, [token, isAdmin, dispatch, callback])

    const onHandleChange = (event) =>
        setData({ ...data, [event.target.name]: event.target.value })

    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if (!file) return setData({ ...data, err: 'No files were uploaded.', success: '' })

            if (file.size > 1024 * 1024)
                return setData({ ...data, err: 'Size too large.', success: '' })

            if (file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({ ...data, err: 'File format is incorrect.', success: '' })

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload_avatar', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })

            setLoading(false)
            setAvatar(res.data.url)
        } catch (err) {
            setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    const updateInfo = () => {
        try {
            axios.patch('/user/update', {
                username: username ? username : user.name,
                avatar: avatar ? avatar : user.avatar
            }, {
                headers: { Authorization: token }
            })

            setData({ ...data, err: '', success: 'Updated Success!' })
        } catch (err) {
            setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    // const updatePassword = () => {
    //     if (isLength(password))
    //         return setData({ ...data, err: 'Password must be at least 6 characters.', success: '' })

    //     if (!isMatch(password, reEnterPassword))
    //         return setData({ ...data, err: 'Password did not match.', success: '' })

    //     try {
    //         axios.post('/user/reset', { password }, {
    //             headers: { Authorization: token }
    //         })

    //         setData({ ...data, err: '', success: 'Updated Success!' })
    //     } catch (err) {
    //         setData({ ...data, err: err.response.data.msg, success: '' })
    //     }
    // }

    const handleUpdate = () => {
        if (username || avatar) updateInfo()
        //if (password) updatePassword()
    }

    const handleDelete = async (id) => {
        try {
            if (user._id !== id) {
                if (window.confirm('Are you sure you want to delete this account?')) {
                    setLoading(true)
                    await axios.delete(`/user/delete/${ id }`, {
                        headers: { Authorization: token }
                    })
                    setLoading(false)
                    setCallback(!callback)
                }
            }
        } catch (err) {
            setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className='container'>
            <div className='profile'>
                <div className='col-left col-3'>
                    <div className='avatar'>
                        <img src={ avatar ? avatar : user.avatar } alt=''/>
                        <span>
                            <i className ="ri-camera-line"></i>
                            <p>Đổi ảnh</p>
                            <input type='file' name='file' id='file_up' onChange={ changeAvatar } />
                        </span>
                    </div>
                    <h2>@{user.username}</h2>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' defaultValue={ user.email }
                            placeholder='Địa chỉ Email' disabled />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='full_name'>Họ & Tên</label>
                        <input type='text' name='full_name' id='full_name' defaultValue={ user.full_name }
                            placeholder='Họ và Tên...' onChange={ onHandleChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Trường</label>
                        <input type='school' name='school' id='school' defaultValue={ user.school }
                            placeholder='Trường học...' onChange={ onHandleChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Địa chỉ</label>
                        <input type='text' name='address' id='address' defaultValue={ user.address }
                            placeholder='Địa chỉ...' onChange={ onHandleChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>SĐT</label>
                        <input type='text' name='phone' id='phone' defaultValue={ user.phone }
                            placeholder='Số điện thoại' onChange={ onHandleChange } />
                    </div>
                    <button className="btn_update" onClick={ handleUpdate }>Cập nhật</button>
                </div>
                <div className="vl"></div>
                <div className='col-right col-7'>
                    <h2>{ 'Các cuộc thi đã tham gia' }</h2>
                </div>
            </div>
        </div>
    )
}

export default Profile
