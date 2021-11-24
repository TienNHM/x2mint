import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { MAX_ANSWER_LENGTH } from 'utils/constants'
import './Answer.scss'

function Answer({ name, index, answers, updateAnswers, onClick, disabled }) {
    const css = 'answer answer-' + name
    const [rows, setRows] = useState(1)
    const [content, setContent] = useState('')
    const [answerLength, setAnswerLength] = useState(MAX_ANSWER_LENGTH)

    useEffect(() => {
        const value = answers[index].content
        setContent(value)
        setAnswerLength(MAX_ANSWER_LENGTH - value.length)
    }, [answers, index])

    const handleTextChange = (event) => {
        const value = event.target.value.replace(/\n/g, ' ')
        if (value.length <= MAX_ANSWER_LENGTH) {
            setContent(value)
            setAnswerLength(MAX_ANSWER_LENGTH - value.length)
            setRows(value.length / (MAX_ANSWER_LENGTH / 2) + 1)
        }
    }

    const handleTextBlur = (event) => {
        const newAnswers = [...answers]
        newAnswers[index].content = event.target.value
        updateAnswers(newAnswers)
    }

    return (
        <div className={css}>
            <div className="answer-icon">{name}</div>
            <div className="answer-content">
                <Form.Control
                    size="sm"
                    as="textarea"
                    rows={rows}
                    placeholder="Nhập nội dung câu trả lời..."
                    className="textarea-enter"
                    value={content}
                    onChange={handleTextChange}
                    onBlur={handleTextBlur}
                    disabled={disabled}
                />
            </div>
            <div className="answer-checkbox">
                <div className="lenght-limit">{answerLength}</div>
                <input
                    type="checkbox"
                    className="btn-checkbox"
                    name={name}
                    value={name}
                    onClick={onClick}>
                    {/* //TODO: handle choose answer */}
                </input>
            </div>
        </div>
    )
}

export default Answer