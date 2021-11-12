import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Answer from 'components/multi-choices/answer/Answer'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { MAX_QUESTION_LENGTH, MODAL_ACTION_CONFIRM } from 'utils/constants'
import './Question.scss'

function Question({ question, updateQuestion }) {
    const answers = question.answers
    const [embededMedia, setEmbedMedia] = useState('')
    const [isUpdatedEmbedMedia, setIsUpdatedEmbedMedia] = useState(false)
    const [content, setContent] = useState('')
    const [rows, setRows] = useState(1)
    const [chooseAnswer, setChooseAnswer] = useState([])
    const [questionLength, setQuestionLength] = useState(MAX_QUESTION_LENGTH)
    const [isShowLibrary, setIsShowLibrary] = useState(false)

    useEffect(() => {
        setContent(question.content)
        setEmbedMedia(question.embeded_media)
        setQuestionLength(MAX_QUESTION_LENGTH - question.content.length)
    }, [question])

    useEffect(() => {
        console.log('Choose: ', chooseAnswer)

    }, [chooseAnswer])

    useEffect(() => {
        if (isUpdatedEmbedMedia) {
            console.log(embededMedia)
            const q = { ...question }
            q.embeded_media = embededMedia
            updateQuestion(q)
            setIsUpdatedEmbedMedia(false)
        }
    }, [embededMedia])

    useEffect(() => {
        if (isShowLibrary) {
            console.log('Show library...')
        }
    }, [isShowLibrary])

    const handleTextChange = (event) => {
        const value = event.target.value
        if (value.length <= MAX_QUESTION_LENGTH) {
            setContent(value)
            setQuestionLength(MAX_QUESTION_LENGTH - value.length)
            setRows(value.length / (MAX_QUESTION_LENGTH / 2 + 1) + 1)
        }
    }

    const handleQuestionContentBlur = (event) => {
        const newQuestion = { ...question }
        newQuestion.content = event.target.value
        updateQuestion(newQuestion)
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

    const handleOnRemoveClick = () => {
        setEmbedMedia('')
        setIsUpdatedEmbedMedia(true)
    }
    const onConfirmModalAction = (type) => {
        if (type === MODAL_ACTION_CONFIRM) {
            console.log('OK')
        }

        toggleShowLibrary()
    }

    const updateAnswers = (answers) => {
        const newQuestion = { ...question }
        newQuestion.answers = answers
        updateQuestion(newQuestion)
    }

    const toggleShowLibrary = () => setIsShowLibrary(!isShowLibrary)

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
                        onBlur={handleQuestionContentBlur}
                    />
                </div>
                <div className="lenght-limit">{questionLength}</div>
            </div>
            <div className="question-embed">
                {embededMedia.length > 0 && <img src={embededMedia}></img>}
                {embededMedia.length <= 0 && <img src="https://memegenerator.net/img/instances/74856541/it-appears-that-there-is-nothing-here.jpg" alt="Nothing"></img>}
            </div>
            <div className="question-embed-edit">
                <div className="question-embed-change">
                    <Button variant="warning" onClick={toggleShowLibrary}>Change</Button>{' '}
                </div>
                <div className="question-embed-remove">
                    <Button variant="danger" onClick={handleOnRemoveClick}>Remove</Button>{' '}
                </div>
            </div>
            <div className="question-answers">
                {answers.map((a, index) =>
                    <Answer
                        key={index}
                        name={a.name}
                        index={index}
                        answers={answers}
                        updateAnswers={updateAnswers}
                        onClick={handleOnAnswerClick}
                    />)
                }
            </div>
            <BrowseLibrary show={isShowLibrary} onAction={onConfirmModalAction} />
        </>
    )
}

export default Question