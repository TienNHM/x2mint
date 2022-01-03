import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { COOKIES } from 'utils/constants'

export default function PaymentReturn() {
    const [searchParams, setSearchParams] = useSearchParams()

    const query = `vnp_Amount=${searchParams.get('vnp_Amount')}` +
            `&vnp_BankCode=${searchParams.get('vnp_BankCode')}` +
            `&vnp_BankTranNo=${searchParams.get('vnp_BankTranNo')}` +
            `&vnp_CardType=${searchParams.get('vnp_CardType')}` +
            `&vnp_OrderInfo=${searchParams.get('vnp_OrderInfo')}` +
            `&vnp_PayDate=${searchParams.get('vnp_PayDate')}` +
            `&vnp_ResponseCode=${searchParams.get('vnp_ResponseCode')}` +
            `&vnp_TmnCode=${searchParams.get('vnp_TmnCode')}` +
            `&vnp_TransactionNo=${searchParams.get('vnp_TransactionNo')}` +
            `&vnp_TransactionStatus=${searchParams.get('vnp_TransactionStatus')}` +
            `&vnp_TxnRef=${searchParams.get('vnp_TxnRef')}` +
            `&vnp_SecureHash=${searchParams.get('vnp_SecureHash')}`

    const url = `${process.env.REACT_APP_API_ROOT}/payments/vnpay_ipn?${query}`

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: url,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    useEffect(() => {
        if (response) {
            console.log(response)
        }
    }, [response])

    return (
        <div className="payment-return">
            {!loading && alert('hi')}
        </div>
    )
}