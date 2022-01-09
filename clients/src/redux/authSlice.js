import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import setAuthToken, { clearAuthToken } from 'utils/setAuthToken'
import { ROLE, COOKIES } from 'utils/constants'
import { toast } from 'react-toastify'
import { registerAccount, activateAccount } from 'actions/api/AuthAPI'

//Register
export const register = createAsyncThunk(
    'auth/register',
    async (params, { rejectWithValue }) => {
        const userForm = params
        let res = null

        try {
            res = await registerAccount({
                ...userForm,
                role: ROLE.USER
            })

            if (res.success === true) {
                toast.success('🎉 Đăng ký tài khoản thành công. Kiểm tra email để xác thực tài khoản nhé !')
            }
            else {
                switch (res.message) {
                case 'username':
                    toast.error('❌ Username đã tồn tại. Vui lòng chọn đăng nhập!')
                    Cookies.set(COOKIES.REGISTER_STATUS, 'fail', { expires: COOKIES.MAX_DAYS_EXPIRE })
                    break
                case 'email':
                    toast.error('❌ Email đã tồn tại. Vui lòng chọn đăng nhập!')
                    Cookies.set(COOKIES.REGISTER_STATUS, 'fail', { expires: COOKIES.MAX_DAYS_EXPIRE })
                    break
                case 'password':
                    toast.error('💢 Sai mật khẩu, vui lòng nhập lại!')
                    Cookies.set(COOKIES.REGISTER_STATUS, 'fail', { expires: COOKIES.MAX_DAYS_EXPIRE })
                    break
                default:
                }
            }

            return {
                isAuthenticated: true
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

        try {

            let res = await activateAccount(activation_token)
            console.log(res)

            alert(res.success)
            if (res.success === true) {
                toast.success('🎉 Xác thực tài khoản thành công. Xin mời Đăng nhập để tiếp tục !')
            } else {
                toast.error('❌ Tài khoản này đã xác thực !')
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

            if (res.data.success === true) {
                toast.success('🌟 Đăng nhập thành công! Chào mừng bạn trở lại X2M!NT')

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
            }
            else {
                if (res.data.message === 'incorrect') {
                    toast.error('💢 Tài khoản không tồn tại!')
                }
                else if (res.data.message === 'password') {
                    toast.error('💢 Sai mật khẩu, vui lòng nhập lại!')
                }
            }

            return {
                user: res.data.user,
                isAuthenticated: false
            }

        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

//Login via Google
export const loginViaGoogle = createAsyncThunk(
    'auth/logins',
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

            if (res.data.success === true) {
                if (res.data.message === 'login') {
                    toast.success('🌟 Chào mừng bạn trở lại X2M!NT')

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
                }
                else
                    toast.success('🌟 Đăng nhập và tạo tài khoản thành công! Kiểm tra Email nhé !!')
            } else {
                if (res.data.message === 'email') {
                    toast.error('💢 Email không tồn tại !')
                }
                else if (res.data.message === 'password') {
                    toast.error('💢 Đăng nhập không thành công, vui lòng thử lại !')
                }
            }

            return {
                user: res.data.user,
                isAuthenticated: false
            }
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

//reset password
export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (params, { rejectWithValue }) => {
        const resetForm = params

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
            return {
                success: true
            }
        }
        catch (err) {
            console.log(err)
            return rejectWithValue(err.response.data.message)
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
    success: false,
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
            state.success = action.payload.isAuthenticated
        },
        [loginUser.pending]: (state, actions) => {
            state.authLoading = true
            state.success = false
            actions
        },
        [loginUser.rejected]: (state, actions) => {
            state.authLoading = false
            state.isAuthenticated = false
            state.error = actions.payload
            state.user = null
            state.success = false
        },
        [loadUser.pending]: (state, actions) => {
            state.authLoading = true
            state.success = false
            actions
        },
        [loadUser.fulfilled]: (state, action) => {
            state.authLoading = false
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
            state.success = action.payload.isAuthenticated
        },
        [loadUser.rejected]: (state, actions) => {
            state.authLoading = false
            state.isAuthenticated = false
            state.user = null
            state.error = actions.payload
        },
        [resetPassword.pending]: (state, actions) => {
            state.success = false
            actions
        },
        [resetPassword.fulfilled]: (state, actions) => {
            console.log(actions)
            state.success = actions.payload.success
        },
        [resetPassword.rejected]: (state, actions) => {
            state.success = false
            actions
        }
    }
})

export const { logOut } = authSlice.actions

const { reducer: authReducer } = authSlice

export default authReducer
