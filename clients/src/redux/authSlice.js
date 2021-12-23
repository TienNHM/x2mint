import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import setAuthToken, { clearAuthToken } from 'utils/setAuthToken'
import { ROLE, COOKIES } from 'utils/constants'
import { toast } from 'react-toastify'

//Register
export const register = createAsyncThunk(
    'auth/register',
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
                toast.success('🎉 Đăng ký tài khoản thành công. Kiểm tra email để xác thực tài khoản nhé !')
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

        } catch (error) {

            return rejectWithValue(error.response.data.message)
        }
    }
)

export const activation = createAsyncThunk(
    'auth/activation',
    async (params, { rejectWithValue }) => {
        const activation_token = params
        let res = null
        try {
            await axios
                .post(`${process.env.REACT_APP_API_ROOT}/auths/activation`, { activation_token })
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(res)

            if (res.data.success === true) {
                toast.success('🎉 Xác thực tài khoản thành công. Xin mời Đăng nhập để tiếp tục !')
            } else {
                toast.error('❌ Tài khoản này đã xác thực !')
            }

            // setAuthToken(res.data.accessToken)
            // // Set cookies
            // Cookies.set(COOKIES.ACCESS_TOKEN, res.data.accessToken, { expires: COOKIES.MAX_DAYS_EXPIRE })
            // Cookies.set(COOKIES.USER_ID, res.data.user.id, { expires: COOKIES.MAX_DAYS_EXPIRE })

            // return {
            //     user: res.data.user,
            //     isAuthenticated: true
            // }
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
                case 'incorrect':
                    toast.error('💢 Tài khoản không tồn tại!')
                    break
                case 'password':
                    toast.error('💢 Sai mật khẩu, vui lòng nhập lại!')
                    break
                }
            }
<<<<<<< HEAD
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

//Login via Google
export const loginViaGoogle = createAsyncThunk(
    'auth/loginViaGoogle',
    async (params, { rejectWithValue }) => {
        let res = null
        try {
            await axios
                .post(`${process.env.REACT_APP_API_ROOT}/auths/loginViaGoogle`, { tokenId: params.tokenId })
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(res)
            if (res.data.success === true) {
                if (res.data.message === 'success')
                {
                    toast.success('🌟 Đăng nhập thành công! Chào mừng bạn trở lại X2M!NT')
                }
                else
                    toast.success('🌟 Đăng nhập và tạo tài khoản thành công! Kiểm tra Email nhé !!')
            } else {
                switch (res.data.message) {
                case 'email':
                    toast.error('💢 Email không tồn tại !')
                    break
                case 'password':
                    toast.error('💢 Đăng nhập không thành công, vui lòng thử lại !')
                    break
                }
            }
=======
>>>>>>> b7c7833 (login GG)
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
<<<<<<< HEAD

//reset password
export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (params, { rejectWithValue }) => {
        const resetForm = params
        console.log(resetForm)
        let res = null
        try {
            await axios
                .post(`${process.env.REACT_APP_API_ROOT}/auths/resetPassword`, resetForm)
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            if (res.data.success === true) {
                toast.success('🌟 Đặt lại mật khẩu thành công thành công! Đăng nhập để trở lại X2M!NT nhé !')
            }

=======

//reset password
export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (params, { rejectWithValue }) => {
        const resetForm = params
        console.log(resetForm)
        let res = null
        try {
            await axios
                .post(`${process.env.REACT_APP_API_ROOT}/auths/resetPassword`, resetForm)
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            if (res.data.success === true) {
                toast.success('🌟 Đặt lại mật khẩu thành công thành công! Đăng nhập để trở lại X2M!NT nhé !')
            }

>>>>>>> b7c7833 (login GG)
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
