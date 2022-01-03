import { CheckoutVNPay } from 'actions/api/VNPayAPI'
import React from 'react'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

export default function Payments() {
    const pay = async () => {
        const res = await CheckoutVNPay({
            bankCode: '',
            orderDescription: 'Thanh toán',
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