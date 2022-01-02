import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'

export const registerAccount = async (data) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/auths/register`
        const request = await axios.post(url, data)

        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const verify = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/auths/verify`
        const request = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const loginWithGoogle = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/auths/login/google`
        const request = await axios.post(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const auth = async (username, password) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/auths/login`
        const request = await axios.post(url, {
            username: username,
            password: password
        }).then(response => response)
        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}