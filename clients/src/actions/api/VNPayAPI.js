import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'

export const CheckoutVNPay = async (checkout) => {
    try {
        const url = `${process.env.REACT_APP_API_ROOT}/payments/create_payment_url`
        const request = await axios.post(url, {
            headers: {
                'Authorization': `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
            },
            amount: checkout.amount,
            bankCode: checkout.bankCode,
            orderDescription: checkout.orderDescription,
            orderType: checkout.orderType,
            language: checkout.language
        }).then(response => response)

        return request.data
    }
    catch (err) {
        console.error(err)
        return null
    }
}