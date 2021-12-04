import axios from 'axios'
import { API_ROOT } from 'utils/constants'

export const fetchAllContests = async (accessToken) => {
    //TODO: fetchAllContests
    const url = `${API_ROOT}/contests`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const getAllContestsByCreator = async (accessToken, creatorId) => {
    //TODO: getAllContestsByCreator
    const url = `${API_ROOT}/contests/creator/${creatorId}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const createContest = async (accessToken, contest) => {
    //TODO: createContest
    const url = `${API_ROOT}/contests`
    const request = await axios.post(url, contest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateContest = async (accessToken, contest) => {
    //TODO: updateContest
    const url = `${API_ROOT}/contests/${contest.id}`
    const request = await axios.put(url, contest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateTestsInContest = async (accessToken, contestId, testsList) => {
    //TODO: update các bài tests trong contest
    const url = `${API_ROOT}/contests/${contestId}/tests`
    const request = await axios.put(url, testsList, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const deleteContest = async (accessToken, contest) => {
    //TODO: deleteContest
    const url = `${API_ROOT}/contests/${contest.id}/delete`
    const request = await axios.post(url, contest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}