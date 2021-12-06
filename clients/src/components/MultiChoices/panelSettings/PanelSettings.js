import React, { useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAlert } from 'react-alert'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { splitTime } from 'utils/timeUtils'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE, ROLE_USER } from 'utils/constants'
import './PanelSettings.scss'
import { useSelector } from 'react-redux'

function PanelSettings(props) {
    const { test, setTest, setIsSaved } = props
    const user = useSelector((state) => state.auth.user)
    const isUser = user.role === ROLE_USER

    // Test title
    const inputTestTitleRef = useRef(null)
    const [testTitle, setTestTitle] = useState(test.name)

    // Mô tả
    const inputTestDescriptionRef = useRef(null)
    const [testDescription, setTestDescription] = useState(test.description)

    // Test URL
    const inputLinkRef = useRef(null)
    const [testLink, setTestLink] = useState(test.url)

    // Điểm tối đa
    const inputMaxPointsRef = useRef(null)
    const [testMaxPoints, setTestMaxPoints] = useState(test.maxPoints)

    // Duration
    const start_time = splitTime(test.startTime)
    const end_time = splitTime(test.endTime)
    const [startDate, setStartDate] = useState(start_time.date)
    const [startTime, setStartTime] = useState(start_time.time)
    const [endDate, setEndDate] = useState(end_time.date)
    const [endTime, setEndTime] = useState(end_time.time)
    const startDateRef = useRef(null)
    const startTimeRef = useRef(null)
    const endDateRef = useRef(null)
    const endTimeRef = useRef(null)

    // Confirm Modal
    const [isShowConfirm, setIsShowConfirm] = useState(false)
    const [content, setContent] = useState('')

    const alert = useAlert()
    const handleSaveClick = () => {
        const titleValue = inputTestTitleRef.current.value
        if (titleValue.trim() === '') {
            inputTestTitleRef.current.focus()
            alert.error('Vui lòng nhập tên cho bài test!')
        }
        else {
            const startTime = startDateRef.current.value + ' ' + startTimeRef.current.value
            const endTime = endDateRef.current.value + ' ' + endTimeRef.current.value
            if (Date.parse(endTime) > Date.parse(startTime)) {
                const newTest = {
                    ...test,
                    name: titleValue,
                    startTime: startTime,
                    endTime: endTime,
                    description: testDescription,
                    maxPoints: testMaxPoints,
                    url: testLink
                }
                setTest(newTest)
                setIsSaved(false)
                alert.success('Đã lưu lại những thay đổi của bạn!')
            }
            else {
                startDateRef.current.focus()
                alert.error('Thời gian không hợp lệ!')
            }
        }
    }

    const handleExit = () => {
        setContent('Bạn có muốn thoát không? Lưu ý, mọi thay đổi chưa được lưu sẽ bị mất đi mà không thể khôi phục!')
        setIsShowConfirm(true)
    }

    const handleConfirmModal = (action) => {
        if (action === MODAL_ACTION_CONFIRM) {
            setIsShowConfirm(false)
        }
        else if (action === MODAL_ACTION_CLOSE) {
            setIsShowConfirm(false)
        }
    }

    return (
        <div className="panel-right">
            <div className="panel-right-title">Thông tin chi tiết</div>

            <div className="attributes">
                <div className="test-title">
                    <div>Tên bài test</div>
                    <div className="title">
                        <Form.Control
                            size="sm"
                            type="text"
                            ref={inputTestTitleRef}
                            placeholder="Tên bài test..."
                            className="test-title-input"
                            value={testTitle}
                            onChange={e => setTestTitle(e.target.value)}
                            readOnly={isUser}
                        />
                    </div>
                </div>
                <div className="test-title">
                    <div>Mô tả</div>
                    <div className="title">
                        <Form.Control
                            size="sm"
                            as="textarea"
                            rows={4}
                            ref={inputTestDescriptionRef}
                            placeholder="Mô tả..."
                            className="test-title-input"
                            value={testDescription}
                            onChange={e => setTestDescription(e.target.value)}
                            readOnly={isUser}
                        />
                    </div>
                </div>
                <div className="test-title">
                    <div>Link</div>
                    <div className="title">
                        <Form.Control
                            size="sm"
                            type="text"
                            ref={inputLinkRef}
                            placeholder="Link URL..."
                            className="test-title-input"
                            value={testLink}
                            onChange={e => setTestLink(e.target.value)}
                            readOnly={isUser}
                        />
                    </div>
                </div>
                <div className="test-title">
                    <div>Điểm tối đa</div>
                    <div className="title">
                        <Form.Control
                            size="sm"
                            type="text"
                            ref={inputMaxPointsRef}
                            placeholder="0"
                            className="test-title-input"
                            value={testMaxPoints}
                            onChange={e => setTestMaxPoints(e.target.value)}
                            readOnly={isUser}
                        />
                    </div>
                </div>
                <div className="start-time-picker">
                    <div>Thời gian bắt đầu</div>
                    <div className="start-time">
                        <Form.Control
                            size="sm"
                            type="date"
                            ref={startDateRef}
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                            readOnly={isUser}
                        />
                        <Form.Control
                            size="sm"
                            type="time"
                            ref={startTimeRef}
                            value={startTime}
                            onChange={e => setStartTime(e.target.value)}
                            readOnly={isUser}
                        />
                    </div>
                </div>
                <div className="start-time-picker">
                    <div>Thời gian kết thúc</div>
                    <div className="start-time">
                        <Form.Control
                            size="sm"
                            type="date"
                            ref={endDateRef}
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                            readOnly={isUser}
                        />
                        <Form.Control
                            size="sm"
                            type="time"
                            ref={endTimeRef}
                            value={endTime}
                            onChange={e => setEndTime(e.target.value)}
                            readOnly={isUser}
                        />
                    </div>
                </div>
            </div>

            <div className="quick-actions justify-content-center">
                {!isUser &&
                    <Button variant="warning" onClick={handleSaveClick}>Lưu</Button>
                }
                <Button variant="danger" onClick={handleExit}>Thoát</Button>
            </div>

            <div className="confirm-submit">
                <ConfirmModal
                    title="Xác nhận"
                    content={content}
                    isShow={isShowConfirm}
                    onAction={handleConfirmModal}
                />
            </div>
        </div>
    )
}

export default PanelSettings