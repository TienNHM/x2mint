import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'


export const createAnswer = async (answer, questionId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/answers`
        const request = await axios.post(url,
            {
                ...answer,
                questionId: questionId,
                headers: {
                    'Authorization': `Bearer ${Cookies.get(COOKIES.COOKIES.ACCESS_TOKEN)}`
                }
            }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const updateAnswer = async (answer) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/answers/${answer._id}`
        const request = await axios.put(url, answer, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const getAllAnswers = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/answers`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const getAnswer = async (answerId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/answers/${answerId}`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const deleteAnswer = async (answerId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/answers/${answerId}/delete`
        const request = await axios.post(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}