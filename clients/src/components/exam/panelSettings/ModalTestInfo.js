import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal, Form, Image, FormControl, Row, Col, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPES, MODAL_ACTION, TEST_DATA } from 'utils/constants'
import { displayTimeDelta, splitTime } from 'utils/timeUtils'

export default function ModalTestInfo({ isShow, onAction, test, isUser }) {
    const user = useSelector((state) => state.auth.user)
    const start = splitTime(test.startTime)
    const end = splitTime(test.endTime)
    const testUrl = process.env.REACT_APP_WEBSITE + test.url

    const [testName, setTestName] = useState(test.name)
    const [maxPoints, setMaxPoints] = useState(test.maxPoints)
    const [testNumberOfTimes, setTestNumberOfTimes] = useState(test.maxTimes !== null ? test.maxTimes : 1)
    const [link, setLink] = useState(testUrl)
    const [pin, setPin] = useState(test.pin ? test.pin : '')
    const [description, setDescription] = useState(test.description)
    const [startDate, setStartDate] = useState(start.date)
    const [startTime, setStartTime] = useState(start.time)
    const [endDate, setEndDate] = useState(end.date)
    const [endTime, setEndTime] = useState(end.time)

    const _fullscreenTracking = test.tracking && test.tracking.includes(TEST_DATA.TRACKING.FULLSCREEN)
    const _webcamTracking = test.tracking && test.tracking.includes(TEST_DATA.TRACKING.WEBCAM)
    const [fullscreenTracking, setFullscreenTracking] = useState(_fullscreenTracking)
    const [webcamTracking, setWebcamTracking] = useState(_webcamTracking)

    const handleAction = (action) => {
        const tracking = []
        if (fullscreenTracking) tracking.push(TEST_DATA.TRACKING.FULLSCREEN)
        if (webcamTracking) tracking.push(TEST_DATA.TRACKING.WEBCAM)

        const newTest = {
            name: testName,
            maxPoints: maxPoints,
            maxTimes: testNumberOfTimes,
            url: link,
            pin: pin,
            description: description,
            startTime: startDate + 'T' + startTime + ':00.000Z',
            endTime: endDate + 'T' + endTime + ':00.000Z',
            tracking: tracking
        }

        onAction(action, newTest)
    }

    const onFullscreenTrackingSwitchAction = () => {
        setFullscreenTracking(!fullscreenTracking)
    }

    const onWebcamTrackingSwitchAction = () => {
        setWebcamTracking(!webcamTracking)
    }

    return (
        <Modal
            size="lg"
            show={isShow}
            fullscreen={true}
            onHide={() => handleAction(MODAL_ACTION.CLOSE)}
            backdrop='static'
            keyboard={false}>

            <Modal.Header closeButton className="d-flex justify-content-center">
                <Modal.Title className="h5 fw-bolder">{testName || 'Tạo mới bài kiểm tra'}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <div className="test-title-section">
                            <div className="label fw-bold">Tên</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title"
                                value={testName}
                                onChange={(e) => setTestName(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        {isUser &&
                            <div className="test-title-section mt-2">
                                <div className="label fw-bold">Link</div>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    className="test-title"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    readOnly={true}
                                />
                            </div>
                        }

                        <div className="test-title-section mt-2">
                            <div className="label fw-bold">Điểm tối đa</div>
                            <Form.Control
                                size="sm"
                                type="text"
                                className="test-title"
                                value={maxPoints}
                                onChange={(e) => setMaxPoints(e.target.value)}
                                readOnly={isUser}
                            />
                        </div>

                        {!isUser && <>
                            <div className="test-title-section mt-2">
                                <div className="label fw-bold">
                                    Số lượt làm bài
                                    <span className="mx-1 fw-lighter fst-italic">
                                        <abbr title="Đặt giá trị 0 nếu không giới hạn">
                                            (chi tiết)
                                        </abbr>
                                    </span>
                                </div>
                                <div className="title">
                                    <Form.Group as={Row}>
                                        <Col xs="8" lg="10">
                                            <Form.Range
                                                min={0} max={50}
                                                value={testNumberOfTimes}
                                                onChange={e => setTestNumberOfTimes(e.target.value)}
                                                readOnly={isUser}
                                            />
                                        </Col>
                                        <Col xs="4" lg="2">
                                            <Form.Control
                                                size="sm"
                                                type="number"
                                                min="0"
                                                className="attribute-title-input text-center"
                                                value={testNumberOfTimes}
                                                onChange={e => setTestNumberOfTimes(e.target.value)}
                                                readOnly={isUser}
                                            />
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </>}
                    </div>

                    <div className="col-sm-6 col-xs-12">
                        {!isUser &&
                            <div className="test-title-section">
                                <div className="label fw-bold">PIN</div>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    className="test-title"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    readOnly={isUser}
                                />
                            </div>
                        }

                        {isUser &&
                            <div className="test-title-section">
                                <div className="label fw-bold">Thời gian</div>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    className="test-title"
                                    value={displayTimeDelta(test.startTime, test.endTime)}
                                    readOnly
                                />
                            </div>
                        }

                        <div className="test-title-section mt-2">
                            <div className="label fw-bold">Thời gian bắt đầu</div>
                            <div className="datetime row ps-2" style={{ marginRight: '0px' }}>
                                <Form.Control
                                    className="col text-center"
                                    size="sm"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    readOnly={isUser}
                                />
                                <Form.Control
                                    className="col text-center"
                                    size="sm"
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    readOnly={isUser}
                                />
                            </div>
                        </div>

                        <div className="test-title-section mt-2">
                            <div className="label fw-bold">Thời gian kết thúc</div>
                            <div className="datetime row ps-2" style={{ marginRight: '0px' }}>
                                <Form.Control
                                    className="col text-center"
                                    size="sm"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    readOnly={isUser}
                                />
                                <Form.Control
                                    className="col text-center"
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

                <div className="test-description-section mt-2">
                    <div className="test-title-section mt-2">
                        <div className="label fw-bold">
                            Giám sát thí sinh
                            <Badge pill bg="warning" className="m-2 px-2">
                                <i className="fa fa-star me-1"></i>
                                Pro
                            </Badge>
                            <span className="mx-1 fw-lighter fst-italic">
                                <abbr title="Thiết đặt tùy chọn giám sát thí sinh khi làm bài">
                                    (chi tiết)
                                </abbr>
                            </span>
                        </div>
                        <div className="title">
                            <Form.Check
                                inline
                                type="switch"
                                label="Toàn màn hình"
                                disabled={isUser || (!isUser && user.type !== ACCOUNT_TYPES.PRO)}
                                checked={fullscreenTracking}
                                onChange={onFullscreenTrackingSwitchAction}
                            />
                            <Form.Check
                                inline
                                type="switch"
                                label="Webcam"
                                disabled={isUser || (!isUser && user.type !== ACCOUNT_TYPES.PRO)}
                                checked={webcamTracking}
                                onChange={onWebcamTrackingSwitchAction}
                            />
                        </div>
                    </div>
                </div>

                <div className="test-description-section mt-2">
                    <div className="label fw-bold">Mô tả</div>
                    <Form.Control
                        size="sm"
                        as="textarea"
                        rows="12"
                        className="test-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        readOnly={isUser}
                    />
                </div>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary"
                    onClick={() => handleAction(MODAL_ACTION.CLOSE)}>
                    Đóng
                </Button>

                {!isUser && <>
                    <Button variant="primary"
                        onClick={() => handleAction(MODAL_ACTION.CONFIRM)}>
                        Lưu
                    </Button>
                </>}
            </Modal.Footer>
        </Modal>
    )
}