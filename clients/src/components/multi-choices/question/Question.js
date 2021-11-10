import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Answer from 'components/multi-choices/answer/Answer'
import { MAX_QUESTION_LENGTH } from 'utils/constants'
import './Question.scss'

function Question({ question }) {
    const embededMedia = question.embeded_media
    const [content, setContent] = useState(question.content)
    const [rows, setRows] = useState(1)
    const [answerContents, setAnswerContents] = useState(['', '', '', ''])
    const [chooseAnswer, setChooseAnswer] = useState([])
    const [questionLength, setQuestionLength] = useState(MAX_QUESTION_LENGTH)
    const answers = question.answers

    useEffect(() => {
        setContent(question.content)
        console.log(question)
        const ans = question.answers.map(a => a.content)
        setAnswerContents(ans)
        setQuestionLength(MAX_QUESTION_LENGTH - question.content.length)
    }, [question])

    const handleTextChange = (event) => {
        const value = event.target.value
        if (value.length <= MAX_QUESTION_LENGTH) {
            setContent(value)
            setQuestionLength(MAX_QUESTION_LENGTH - value.length)
            setRows(value.length / (MAX_QUESTION_LENGTH / 2 + 1) + 1)
        }
    }

    const handleOnAnswerClick = (event) => {
        const value = event.target.value
        const newValue = [...chooseAnswer]
        const index = newValue.indexOf(value)

        if (index < 0) {
            newValue.push(value)
            setChooseAnswer(newValue)
        }
        else {
            var arr = []
            newValue.map(x => x !== value && arr.push(x))
            setChooseAnswer(arr)
        }
    }

    useEffect(() => {
        setContent(content)
    }, [content])

    useEffect(() => {
        console.log('Choose: ', chooseAnswer)

    }, [chooseAnswer])

    useEffect(() => {
        console.log('Content: ', content)
    }, [content])

    useEffect(() => {
        console.log(answerContents)
    }, [answerContents])

    return (
        <>
            <div className="question">
                <div className="question-content  align-items-center">
                    <Form.Control
                        size="sm"
                        as="textarea"
                        rows={rows}
                        placeholder="Nhập nội dung câu hỏi..."
                        className="textarea-enter"
                        value={content}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="lenght-limit">{questionLength}</div>
            </div>
            <div className="question-embed">
                {embededMedia.length > 0 && <img src={embededMedia[0]}></img>}
                {embededMedia.length <= 0 && <img src="https://memegenerator.net/img/instances/74856541/it-appears-that-there-is-nothing-here.jpg" alt="Nothing"></img>}
            </div>
            <div className="question-embed-edit">
                <div className="question-embed-change">
                    <Button variant="warning">Change</Button>{' '}
                </div>
                <div className="question-embed-remove">
                    <Button variant="danger">Remove</Button>{' '}
                </div>
            </div>
            <div className="question-answers">
                {answers.map((a, index) =>
                    <Answer
                        key={a.id}
                        name={a.name}
                        index={index}
                        answerContents={answerContents}
                        setAnswerContents={setAnswerContents}
                        onClick={handleOnAnswerClick}
                    />)
                }
            </div>
        </>
    )
}

export default Question