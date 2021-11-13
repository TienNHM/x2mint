import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import Countdown from 'react-countdown'
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

    const timeRemainRef = useRef('12:00')

    const Completionist = () => <h6 className="time-countdown">Hết giờ</h6>

    const renderer = ({ hours, minutes, seconds, completed }) => {
        const m = ('' + minutes).length < 2 ? ('0' + minutes) : ('' + minutes)
        const s = ('' + seconds).length < 2 ? ('0' + seconds) : ('' + seconds)
        if (completed) {
            // Render a completed state
            handleOnSubmitClick()
            return <Completionist />
        } else {
            // Render a countdown
            return <span className="time-countdown">
                {hours} : {m} : {s}
            </span>
        }
    }

    const handleOnSubmitClick = () => {
        console.log('SUBMITTED: ', test)
        // alert('SUBMITTED')
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
                        <button className="save" onClick={handleSaveClick}>Save</button>
                        <button className="exit">Exit</button>
                    </div>
                </>
            }

            {!isCreator &&
                <>
                    <div className="question-picker">
                        <div className="section-title">Danh sách câu hỏi</div>
                        <div className="btn-question">
                            {test.questions.map((q, index) =>
                                <Button key={index} variant="light"
                                    onClick={() => setSelectedQuestion({ ...q })}
                                >
                                    {index + 1}
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="time-remain">
                        <div className="section-title">Thời gian còn lại</div>
                        <div className="time-remain-show">
                            <Countdown date={Date.now() + 5000} renderer={renderer}>
                                <Completionist />
                            </Countdown>
                        </div>
                    </div>
                    <div className="submit-test">
                        <Button variant="primary" onClick={handleOnSubmitClick}>Nộp bài</Button>{' '}
                    </div>
                </>
            }
        </div>
    )
}

export default PanelSettings