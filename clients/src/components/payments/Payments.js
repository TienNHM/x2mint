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
            orderDescription: user.id,
            orderType: 'billpayment',
            language: 'vn',
            amount: 100000
        })

        if (res.success) {
            window.open(res.vnpUrl, '_self')
        }
        else {
            toast.error('💢 Đã có lỗi phát sinh!')
        }
    }

    return (
        <div className="payments">
            <Button onClick={() => pay()} size="sm" className='w-100'>
                <i className="fa fa-star mx-1"></i>
                <span>Nâng cấp ngay</span>
            </Button>
        </div>
    )
}