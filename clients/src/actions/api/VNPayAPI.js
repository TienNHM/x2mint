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

export const PaymentReturn = async (paymentReturn) => {
    try {
        const query = `?vnp_Amount=${paymentReturn.get('vnp_Amount')}` +
            `?vnp_BankCode=${paymentReturn.get('vnp_BankCode')}` +
            `?vnp_BankTranNo=${paymentReturn.get('vnp_BankTranNo')}` +
            `?vnp_CardType=${paymentReturn.get('vnp_CardType')}` +
            `?vnp_OrderInfo=${paymentReturn.get('vnp_OrderInfo')}` +
            `?vnp_PayDate=${paymentReturn.get('vnp_PayDate')}` +
            `?vnp_ResponseCode=${paymentReturn.get('vnp_ResponseCode')}` +
            `?vnp_TmnCode=${paymentReturn.get('vnp_TmnCode')}` +
            `?vnp_TransactionNo=${paymentReturn.get('vnp_TransactionNo')}` +
            `?vnp_TransactionStatus=${paymentReturn.get('vnp_TransactionStatus')}` +
            `?vnp_TxnRef=${paymentReturn.get('vnp_TxnRef')}` +
            `?vnp_SecureHash=${paymentReturn.get('vnp_SecureHash')}`

        const url = `${process.env.REACT_APP_API_ROOT}/payments/create_payment_url${query}`
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