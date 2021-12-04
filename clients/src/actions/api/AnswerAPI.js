import axios from 'axios'
import { API_ROOT } from 'utils/constants'

export const createAnswer = async (accessToken, answer) => {
    //TODO: createAnswer
    const url = `${API_ROOT}/answers`
    const request = await axios.post(url, answer, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateAnswer = async (accessToken, answer) => {
    //TODO: updateAnswer
    const url = `${API_ROOT}/answers/${answer.id}`
    const request = await axios.put(url, answer, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllAnswers = async (accessToken) => {
    //TODO: getAllAnswers
    const url = `${API_ROOT}/answers`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAnswer = async (accessToken, answerId) => {
    //TODO: getAnswer
    const url = `${API_ROOT}/answers/${answerId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const deleteAnswer = async (accessToken, answerId) => {
    //TODO: deleteAnswer
    const url = `${API_ROOT}/answers/${answerId}/delete`
    const request = await axios.post(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}