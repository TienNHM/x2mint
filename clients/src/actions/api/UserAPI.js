import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'

export const getAllUsers = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/users`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const getUserInfo = async (userId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/users/${userId}/info`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const updateUserInfo = async (user) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/users/${user._id}/update`
        const request = await axios.put(url, user, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const changePassword = async (userId, password, newPassword) => {
    const data = {
        password: password,
        newPassword: newPassword
    }
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/users/${userId}/changePassword`
        const request = await axios.put(url, data, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const resetPassword = async (oldPassword, newPassword) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/users/resetPassword`
        const data = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        const request = await axios.put(url, data, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}