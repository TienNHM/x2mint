import { createContext, useReducer, useEffect } from 'react'
import authReducer from '../reducers/authReducer'
import { ACCESS_TOKEN, API_ROOT } from '../utils/constants'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import React from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    // Authenticate user
    const loadUser = async () => {
        const accessToken = Cookies.get(ACCESS_TOKEN)
        if (accessToken) {
            setAuthToken(accessToken)
        }
        try {
            const response = await axios.get(`${API_ROOT}/auths`)
            if (response.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: { isAuthenticated: true, user: response.data.user }
                })
            }
        } catch (error) {
            Cookies.remove(ACCESS_TOKEN)
            setAuthToken(null)
            dispatch({
                type: 'SET_AUTH',
                payload: { isAuthenticated: false, user: null }
            })
        }
    }

    useEffect(() => loadUser(), [])

    // Login
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${API_ROOT}/auths/login`, userForm)
            if (response.data.success)
                localStorage.setItem( //cookie thay cho localStorage   ===> coi doc
                    ACCESS_TOKEN,
                    response.data.accessToken
                )
            await loadUser()
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    // Register
    const registerUser = async (userForm) => {
        try {
            const response = await axios.post(`${API_ROOT}/auths/register`, userForm)
            if (response.data.success)
                localStorage.setItem(
                    ACCESS_TOKEN,
                    response.data.accessToken
                )

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    // Logout
    const logoutUser = () => {
        localStorage.removeItem(ACCESS_TOKEN)
        dispatch({
            type: 'SET_AUTH',
            payload: { isAuthenticated: false, user: null }
        })
    }

    // Context data
    const authContextData = { loginUser, registerUser, logoutUser, authState }

    // Return provider
    return (
        <AuthContext.Provider value = { authContextData }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
