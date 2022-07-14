import React, { useEffect, useState } from 'react'
import './Profile.scss'
import { Form, Image, Button, Row, Col, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ModalUpdateUserInfo from './ModalUpdateUserInfo'
import { ACCOUNT_TYPES, COOKIES, MODAL_ACTION, ROLE, STATUS } from 'utils/constants'
import { changePassword, updateUserInfo } from 'actions/api/UserAPI'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { MDBDataTableV5 } from 'mdbreact'
import { cloneDeep } from 'lodash'
import { ExportDataUserTakeTest } from './UserTakeTest'
import ChangePassword from 'components/account/handlePassword/ChangePassword'
import Payments from 'components/payments/Payments'
import MessengerCustomerChat from 'react-messenger-customer-chat'

export default function Profile() {
    const user = useSelector((state) => state.auth.user)

    const {
        response: responseUserData,
        loading: loadingUserData
    } = useAxios({
        method: 'GET',
        url: `/users/${user.id}/info`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const {
        response: responseTakeTestData,
        loading: loadingTakeTestData
    } = useAxios({
        method: 'GET',
        url: `/takeTest/user/${user.id}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const [userData, setUserData] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const [isShowModalChangePassword, setIsShowModalChangePassword] = useState(false)
    const [tableData, setTableData] = useState(null)

    useEffect(() => {
        if (responseUserData) {
            setUserData({
                full_name: responseUserData.data.full_name,
                username: responseUserData.data.username,
                email: responseUserData.data.email,
                phone: responseUserData.data.phone,
                dob: responseUserData.data.dob,
                school: responseUserData.data.school,
                address: responseUserData.data.address,
                avatar: responseUserData.data.avatar,
                _status: responseUserData.data._status,
                _id: responseUserData.data.id
            })
        }
    }, [responseUserData])

    useEffect(() => {
        if (responseTakeTestData) {
            const takeTests = responseTakeTestData.takeTests
            setTableData(ExportDataUserTakeTest(cloneDeep(takeTests)))
        }
    }, [responseTakeTestData])

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

            if (data.success) {
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
            else {
                if (data.message.indexOf('Duplicate') !== -1) {
                    toast.error('💢 Username đã được dùng, vui lòng chọn username khác!')
                }
            }
        }
    }

    const handleChangePassword = async (action, data) => {
        if (action === MODAL_ACTION.CONFIRM) {
            const res = await changePassword(user.id, data.password, data.newPassword)
            if (res.success) {
                toast.success('🌟 Bạn đã đổi mật khẩu thành công!')
                setIsShowModalChangePassword(false)
            }
            else {
                toast.error('💢 Vui lòng kiểm tra lại mật khẩu!')
            }
        }
        else {
            setIsShowModalChangePassword(false)
        }
    }

    const registerCreator = async () => {
        const _user = {
            ...user,
            _id: user.id,
            _status: STATUS.UPGRADE_PENDING
        }

        const data = await updateUserInfo(_user)
        setUserData({
            ...userData,
            _status: data.user._status
        })
        toast.success('🎉 Update thành công!')
    }

    return (
        <div className="settings-account">
            {(loadingUserData || loadingTakeTestData) &&
                <div
                    className='sweet-loading d-flex justify-content-center align-items-center'
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 100
                    }}>
                    <HashLoader color={'#7ED321'} loading={loadingUserData} />
                </div>
            }

            {!loadingUserData && !loadingTakeTestData &&
                <>
                    <div>
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

                                    <div className="m-2">
                                        {user && user.type === ACCOUNT_TYPES.PRO && (
                                            <Badge pill bg="warning" className="m-2 px-2">
                                                <i className="fa fa-star me-1"></i>
                                                Pro
                                            </Badge>
                                        )}

                                        {user && user.type !== ACCOUNT_TYPES.PRO && (
                                            <Payments />
                                        )}
                                    </div>

                                    <div>
                                        <Button size="sm" variant="primary" className="m-1"
                                            onClick={() => setIsShowModalChangePassword(true)}>
                                            Đổi mật khẩu
                                        </Button>
                                        <Button size="sm" variant="success" className="m-1"
                                            onClick={() => setIsShow(true)}>
                                            Cập nhật
                                        </Button>
                                    </div>

                                    {user.role === ROLE.USER && (
                                        <div className="w-100 my-3">
                                            <h6 className="text-success fw-bolder">Đăng ký tài khoản Creator</h6>
                                            <Button variant="danger"
                                                onClick={registerCreator}>
                                                Đăng ký
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </Col>

                            <Col className="detail-info-section ps-4 pe-4 text-start" lg={9} md={12} xs={12}>
                                <div className="section-header m-3 h4 d-flex justify-content-center">
                                    <i className="fa fa-map-signs me-3"></i>
                                    Thông tin cá nhân
                                </div>

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

                                <div className="section-header m-3 h4 d-flex justify-content-center">
                                    <i className="fa fa-book me-3"></i>
                                    Các cuộc thi đã tham gia
                                </div>

                                <div className="p-3">
                                    <MDBDataTableV5
                                        hover striped bordered
                                        entriesOptions={[10, 25, 50, 100]}
                                        entries={10}
                                        pagesAmount={4}
                                        data={tableData}
                                        materialSearch scrollX
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <ModalUpdateUserInfo
                        user={userData}
                        isShow={isShow}
                        onAction={handleAction}
                    />

                    <ChangePassword
                        isShow={isShowModalChangePassword}
                        onAction={handleChangePassword}
                    />

                    {user && user.type !== ROLE.USER && (
                        <MessengerCustomerChat
                            pageId="110971274789083"
                            appId="332254335175096"
                            htmlRef="fb-customer-chat"
                        />
                    )}
                </>
            }
        </div>
    )
}