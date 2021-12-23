import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { MODAL_ACTION } from 'utils/constants'
import { toast } from 'react-toastify'

export default function ChangePassword({ isShow, onAction }) {
    const [data, setData] = useState({
        password: '',
        newPassword: '',
        reEnterNewPassword: ''
    })

    const [passwordHelper, setPasswordHelper] = useState('Mật khẩu mới phải khớp nhau!')

    const handlePasswordChange = (event) => {
        setData({
            ...data,
            password: event.target.value
        })
    }

    const handleNewPasswordChange = (event) => {
        setData({
            ...data,
            newPassword: event.target.value
        })
        if (data.reEnterNewPassword === event.target.value) {
            if (event.target.value.length < 6) {
                setPasswordHelper('Độ dài mật khẩu tối thiểu là 6 kí tự.')
            }
            else setPasswordHelper('')
        }
        else {
            setPasswordHelper('Mật khẩu mới phải khớp nhau!')
        }
    }

    const handleReEnterNewPasswordChange = (event) => {
        setData({
            ...data,
            reEnterNewPassword: event.target.value
        })
        if (data.newPassword === event.target.value) {
            if (event.target.value.length < 6) {
                setPasswordHelper('Độ dài mật khẩu tối thiểu là 6 kí tự.')
            }
            else setPasswordHelper('')
        }
        else {
            setPasswordHelper('Mật khẩu mới phải khớp nhau!')
        }
    }

    const handleSubmit = (action) => {
        if (data.newPassword === data.reEnterNewPassword) {
            if (data.newPassword.length < 6) {
                toast.error('💢 Mật khẩu dài tối thiểu 6 kí tự!')
                return
            }
            else {
                onAction(action, data)
            }
        }
        else {
            toast.error('💢 Vui lòng nhập lại mật khẩu mới!')
            return
        }
    }

    return (
        <Modal
            show={isShow}
            centered
            onHide={() => handleSubmit(MODAL_ACTION.CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Đổi mật khẩu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="m-3">
                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="password">
                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                            <Form.Control size="sm" type="password"
                                value={data.password}
                                onChange={(event) => handlePasswordChange(event)}
                            />
                        </Form.Group>
                    </Row>

                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="newPassword">
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <Form.Control size="sm" type="password"
                                value={data.newPassword}
                                onChange={(event) => handleNewPasswordChange(event)}
                            />
                        </Form.Group>
                    </Row>

                    <Row sm={12}>
                        <Form.Group as={Col} className="mb-3" controlId="reEnterNewPassword">
                            <Form.Label>Nhập lại mật khẩu</Form.Label>
                            <Form.Control size="sm" type="password"
                                value={data.reEnterNewPassword}
                                onChange={(event) => handleReEnterNewPasswordChange(event)}
                                aria-describedby="passwordHelpBlock"
                            />
                        </Form.Group>
                    </Row>

                    <div className="mt-2 text-danger">
                        {passwordHelper}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleSubmit(MODAL_ACTION.CLOSE)}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => handleSubmit(MODAL_ACTION.CONFIRM)}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    )
}