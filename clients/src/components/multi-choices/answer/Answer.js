import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { MAX_ANSWER_LENGTH } from 'utils/constants'
import './Answer.scss'

function Answer(props) {
    const { name, index, answerContents, setAnswerContents, onClick } = props
    const css = 'answer answer-' + name
    const [rows, setRows] = useState(1)
    const [answerLength, setAnswerLength] = useState(MAX_ANSWER_LENGTH)

    useEffect(() => {
        setAnswerLength(MAX_ANSWER_LENGTH - answerContents[index].length)
    }, [])

    const handleTextChange = (event) => {
        const value = event.target.value
        if (value.length <= MAX_ANSWER_LENGTH) {
            let newAnswerContents = [...answerContents]
            newAnswerContents[index] = event.target.value
            setAnswerContents(newAnswerContents)
            setAnswerLength(MAX_ANSWER_LENGTH - newAnswerContents[index].length)
            setRows(value.length/(MAX_ANSWER_LENGTH/2) + 1)
        }
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
                    value={answerContents[index]}
                    onChange={handleTextChange}
                />
            </div>
            <div className="answer-checkbox">
                <div className="lenght-limit">{answerLength}</div>
                <input type="checkbox" className="btn-checkbox" name={name} value={name}
                    onClick={onClick}>
                </input>
            </div>
        </div>
    )
}

export default Answer