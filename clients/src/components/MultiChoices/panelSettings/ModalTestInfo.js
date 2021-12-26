import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { MODAL_ACTION } from 'utils/constants'
import { displayTimeDelta, splitTime } from 'utils/timeUtils'

export default function ModalTestInfo({ isShow, onAction, test, isUser }) {
    const start = splitTime(test.startTime)
    const end = splitTime(test.endTime)

    const [testName, setTestName] = useState(test.name)
    const [maxPoints, setMaxPoints] = useState(test.maxPoints)
    const [link, setLink] = useState(test.url)
    const [pin, setPin] = useState(test.pin ? test.pin : '')
    const [description, setDescription] = useState(test.description)
    const [startDate, setStartDate] = useState(start.date)
    const [startTime, setStartTime] = useState(start.time)
    const [endDate, setEndDate] = useState(end.date)
    const [endTime, setEndTime] = useState(end.time)

    const handleAction = (action) => {
        const newTest = {
            name: testName,
            maxPoints: maxPoints,
            url: link,
            pin: pin,
            description: description,
            startTime: startDate + 'T' + startTime + ':00.000Z',
            endTime: endDate + 'T' + endTime + ':00.000Z'
        }

        onAction(action, newTest)
    }

    return (
        <Modal
            size="lg"
            show={isShow}
            onHide={() => handleAction(MODAL_ACTION.CLOSE)}
            backdrop='static'
            keyboard={false}>

            <Modal.Header closeButton className="d-flex justify-content-center">
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
                                value={testName}
                                onChange={(e) => setTestName(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        <div className="test-title-section mt-2">
                            <div className="label">Điểm tối đa</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title text-center"
                                value={maxPoints}
                                onChange={(e) => setMaxPoints(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        <div className="test-title-section mt-2">
                            <div className="label">Link</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title text-center"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        <div className="test-title-section mt-2">
                            <div className="label">PIN</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title text-center"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        {isUser &&
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
                        }

                        <div className="test-description-section mt-2">
                            <div className="label">Mô tả</div>
                            <Form.Control
                                size="sm"
                                as="textarea"
                                row="5"
                                className="test-description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        <div className="datetime-picker row mt-2">
                            <div className="start-time col">
                                <div className="label">Thời gian bắt đầu</div>
                                <div className="datetime row" style={{ marginRight: '0px' }}>
                                    <Form.Control
                                        className="col-sm-6 col-12 text-center"
                                        size="sm"
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        readOnly={isUser}
                                    />
                                    <Form.Control
                                        className="col-sm-6 col-12 text-center"
                                        size="sm"
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        readOnly={isUser}
                                    />
                                </div>
                            </div>

                            <div className="end-time col">
                                <div className="label">Thời gian kết thúc</div>
                                <div className="datetime row" style={{ marginRight: '0px' }}>
                                    <Form.Control
                                        className="col-sm-6 col-12 text-center"
                                        size="sm"
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        readOnly={isUser}
                                    />
                                    <Form.Control
                                        className="col-sm-6 col-12 text-center"
                                        size="sm"
                                        type="time"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        readOnly={isUser}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary"
                    onClick={() => handleAction(MODAL_ACTION.CLOSE)}>
                    Đóng
                </Button>

                {!isUser &&
                    <Button variant="primary"
                        onClick={() => handleAction(MODAL_ACTION.CONFIRM)}>
                        Lưu
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    )
}