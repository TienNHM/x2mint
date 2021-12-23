import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk( 'users/info',
    async (params, { rejectWithValue }) => {
        let res = null
        try {
            await axios
                .get(`${process.env.REACT_APP_API_ROOT}/users/info`, {
                    headers: { Authorization: params }
                })
                .then((response) => {
                    res = response
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(res)
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)