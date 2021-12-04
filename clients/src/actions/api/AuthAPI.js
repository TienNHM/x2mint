import axios from 'axios'
import { API_ROOT, ROLE_USER } from 'utils/constants'

export const register = async (user) => {
    //TODO: register
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/auths/register`
        const request = await axios.post(url, {
            ...user,
            role: ROLE_USER,
            isHidden: false
        })
        console.log(request.data)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const verify = async (accessToken) => {
    //TODO: verify
    const url = `${process.env.REACT_APP_API_ROOT}/auths/verify`
    const request = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const loginWithGoogle = async (accessToken) => {
    //TODO: login with Google
    const url = `${process.env.REACT_APP_API_ROOT}/auths/login/google`
    const request = await axios.post(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const auth = async (username, password) => {
    const url = `${process.env.REACT_APP_API_ROOT}/auths/login`
    const request = await axios.post(url, {
        username: username,
        password: password
    })

    return request.data
}
