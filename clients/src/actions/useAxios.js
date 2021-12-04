import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_ROOT } from 'utils/constants'

axios.defaults.baseURL = API_ROOT

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params)
            setResponse(result.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(axiosParams)
    }, []) // execute once only

    return { response, error, loading }
}

//https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj#final-code