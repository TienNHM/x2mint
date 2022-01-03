import { CheckoutVNPay } from 'actions/api/VNPayAPI'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function Payments() {
    const user = useSelector((state) => state.auth.user)

    const pay = async () => {
        const res = await CheckoutVNPay({
            bankCode: '',
            orderDescription: 'Checkout',
            orderType: 'billpayment',
            language: 'vn',
            amount: 100000
        })

        console.log(res)

        if (res.success) {
            window.open(res.vnpUrl, '_self')
        }
        else {
            toast.error('💢 Đã có lỗi phát sinh!')
        }
    }

    return (
        <div className="payments">
            <Button onClick={() => pay()}>
                Thanh toán
            </Button>
        </div>
    )
}