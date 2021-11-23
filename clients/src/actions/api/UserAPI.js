import axios from 'axios'
import { API_ROOT, ROLE_USER } from 'utils/constants'

export const getAllUsers = async (accessToken) => {
    //TODO: getAllUsers
    const url = `${API_ROOT}/app/api/v1/users`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getUserInfo = async (accessToken, userId) => {
    //TODO: getAllUsers
    const url = `${API_ROOT}/app/api/v1/users/info/${userId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateUserInfo = async (accessToken, user) => {
    //TODO: updateUserInfo
    const url = `${API_ROOT}/app/api/v1/users/info/${user.id}`
    const request = await axios.get(url, user, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const resetPassword = async (accessToken, oldPassword, newPassword) => {
    //TODO: resetPassword
    const url = `${API_ROOT}/app/api/v1/users/resetPassword`
    const data = {
        oldPassword: oldPassword,
        newPassword: newPassword
    }
    const request = await axios.put(url, data, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}