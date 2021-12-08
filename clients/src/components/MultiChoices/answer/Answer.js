import { updateAnswer } from 'actions/api/AnswerAPI'
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { MAX_ANSWER_LENGTH } from 'utils/constants'
import './Answer.scss'

function Answer({ answer, setAnswer, onClick, disabled }) {
    const css = answer ? 'answer answer-' + answer.name : 'answer'
    const [rows, setRows] = useState(1)
    const [content, setContent] = useState('')
    const [answerLength, setAnswerLength] = useState(MAX_ANSWER_LENGTH)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (answer) {
            const value = answer.content
            setContent(value)
            setAnswerLength(MAX_ANSWER_LENGTH - value.length)
            setIsChecked(false)
        }
    }, [answer])

    const handleTextChange = (event) => {
        const value = event.target.value.replace(/\n/g, ' ')
        if (value.length <= MAX_ANSWER_LENGTH) {
            setContent(value)
            setAnswerLength(MAX_ANSWER_LENGTH - value.length)
            setRows(value.length / (MAX_ANSWER_LENGTH / 2) + 1)
        }
    }

    const handleOnTextBlur = async () => {
        const newAnswer = { ...answer }
        newAnswer.content = content
        // Update lại trong CSDL
        console.log(newAnswer)
        const data = await updateAnswer(newAnswer)
        console.log(data)
        // Update lại answer hiện tại vào question
        setAnswer(newAnswer)
    }

    return (
        <div className={css}>
            {answer &&
                <>
                    <div className="answer-icon">{answer.name}</div>
                    <div className="answer-content">
                        <Form.Control
                            size="sm"
                            as="textarea"
                            rows={rows}
                            placeholder="Nhập nội dung câu trả lời..."
                            className="textarea-enter"
                            value={content}
                            onChange={handleTextChange}
                            onBlur={handleOnTextBlur}
                            disabled={disabled}
                        />
                    </div>
                    <div className="answer-checkbox">
                        <div className="lenght-limit">{answerLength}</div>
                        <input
                            type="checkbox"
                            className="btn-checkbox"
                            name={answer.name}
                            value={answer.name}
                            onClick={() => setIsChecked(!isChecked)}
                            checked={isChecked}
                            onChange={(event) => onClick(event)}>
                        </input>
                    </div>
                </>
            }
        </div>
    )
}

export default Answer