import axios from 'axios'


export const createQuestion = async (accessToken, test) => {
    //TODO: createQuestion
    const url = `${process.env.REACT_APP_API_ROOT}/questions/new/${test.id}`
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
    const url = `${process.env.REACT_APP_API_ROOT}/questions/update/${test.id}`
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
    const url = `${process.env.REACT_APP_API_ROOT}/questions`
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
    const url = `${process.env.REACT_APP_API_ROOT}/questions/${questionId}/answers`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}