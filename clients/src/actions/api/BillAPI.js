import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'

export const createBill = async (bill) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/bills`
        const request = await axios.post(url, bill, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}

export const getAllBills = async () => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/bills`
        const request = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            }
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}