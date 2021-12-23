import React, { useEffect, useState } from 'react'
import './SettingsAccount.scss'
import { Form, Image, Button, Row, Col, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ModalUpdateUserInfo from './ModalUpdateUserInfo'
import { COOKIES, MODAL_ACTION, STATUS } from 'utils/constants'
import { updateUserInfo } from 'actions/api/UserAPI'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'

export default function SettingsAccount() {
    const user = useSelector((state) => state.auth.user)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: `/users/${user.id}/info`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const [userData, setUserData] = useState(null)

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        if (response) {
            setUserData({
                full_name: response.data.full_name,
                username: response.data.username,
                email: response.data.email,
                phone: response.data.phone,
                dob: response.data.dob,
                school: response.data.school,
                address: response.data.address,
                avatar: response.data.avatar,
                _status: response.data._status,
                _id: response.data.id
            })
        }
    }, [response])

    const handleAction = async (action, newUser) => {
        if (action === MODAL_ACTION.CLOSE) {
            setIsShow(false)
            toast.warning('💢 Đã hủy các thay đổi!')
        }
        else if (action === MODAL_ACTION.CONFIRM) {
            //#region Validate
            if (!newUser.full_name || newUser.full_name === '') {
                toast.error('💢 Vui lòng nhập đầy đủ họ tên!')
                return
            }
            if (!newUser.email || newUser.email === '') {
                toast.error('💢 Vui lòng nhập email')
                return
            }
            //#endregion

            const data = await updateUserInfo(newUser)
            console.log(data)

            setUserData({
                full_name: data.user.full_name,
                username: data.user.username,
                email: data.user.email,
                phone: data.user.phone,
                dob: data.user.dob,
                school: data.user.school,
                address: data.user.address,
                avatar: data.user.avatar,
                _status: data.user._status,
                _id: data.user.id
            })
            setIsShow(false)

            toast.success('🎉 Đã cập nhật thông tin thành công!')
        }
    }

    return (
        <div className="settings-account">
            {loading &&
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
            }

            {!loading &&
                <>
                    <Form>
                        <Row className="p-3">
                            <Col lg={3} md={12} xs={12}
                                className="mb-4 d-flex justify-content-center align-content-center"
                            >
                                <div className="basic-info">
                                    <Image roundedCircle
                                        width="200px" height="200px"
                                        src={userData.avatar} />

                                    <div className="m-3">
                                        <div className="fw-bolder">{userData.full_name}</div>
                                        <div>
                                            <Badge pill bg="info">@{userData.username}</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <Button size="sm" variant="primary" className="m-1">
                                            Đổi mật khẩu
                                        </Button>
                                        <Button size="sm" variant="success" className="m-1"
                                            onClick={() => setIsShow(true)}>
                                            Cập nhật
                                        </Button>
                                    </div>
                                </div>
                            </Col>

                            <Col className="detail-info-section ps-4 pe-4 text-start" lg={9} md={12} xs={12}>
                                <Row sm={12}>
                                    <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control disabled type="email" value={userData.email} />
                                    </Form.Group>

                                    <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="password">
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control disabled type="text" value={userData.phone} />
                                    </Form.Group>
                                </Row>

                                <Row sm={12}>
                                    <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="address">
                                        <Form.Label>Địa chỉ</Form.Label>
                                        <Form.Control disabled type="text" value={userData.address} />
                                    </Form.Group>

                                    <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="school">
                                        <Form.Label>Trường</Form.Label>
                                        <Form.Control disabled type="text" value={userData.school} />
                                    </Form.Group>
                                </Row>

                                <Row sm={12}>
                                    <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="dob">
                                        <Form.Label>Ngày sinh</Form.Label>
                                        <Form.Control disabled type="text" value={userData.dob} />
                                    </Form.Group>

                                    <Form.Group as={Col} xs={12} md={6} className="mb-3" controlId="status">
                                        <Form.Label>Trạng thái</Form.Label>
                                        <Form.Control disabled type="text" value={userData._status}
                                            className={userData._status === STATUS.OK ?
                                                'bg-success text-light text-uppercase' :
                                                'bg-warning text-light text-uppercase'
                                            }
                                        />
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                    </Form>

                    <ModalUpdateUserInfo
                        user={userData}
                        isShow={isShow}
                        onAction={handleAction}
                    />
                </>
            }
        </div>
    )
}