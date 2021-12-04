import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { API_ROOT, ACCESS_TOKEN, USER_ID } from 'utils/constants'

export const getAllContests = async () => {
    //TODO: getAllContests
    const url = `${API_ROOT}/contests`
    const request = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    console.log(request.data)
    return request.data
}

export const useGetAllContestsByCreatorId = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const url = `${API_ROOT}/contests/creator/${Cookies.get(USER_ID)}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
                    }
                })

                setData(response)

            } catch (error) {
                console.error(error)
            }

            setIsLoading(false)
        }

        fetchData()
    }, [])

    return {
        data,
        isLoading
    }
}

export const createContest = async (contest) => {
    //TODO: createContest
    const url = `${API_ROOT}/contests`
    const request = await axios.post(url, contest, {
        headers: {
            'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateContest = async (contest) => {
    //TODO: updateContest
    const url = `${API_ROOT}/contests/${contest.id}`
    const request = await axios.put(url, contest, {
        headers: {
            'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    console.log(request.data)
    return request.data
}

export const updateTestsInContest = async (contestId, testsList) => {
    //TODO: update các bài tests trong contest
    const url = `${API_ROOT}/contests/${contestId}/tests`
    const request = await axios.put(url, testsList, {
        headers: {
            'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    console.log(request.data)
    return request.data
}

export const deleteContest = async (contest) => {
    //TODO: deleteContest
    const url = `${API_ROOT}/contests/${contest.id}/delete`
    const request = await axios.post(url, contest, {
        headers: {
            'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    console.log(request.data)
    return request.data
}