import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from 'utils/constants'


export const createTakeTest = async (takeTest) => {
    //TODO: takeTest
    const url = `${process.env.REACT_APP_API_ROOT}/submit`
    const request = await axios.post(url, takeTest, {
        headers: {
            'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    }).then(response => response)

    console.log(request.data)
    return request.data
}

export const getAllTakeTestByUser = async (accessToken, userId) => {
    //TODO: getAllTakeTestByUser
    const url = `${process.env.REACT_APP_API_ROOT}/submit/user/${userId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllTakeTestByTest = async (accessToken, testId) => {
    //TODO: getAllTakeTestByTest
    const url = `${process.env.REACT_APP_API_ROOT}/submit/test/${testId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}