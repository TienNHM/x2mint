import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Answer from 'components/multi-choices/answer/Answer'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { MAX_QUESTION_LENGTH, MODAL_ACTION_CONFIRM } from 'utils/constants'
import './Question.scss'

function Question({ question, updateQuestion, isCreator, updateTakeTest }) {
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
        setEmbedMedia(question.embededMedia)
        setQuestionLength(MAX_QUESTION_LENGTH - question.content.length)
        if (!isCreator) setChooseAnswer([])
    }, [question])

    useEffect(() => {
        if (isCreator) {
            const newQuestion = { ...question }
            newQuestion.correct_answers = chooseAnswer
            updateQuestion(newQuestion)
        }
        else {
            updateTakeTest(question, chooseAnswer)
        }
    }, [chooseAnswer])

    useEffect(() => {
        if (isUpdatedEmbedMedia) {
            console.log(embededMedia)
            const q = { ...question }
            q.embededMedia = embededMedia
            updateQuestion(q, isCreator)
            setIsUpdatedEmbedMedia(false)
        }
    }, [embededMedia])

    const handleTextChange = (event) => {
        const value = event.target.value.replace(/\n/g, ' ')
        if (value.length <= MAX_QUESTION_LENGTH) {
            setContent(value)
            setQuestionLength(MAX_QUESTION_LENGTH - value.length)
            setRows(value.length / (MAX_QUESTION_LENGTH / 2 + 1) + 1)
        }
    }

    const handleQuestionContentBlur = (event) => {
        const newQuestion = { ...question }
        newQuestion.content = event.target.value
        updateQuestion(newQuestion, isCreator)
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

    const onConfirmModalAction = (type, photo) => {
        if (photo && type === MODAL_ACTION_CONFIRM) {
            setEmbedMedia(photo.src.large)
        }

        toggleShowLibrary()
    }

    const updateAnswers = (answers) => {
        const newQuestion = { ...question }
        newQuestion.answers = answers
        updateQuestion(newQuestion, isCreator)
    }

    const toggleShowLibrary = () => {
        setIsUpdatedEmbedMedia(true)
        setIsShowLibrary(!isShowLibrary)
    }

    return (
        <div className="panel-center">
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
                        disabled={!isCreator}
                    />
                </div>
                <div className="lenght-limit">{questionLength}</div>
            </div>

            <div className="embeded row">
                <div className="col-1 d-flex align-items-end justify-content-start">
                    {isCreator &&
                        <Button variant="warning"
                            className="fw-bolder text-light"
                            onClick={toggleShowLibrary}
                        >
                            <i className="fa fa-edit"></i>
                        </Button>
                    }
                </div>

                <div className="question-embed col-10">
                    {embededMedia.length > 0 && <Image src={embededMedia} />}
                    {embededMedia.length <= 0 && <Image src="https://sites.udel.edu/machineshop/wp-content/themes/oria/images/placeholder.png" alt="Nothing" />}
                </div>

                <div className="col-1 d-flex align-items-end justify-content-end">
                    {isCreator &&
                        <Button variant="danger"
                            className="fw-bolder text-light"
                            onClick={handleOnRemoveClick}
                        >
                            <i className="fa fa-remove"></i>
                        </Button>
                    }
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
                        disabled={!isCreator}
                    />)
                }
            </div>
            <BrowseLibrary show={isShowLibrary} onAction={onConfirmModalAction} />
        </div>
    )
}

export default Question