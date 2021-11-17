import React, { useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Countdown from 'react-countdown'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import Select from 'components/common/select/Select'
import './PanelSettings.scss'

function PanelSettings({ test, setTest, selectedQuestion, setSelectedQuestion, isCreator }) {
    const questionTypes = {
        name: 'type',
        options: [
            {
                value: '1',
                label: 'Type 1',
                selected: true
            },
            {
                value: '2',
                label: 'Type 2',
                selected: false
            },
            {
                value: '3',
                label: 'Type 3',
                selected: false
            }
        ]
    }

    const timeLimits = {
        name: 'time-limit',
        options: [
            {
                value: '10',
                label: '10 giây',
                selected: true
            },
            {
                value: '15',
                label: '15 giây',
                selected: false
            },
            {
                value: '30',
                label: '30 giây',
                selected: false
            },
            {
                value: '60',
                label: '60 giây',
                selected: false
            },
            {
                value: '90',
                label: '90 giây',
                selected: false
            },
            {
                value: '120',
                label: '120 giây',
                selected: false
            }
        ]
    }

    const points = {
        name: 'points',
        options: [
            {
                value: '10',
                label: '10',
                selected: true
            },
            {
                value: '20',
                label: '20',
                selected: false
            },
            {
                value: '30',
                label: '30',
                selected: false
            }
        ]
    }

    const musics = {
        name: 'music',
        options: [
            {
                value: 'Music 1',
                label: 'Music 1',
                selected: true
            },
            {
                value: 'Music 2',
                label: 'Music 2',
                selected: false
            },
            {
                value: 'Music 3',
                label: 'Music 3',
                selected: false
            }
        ]
    }

    const answerOptions = {
        name: 'music',
        options: [
            {
                value: 'Option 1',
                label: 'Option 1',
                selected: true
            },
            {
                value: 'Option 2',
                label: 'Option 2',
                selected: false
            },
            {
                value: 'Option 3',
                label: 'Option 3',
                selected: false
            }
        ]
    }

    const inputTestTitleRef = useRef('')
    const startDateRef = useRef('')
    const startTimeRef = useRef('')
    const endDateRef = useRef('')
    const endTimeRef = useRef('')

    const handleSaveClick = () => {
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
                console.log('Saved...', newTest)
                alert('Đã lưu')
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
                                />
                                <Form.Control
                                    size="sm"
                                    type="time"
                                    ref={startTimeRef}
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
                                />
                                <Form.Control
                                    size="sm"
                                    type="time"
                                    ref={endTimeRef}
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
                        <Button variant="danger">Thoát</Button>{' '}
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