import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { displayTimeDelta, splitTime } from 'utils/timeUtils'

export default function ModalTestInfo({ isShow, onAction, test }) {
    const start = splitTime(test.startTime)
    const end = splitTime(test.endTime)

    return (
        <Modal
            size="lg"
            show={isShow}
            onHide={onAction}
            backdrop='static'
            keyboard={false}>

            <Modal.Header closeButton>
                <Modal.Title className="h5 fw-bolder">Thông tin chi tiết</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="test-info">
                    <div className="body-left">
                        <div className="test-title-section">
                            <div className="label">Tên</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title text-center"
                                value={test.name}
                                readOnly
                            />
                        </div>

                        <div className="test-title-section mt-2">
                            <div className="label">Điểm tối đa</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title text-center"
                                value={test.maxPoints}
                                readOnly
                            />
                        </div>

                        <div className="test-title-section mt-2">
                            <div className="label">Thời gian</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title text-center"
                                value={displayTimeDelta(test.startTime, test.endTime)}
                                readOnly
                            />
                        </div>

                        <div className="test-description-section mt-2">
                            <div className="label">Mô tả</div>
                            <Form.Control
                                size="sm"
                                as="textarea"
                                className="test-description"
                                value={test.description}
                                readOnly
                            />
                        </div>

                        <div className="datetime-picker row mt-2">
                            <div className="start-time col">
                                <div className="label">Thời gian bắt đầu</div>
                                <div className="datetime row">
                                    <Form.Control
                                        className="col text-center"
                                        size="sm"
                                        type="text"
                                        value={start.date}
                                        readOnly
                                    />
                                    <Form.Control
                                        className="col text-center"
                                        size="sm"
                                        type="text"
                                        value={start.time}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="end-time col">
                                <div className="label">Thời gian kết thúc</div>
                                <div className="datetime row">
                                    <Form.Control
                                        className="col text-center"
                                        size="sm"
                                        type="text"
                                        value={end.date}
                                        readOnly
                                    />
                                    <Form.Control
                                        className="col text-center"
                                        size="sm"
                                        type="text"
                                        value={end.time}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"
                    onClick={onAction}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    )
}