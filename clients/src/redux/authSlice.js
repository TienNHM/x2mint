import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import setAuthToken, { clearAuthToken } from 'utils/setAuthToken'
import {
    API_ROOT,
    MAX_DAYS_EXPIRE,
    ACCESS_TOKEN, USER_ID
} from 'utils/constants'

//Login by email and password
export const loginUser = createAsyncThunk(
    'auth/logins',
    async (params, { rejectWithValue }) => {
        const userForm = params
        let res = null
        try {
            await axios
                .post(`${API_ROOT}/auths/login`, userForm)
                .then((response) => {
                    //Set token for axio
                    // if (response.data.success) {

                    //Save token
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })

            setAuthToken(res.data.accessToken)
            console.log('Res===> ', res)

            // Set cookies
            Cookies.set(ACCESS_TOKEN, res.data.accessToken, { expires: MAX_DAYS_EXPIRE })
            Cookies.set(USER_ID, res.data.user.id, { expires: MAX_DAYS_EXPIRE })

            return {
                user: res.data.user,
                isAuthenticated: true
            }
        } catch (error) {
            // console.log(error.response.status);
            console.log(error.response)
            return rejectWithValue(error.response.data.message)
        }
    }
)

//Auto login when token still valid
export const loadUser = createAsyncThunk(
    'user/getUser',
    async (params, { rejectWithValue }) => {
        //thunkAPI.dispath(...)
        //     const currentUser = await userApi.getMe();
        //   return currentUser;
        let response = null
        console.log('HÊLLLLO')
        try {
            const accessToken = Cookies.get(ACCESS_TOKEN)

            if (accessToken) {
                setAuthToken(accessToken)
                await axios
                    .get(`${API_ROOT}/auths`)
                    .then((res) => {
                        response = res
                    })
                    .catch((err) => {
                        response = err.response
                    })
                console.log('Heiii', response)

                if (response.data.success === true) {
                    return {
                        isAuthenticated: true,
                        user: response.data.user
                    }
                }
                else {
                    // Xóa cookies, do access token không hợp lệ
                    Cookies.remove(ACCESS_TOKEN)
                    Cookies.remove(USER_ID)

                    return {
                        isAuthenticated: false,
                        user: null
                    }
                }
            } else {
                return rejectWithValue('can not find access token')
            }
        } catch (error) {
            // Xóa cookies, do access token không hợp lệ
            Cookies.remove(ACCESS_TOKEN)
            Cookies.remove(USER_ID)

            return rejectWithValue(error.response.data.message)
        }
    }
)

const initialState = {
    authLoading: true,
    isAuthenticated: false,
    user: null,
    error: '',
    isOpened: true
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            window.localStorage.clear()
            clearAuthToken()
            state.isAuthenticated = false
            state.user = null
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.authLoading = false
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
        },
        [loginUser.pending]: (state, actions) => {
            state.authLoading = true
        },
        [loginUser.rejected]: (state, actions) => {
            state.authLoading = false
            state.isAuthenticated = false
            state.error = actions.payload
            state.user = null
        },
        [loadUser.pending]: (state, actions) => {
            state.authLoading = true
        },
        [loadUser.fulfilled]: (state, action) => {
            state.authLoading = false
            console.log(action.payload)
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
        },
        [loadUser.rejected]: (state, actions) => {
            state.authLoading = false
            state.isAuthenticated = false
            state.user = null
            state.error = actions.payload
        }
    }
})

export const { logOut } = authSlice.actions

const { reducer: authReducer } = authSlice

export default authReducer
