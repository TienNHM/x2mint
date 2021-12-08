import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from 'utils/constants'


export const createTest = async (test) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/tests`
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

export const updateTest = async (test) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/tests/${test.id}`
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

export const updateQuestionsInTest = async (testId, questionsList) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/tests/${testId}/questions`
        const request = await axios.put(url, questionsList, {
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

export const getAllTests = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/tests`
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

export const getAllTestsByCreator = async (creatorId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/tests/creator/${creatorId}`
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

export const deleteTest = async (testId) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/tests/${testId}/delete`
        const request = await axios.put(url, {
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