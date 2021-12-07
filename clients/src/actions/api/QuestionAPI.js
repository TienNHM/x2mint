import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from 'utils/constants'


export const createQuestion = async (test) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions/new/${test.id}`
        const request = await axios.post(url, test, {
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

export const updateQuestion = async (test) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions/update/${test.id}`
        const request = await axios.put(url, test, {
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

export const getAllQuestions = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/questions`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
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