import axios from 'axios'
import { API_ROOT } from 'utils/constants'

export const takeTest = async (accessToken, takeTest) => {
    //TODO: takeTest
    const url = `${API_ROOT}/app/api/v1/takeTest`
    const request = await axios.post(url, takeTest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllTakeTestByUser = async (accessToken, userId) => {
    //TODO: getAllTakeTestByUser
    const url = `${API_ROOT}/app/api/v1/takeTest/user/${userId}`
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
    const url = `${API_ROOT}/app/api/v1/takeTest/test/${testId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}