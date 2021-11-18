import React, { useEffect, useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Countdown from 'react-countdown'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import Select from 'components/common/select/Select'
import './PanelSettings.scss'

function PanelSettings(props) {
    const { test, setTest, setSelectedQuestion, isCreator, setIsShowTest, setIsSaved } = props

    const start_time = test.start_time.split(' ')
    const end_time = test.end_time.split(' ')

    const inputTestTitleRef = useRef(null)
    const startDateRef = useRef(null)
    const startTimeRef = useRef(null)
    const endDateRef = useRef(null)
    const endTimeRef = useRef(null)

    const [testTitle, setTestTitle] = useState(test.title)
    const [startDate, setStartDate] = useState(start_time.length > 0 ? start_time[0] : '')
    const [startTime, setStartTime] = useState(start_time.length > 0 ? start_time[1] : '')
    const [endDate, setEndDate] = useState(end_time.length > 0 ? end_time[0] : '')
    const [endTime, setEndTime] = useState(end_time.length > 0 ? end_time[1] : ' ')

    const handleSaveClick = () => {
        console.log('xzxzxzxzxzxz', test)
        const titleValue = inputTestTitleRef.current.value
        if (titleValue.trim() === '') {
            inputTestTitleRef.current.focus()
            alert('Vui lòng nhập tên cho bài test!')
        }
        else {
            const startTime = startDateRef.current.value + ' ' + startTimeRef.current.value
            const endTime = endDateRef.current.value + ' ' + endTimeRef.current.value
            if (Date.parse(endTime) > Date.parse(startTime)) {
                const newTest = {
                    ...test,
                    title: titleValue,
                    start_time: startTime,
                    end_time: endTime
                }
                setTest(newTest)
                setIsSaved(false)
                console.log('Saved...', newTest)
            }
            else {
                startDateRef.current.focus()
                alert('Thời gian không hợp lệ! Vui lòng nhập lại')
            }
        }
    }

    const timeRemainRef = useRef(null)

    const Completionist = () => <h6 className="time-countdown">Hết giờ</h6>

    const renderer = ({ hours, minutes, seconds, completed }) => {
        const m = ('' + minutes).length < 2 ? ('0' + minutes) : ('' + minutes)
        const s = ('' + seconds).length < 2 ? ('0' + seconds) : ('' + seconds)
        if (completed) {
            // Render a completed state
            handleOnSubmitClick()
            console.log('Completed state: ', completed)
            return <Completionist />
        } else {
            // Render a countdown
            return <span className="time-countdown">
                {hours} : {m} : {s}
            </span>
        }
    }

    const [isShow, setIsShow] = useState(false)

    const handleOnSubmitClick = () => {
        setIsShow(true)
    }

    const btnSubmitRef = useRef(null)

    const handleConfirmSubmit = (action) => {
        if (action === MODAL_ACTION_CONFIRM) {
            btnSubmitRef.current.disabled = true
            timeRemainRef.current.stop()
            setIsShow(false)
            alert('SUBMITTED')
        }
        else if (action === MODAL_ACTION_CLOSE) {
            timeRemainRef.current.start()
            setIsShow(false)
        }
    }

    return (
        <div className="panel-right">
            {isCreator &&
                <>
                    <div className="panel-right-title">Cài đặt</div>
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
                                />
                                <Form.Control
                                    size="sm"
                                    type="time"
                                    ref={startTimeRef}
                                    value={startTime}
                                    onChange={e => setStartTime(e.target.value)}
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
                                />
                                <Form.Control
                                    size="sm"
                                    type="time"
                                    ref={endTimeRef}
                                    value={endTime}
                                    onChange={e => setEndTime(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* <div className="question-type">
                                <div>Question type:</div>
                                <Select data={questionTypes} />
                            </div>
                            <div className="question-time-limit">
                                <div>Time limit:</div>
                                <Select data={timeLimits} />
                            </div>
                            <div className="question-points">
                                <div>Points:</div>
                                <Select data={points} />
                            </div>
                            <div className="question-music">
                                <div>Music:</div>
                                <Select data={musics} />
                            </div>
                            <div className="question-answer-option">
                                <div>Answer Option:</div>
                                <Select data={answerOptions} />
                            </div> */
                        }
                    </div>
                    <div className="quick-actions">
                        <Button variant="warning" onClick={handleSaveClick}>Lưu</Button>{' '}
                        <Button variant="danger" onClick={() => setIsShowTest(false)}>Thoát</Button>{' '}
                    </div>
                </>
            }

            {!isCreator &&
                <>
                    <div className="question-picker">
                        <div className="section-title">Danh sách câu hỏi</div>
                        <div className="btn-question">
                            {test.questions.map((q, index) =>
                                <Button key={index} variant={q.choose_answers.legth > 0 ? 'primary' : 'light'}
                                    onClick={() => setSelectedQuestion({ ...q }, isCreator)}
                                >
                                    {index + 1}
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="examinee-actions">
                        <div className="time-remain">
                            <div className="section-title">Thời gian còn lại</div>
                            <div className="time-remain-show">
                                <Countdown date={Date.parse(test.end_time)} renderer={renderer} ref={timeRemainRef}>
                                    <Completionist />
                                </Countdown>
                            </div>
                        </div>
                        <div className="submit-test">
                            <Button
                                variant="primary"
                                onClick={handleOnSubmitClick}
                                ref={btnSubmitRef}
                            >
                                Nộp bài
                            </Button>{' '}
                        </div>
                    </div>
                    <div className="confirm-submit">
                        <ConfirmModal
                            title="Xác nhận"
                            content="Bạn có muốn xác nhận việc nộp bài?<br /><strong>Lưu ý, sau khi xác nhận, bạn không thể chỉnh sửa câu trả lời.</strong>"
                            isShow={isShow}
                            onAction={handleConfirmSubmit}
                        />
                    </div>
                </>
            }
        </div>
    )
}

export default PanelSettings