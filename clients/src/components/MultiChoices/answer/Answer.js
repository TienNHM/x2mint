import { updateAnswer } from 'actions/api/AnswerAPI'
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { MAX } from 'utils/constants'
import './Answer.scss'

function Answer({ answer, setAnswer, onClick, disabled, isChosen }) {
    const css = answer ? 'answer answer-' + answer.name : 'answer'
    const [name, setName] = useState(answer.name)
    const [rows, setRows] = useState(1)
    const [content, setContent] = useState(answer.content)
    const [answerLength, setAnswerLength] = useState(MAX.ANSWER_LENGTH - answer.content.length)
    const [isChecked, setIsChecked] = useState(isChosen)

    useEffect(() => {
        if (answer) {
            const value = answer.content
            setContent(value)
            setAnswerLength(MAX.ANSWER_LENGTH - value.length)
            setName(answer.name)
            setIsChecked(isChosen)
        }
    }, [answer])

    const handleTextChange = async (event) => {
        const value = event.target.value.replace(/\n/g, ' ')
        if (value.length <= MAX.ANSWER_LENGTH) {
            setContent(value)
            setAnswerLength(MAX.ANSWER_LENGTH - value.length)
            setRows(value.length / (MAX.ANSWER_LENGTH / 2) + 1)
        }
    }

    const handleOnTextBlur = async () => {
        // Update lại
        let newAnswer = {
            ...answer,
            content: content
        }

        // Update lại trong CSDL
        const data = await updateAnswer(newAnswer)

        // Update lại answer hiện tại vào question
        setAnswer({
            ...data.answer,
            id: data.answer.id
        })
    }

    const handleOnClickAnswer = (event) => {
        const checkStatus = event.target.checked
        setIsChecked(checkStatus)
        onClick(answer.name, checkStatus)
    }
    return (
        <div className={css}>
            {answer &&
                <>
                    <div className="answer-icon">{name}</div>
                    <div className="answer-content">
                        <Form.Control
                            size="sm"
                            as="textarea"
                            rows={rows}
                            name={name}
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
                            name={name}
                            value={name}
                            checked={isChecked}
                            onChange={(event) => handleOnClickAnswer(event)}>
                        </input>
                    </div>
                </>
            }
        </div>
    )
}

export default Answer