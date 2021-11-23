import axios from 'axios'
import { API_ROOT } from 'utils/constants'

export const createQuestion = async (accessToken, test) => {
    //TODO: createQuestion
    const url = `${API_ROOT}/api/v1/questions/new/${test.id}`
    const request = await axios.post(url, test, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateQuestion = async (accessToken, test) => {
    //TODO: updateQuestion
    const url = `${API_ROOT}/api/v1/questions/update/${test.id}`
    const request = await axios.put(url, test, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllQuestions = async (accessToken) => {
    //TODO: getAllQuestions
    const url = `${API_ROOT}/api/v1/questions`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllAnswersOfQuestions = async (accessToken, questionId) => {
    //TODO: getAllAnswersOfQuestions
    const url = `${API_ROOT}/api/v1/questions/${questionId}/answers`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}