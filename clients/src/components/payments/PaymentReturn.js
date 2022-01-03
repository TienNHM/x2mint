import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { COOKIES, ACCOUNT_TYPES } from 'utils/constants'
import { useSelector } from 'react-redux'
import { updateUserInfo } from 'actions/api/UserAPI'
import { cloneDeep } from 'lodash'
import { HashLoader } from 'react-spinners'
import { Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './PaymentReturn.scss'

export default function PaymentReturn() {
    const [searchParams, setSearchParams] = useSearchParams()
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()

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

    const url = `${process.env.REACT_APP_API_ROOT}/payments/vnpay_return?${query}`

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

    const [isSuccess, setIsSuccess] = useState(false)

    const upgrade = async () => {
        const userInfo = cloneDeep(user)
        userInfo._id = user.id
        userInfo.type = ACCOUNT_TYPES.PRO
        delete userInfo.id

        await updateUserInfo(userInfo)
    }
    useEffect(() => {
        if (response) {
            if (response.success && response.code === '00') {
                upgrade()
                setIsSuccess(true)
            }
            else {
                setIsSuccess(false)
            }
        }
    }, [response])

    return (
        <div className="payment-return d-flex flex-column justify-content-center align-items-center">
            {loading && (
                <div
                    className='sweet-loading d-flex justify-content-center align-items-center'
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 100
                    }}>
                    <HashLoader color={'#7ED321'} loading={loading} />
                </div>
            )}

            {!loading && isSuccess && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image src={process.env.PUBLIC_URL + '/assets/images/payment-successful.svg'} />
                    <h1 className="fw-bolder m-3 p-3">Thanh toán thành công!</h1>
                    <Button variant="success"
                        onClick={() => navigate('/profile')}>
                        Về trang cá nhân
                    </Button>
                </div>
            )}

            {!loading && !isSuccess && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image src={process.env.PUBLIC_URL + '/assets/images/opps.svg'} />
                    <h3 className="fw-bolder m-3 p-3">
                        Giao dịch đã bị hủy!
                    </h3>
                    <Button variant="success"
                        onClick={() => navigate('/profile')}>
                        Về trang cá nhân
                    </Button>
                </div>
            )}
        </div>
    )
}