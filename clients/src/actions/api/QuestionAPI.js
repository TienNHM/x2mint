import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'

export const createQuestion = async (question, testId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions/new/${testId}`
        const request = await axios.post(url, question, {
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

export const updateQuestion = async (question) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions/${question._id}`
        const request = await axios.put(url, question, {
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

export const deleteQuestion = async (questionId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions/${questionId}/delete`
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

export const getAllQuestions = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (error) {
        console.error(error)
        return null
    }
}

export const getAllAnswersOfQuestions = async (questionId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions/${questionId}/answers`
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