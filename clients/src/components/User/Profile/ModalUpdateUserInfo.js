import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import React, { useState } from 'react'
import { Button, Modal, Image, Form, Row, Col } from 'react-bootstrap'
import { MODAL_ACTION } from 'utils/constants'

export default function ModalUpdateUserInfo(props) {
    const { user, isShow, onAction } = props

    const [isShowLibrary, setIsShowLibrary] = useState(false)
    const [data, setData] = useState({
        full_name: user.full_name,
        avatar: user.avatar,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        school: user.school,
        address: user.address
    })

    const handleAction = (action) => {
        const newUser = {
            ...user,
            full_name: data.full_name,
            avatar: data.avatar,
            email: data.email,
            phone: data.phone,
            dob: data.dob,
            school: data.school,
            address: data.address
        }
        onAction(action, newUser)
    }

    const onActionChangeAvatar = (action, link) => {
        if (action === MODAL_ACTION.CONFIRM) {
            setData({
                ...data,
                avatar: link
            })
        }
        setIsShowLibrary(false)
    }

    const handleFullNameChange = (event) => {
        setData({
            ...data,
            full_name: event.target.value
        })
    }

    const handleEmailChange = (event) => {
        setData({
            ...data,
            email: event.target.value
        })
    }

    const handlePhoneChange = (event) => {
        setData({
            ...data,
            phone: event.target.value
        })
    }

    const handleDobChange = (event) => {
        setData({
            ...data,
            dob: event.target.value
        })
    }

    const handleSchoolChange = (event) => {
        setData({
            ...data,
            school: event.target.value
        })
    }

    const handleAddressChange = (event) => {
        setData({
            ...data,
            address: event.target.value
        })
    }

    return (
        <Modal
            className="update-user-info"
            show={isShow}
            onHide={() => handleAction(MODAL_ACTION.CLOSE)}
            size="lg"
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật thông tin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="avt d-flex flex-column align-items-center justify-content-center">
                    <Image roundedCircle
                        id="avatar"
                        height="150px" width="150px"
                        src={data.avatar} alt="avatar" />
                    <Button roundedCircle size="sm"
                        className="m-2"
                        id="change-avatar" onClick={() => setIsShowLibrary(true)}>
                        Đổi ảnh
                    </Button>
                    <BrowseLibrary show={isShowLibrary} onAction={onActionChangeAvatar} />
                </div>
                <div className="user-information m-3">
                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control size="sm" type="email"
                                value={data.full_name}
                                onChange={(event) => handleFullNameChange(event)}
                            />
                        </Form.Group>
                    </Row>

                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control size="sm" type="email"
                                value={data.email}
                                onChange={(event) => handleEmailChange(event)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="password">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control size="sm" type="text"
                                value={data.phone}
                                onChange={(event) => handlePhoneChange(event)}
                            />
                        </Form.Group>
                    </Row>

                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="dob">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control size="sm" type="text"
                                value={data.dob}
                                onChange={(event) => handleDobChange(event)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="school">
                            <Form.Label>Trường</Form.Label>
                            <Form.Control size="sm" type="text"
                                value={data.school}
                                onChange={(event) => handleSchoolChange(event)}

                            />
                        </Form.Group>
                    </Row>

                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control size="sm" type="text"
                                value={data.address}
                                onChange={(event) => handleAddressChange(event)} />
                        </Form.Group>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleAction(MODAL_ACTION.CLOSE)}>
                    Hủy
                </Button>
                <Button variant="primary" onClick={() => handleAction(MODAL_ACTION.CONFIRM)}>
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    )
}