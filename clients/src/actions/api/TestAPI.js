import axios from 'axios'


export const createTest = async (accessToken, test) => {
    //TODO: createTest
    const newTest = {
        ...test,
        creatorId: '618dcea8a611f4340296328c'
    }

    const url = `${process.env.REACT_APP_API_ROOT}/tests`
    const request = await axios.post(url, newTest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateTest = async (accessToken, test) => {
    //TODO: updateTest
    const url = `${process.env.REACT_APP_API_ROOT}/tests/${test.id}`
    const request = await axios.put(url, test, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateQuestionsInTest = async (accessToken, testId, questionsList) => {
    //TODO: updateQuestionsInTest
    const url = `${process.env.REACT_APP_API_ROOT}/tests/${testId}/questions`
    const request = await axios.put(url, questionsList, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllTests = async (accessToken) => {
    //TODO: getAllTests
    const url = `${process.env.REACT_APP_API_ROOT}/tests`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllTestsByCreator = async (accessToken, creatorId) => {
    //TODO: getAllTestsByCreator
    const url = `${process.env.REACT_APP_API_ROOT}/tests/creator/${creatorId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const deleteTest = async (accessToken, testId) => {
    //TODO: deleteTest
    const url = `${process.env.REACT_APP_API_ROOT}/tests/${testId}/delete`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}