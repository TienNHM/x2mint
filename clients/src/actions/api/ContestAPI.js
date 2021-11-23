import axios from 'axios'
import { auth } from 'actions/api/AuthAPI'
import { API_ROOT } from 'utils/constants'

const username = 'minhhoang1'
const password = '12345'

export const fetchAllContests = async () => {
    var accessToken = await auth(username, password).then(data => data.accessToken)

    const url = `${API_ROOT}/app/api/v1/contests`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    return request.data
}

export const getAllContestsByCreator = async (id) => {
    var accessToken = await auth(username, password).then(data => data.accessToken)

    const url = `${API_ROOT}/app/api/v1/contests/creator/${id}`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    return request.data
}

export const createContest = async (contest) => {
    var accessToken = await auth(username, password).then(data => data.accessToken)

    const newContest = {
        ...contest,
        creatorId: '618dcea8a611f4340296328c',
        isHidden: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }

    const url = `${API_ROOT}/app/api/v1/contests`
    const request = await axios.post(url, newContest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateContest = async (contest) => {
    var accessToken = await auth(username, password).then(data => data.accessToken)

    const url = `${API_ROOT}/app/api/v1/contests/${contest.id}`
    const request = await axios.put(url, contest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateTestsInContest = async (contestId, testsList) => {
    //TODO: update các bài tests trong contest
    var accessToken = await auth(username, password).then(data => data.accessToken)

    const url = `${API_ROOT}/app/api/v1/contests/${contestId}/tests`
    const request = await axios.put(url, testsList, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}

export const deleteContest = async (contest) => {
    var accessToken = await auth(username, password).then(data => data.accessToken)

    const url = `${API_ROOT}/app/api/v1/contests/${contest.id}/delete`
    const request = await axios.post(url, contest, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    console.log(request.data)
    return request.data
}