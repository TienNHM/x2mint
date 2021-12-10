import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'


export const createTakeTest = async (takeTest) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/takeTest`
        const request = await axios.post(url, takeTest, {
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

export const updateTakeTest = async (takeTest) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/takeTest/${takeTest._id}`
        const request = await axios.put(url, takeTest, {
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

export const submit = async (takeTestId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/takeTest/${takeTestId}/submit`
        const request = await axios.put(url, {
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

export const getAllTakeTestByUser = async (userId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/takeTest/user/${userId}`
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

export const getAllTakeTestByTest = async (testId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/takeTest/test/${testId}`
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