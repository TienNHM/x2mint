import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, USER_ID } from 'utils/constants'

export const getAllContests = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/contests`
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

export const useGetAllContestsByCreatorId = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/contests/creator/${Cookies.get(USER_ID)}`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data

    } catch (error) {
        console.error(error)
        return null
    }
}

export const createContest = async (contest) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/contests`
        const request = await axios.post(url, contest, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
            }
        }).then(response => response)

        console.log(request.data)
        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const updateContest = async (contest) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/contests/${contest.id}`
        const request = await axios.put(url, contest, {
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

export const updateTestsInContest = async (contestId, testsList) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/contests/${contestId}/tests`
        const request = await axios.put(url, testsList, {
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

export const deleteContest = async (contest) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/contests/${contest.id}/delete`
        const request = await axios.post(url, contest, {
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