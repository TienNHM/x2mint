import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import setAuthToken, { clearAuthToken } from 'utils/setAuthToken'
import { ROLE, COOKIES } from 'utils/constants'
import { toast } from 'react-toastify'

//Register
export const register = createAsyncThunk(
    'auth/logins',
    async (params, { rejectWithValue }) => {
        const userForm = params
        let res = null
        try {
            await axios
                .post(`${process.env.REACT_APP_API_ROOT}/auths/register`,
                    {
                        ...userForm,
                        role: ROLE.USER
                    })
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(res)

            if (res.data.success === true) {
                toast.success('🎉 Đăng ký tài khoản thành công. Chào mừng bạn đến với X2M!NT')
            } else {
                switch (res.data.message) {
                case 'username':
                    toast.error('❌ Username đã tồn tại. Vui lòng chọn đăng nhập!')
                    break
                case 'email':
                    toast.error('❌ Email đã tồn tại. Vui lòng chọn đăng nhập!')
                    break
                case 'password':
                    toast.error('💢 Sai mật khẩu, vui lòng nhập lại!')
                    break
                default:
                }
            }

            setAuthToken(res.data.accessToken)
            // Set cookies
            Cookies.set(COOKIES.ACCESS_TOKEN, res.data.accessToken, { expires: COOKIES.MAX_DAYS_EXPIRE })
            Cookies.set(COOKIES.USER_ID, res.data.user.id, { expires: COOKIES.MAX_DAYS_EXPIRE })

            return {
                user: res.data.user,
                isAuthenticated: true
            }
        } catch (error) {

            return rejectWithValue(error.response.data.message)
        }
    }
)

//Login by email and password
export const loginUser = createAsyncThunk(
    'auth/logins',
    async (params, { rejectWithValue }) => {
        const userForm = params
        let res = null
        try {
            await axios
                .post(`${process.env.REACT_APP_API_ROOT}/auths/login`, userForm)
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(res)
            if (res.data.success === true) {
                toast.success('🌟 Đăng nhập thành công! Chào mừng bạn trở lại X2M!NT')
            } else {
                switch (res.data.message) {
                case 'missing':
                    toast.warning('❌ Thiếu username hoặc mật khẩu. Vui lòng nhập lại!')
                    break
                case 'incorrect':
                    toast.error('💢 Tài khoản không tồn tại!')
                    break
                case 'password':
                    toast.error('💢 Sai mật khẩu, vui lòng nhập lại!')
                    break
                default:
                }
            }

            setAuthToken(res.data.accessToken)

            // Set cookies
            Cookies.set(
                COOKIES.ACCESS_TOKEN,
                res.data.accessToken,
                { expires: COOKIES.MAX_DAYS_EXPIRE }
            )

            Cookies.set(
                COOKIES.USER_ID,
                res.data.user.id,
                { expires: COOKIES.MAX_DAYS_EXPIRE }
            )

            return {
                user: res.data.user,
                isAuthenticated: true
            }
        } catch (error) {

            return rejectWithValue(error.response.data.message)
        }
    }
)

//Auto login when token still valid
export const loadUser = createAsyncThunk(
    'user/getUser',
    async (params, { rejectWithValue }) => {
        let response = null
        try {
            const accessToken = Cookies.get(COOKIES.ACCESS_TOKEN)

            if (accessToken) {
                setAuthToken(accessToken)

                await axios
                    .get(`${process.env.REACT_APP_API_ROOT}/auths`)
                    .then((res) => {
                        response = res
                    })
                    .catch((err) => {
                        response = err.response
                    })

                if (response.data.success === true) {
                    return {
                        isAuthenticated: true,
                        user: response.data.user
                    }
                }
                else {
                    // Xóa cookies, do access token không hợp lệ
                    Cookies.remove(COOKIES.ACCESS_TOKEN)
                    Cookies.remove(COOKIES.USER_ID)

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
            Cookies.remove(COOKIES.ACCESS_TOKEN)
            Cookies.remove(COOKIES.USER_ID)

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
            // Xóa Cookies
            Cookies.remove(COOKIES.ACCESS_TOKEN)
            Cookies.remove(COOKIES.USER_ID)

            //Xóa Token
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
