import React, { useRef } from 'react'
import { Form } from 'react-bootstrap'
import Select from 'components/common/select/Select'
import './PanelRight.scss'

function PanelRight({test, setTest }) {
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

    return (
        <div className="panel-right">
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
                            // value={content}
                            // onChange={handleTextChange}
                            // onBlur={handleQuestionContentBlur}
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
                            // value={content}
                            // onChange={handleTextChange}
                            // onBlur={handleQuestionContentBlur}
                        />
                        <Form.Control
                            size="sm"
                            type="time"
                            ref={startTimeRef}
                            // value={content}
                            // onChange={handleTextChange}
                            // onBlur={handleQuestionContentBlur}
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
                            // value={content}
                            // onChange={handleTextChange}
                            // onBlur={handleQuestionContentBlur}
                        />
                        <Form.Control
                            size="sm"
                            type="time"
                            ref={endTimeRef}
                            // value={content}
                            // onChange={handleTextChange}
                            // onBlur={handleQuestionContentBlur}
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
                </div> */}
            </div>
            <div className="quick-actions">
                <button className="save" onClick={handleSaveClick}>Save</button>
                <button className="exit">Exit</button>
            </div>
        </div>
    )
}

export default PanelRight