import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from 'utils/constants'


export const createTakeTest = async (takeTest) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/submit`
        const request = await axios.post(url, takeTest, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
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
        const url = `${process.env.REACT_APP_API_ROOT}/submit/user/${userId}`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
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
        const url = `${process.env.REACT_APP_API_ROOT}/submit/test/${testId}`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}