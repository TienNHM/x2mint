import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Image from 'react-bootstrap/Image'
import Answer from 'components/MultiChoices/answer/Answer'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import {
    MAX_QUESTION_LENGTH,
    MODAL_ACTION_CONFIRM,
    ROLE_CREATOR
} from 'utils/constants'
import './Question.scss'
import { createAnswer } from 'actions/api/AnswerAPI'
import { blankAnswer } from 'actions/initialData'

function Question({ question, updateQuestion, updateTakeTest }) {
    // Lấy thông tin user
    const user = useSelector((state) => state.auth.user)
    const isCreator = user.role === ROLE_CREATOR
    const answerIndex = ['A', 'B', 'C', 'D']

    const [embededMedia, setEmbedMedia] = useState('')
    const [isUpdatedEmbedMedia, setIsUpdatedEmbedMedia] = useState(false)
    const [content, setContent] = useState('')
    const [rows, setRows] = useState(1)
    const [chooseAnswer, setChooseAnswer] = useState([])
    const [questionLength, setQuestionLength] = useState(MAX_QUESTION_LENGTH)
    const [isShowLibrary, setIsShowLibrary] = useState(false)

    useEffect(() => {
        if (question) {
            setContent(question.content)
            setEmbedMedia(question.embededMedia)
            setQuestionLength(question.content ?
                MAX_QUESTION_LENGTH - question.content.length :
                MAX_QUESTION_LENGTH
            )
            if (!isCreator) setChooseAnswer([])
        }
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
            const q = { ...question }
            q.embededMedia = embededMedia
            updateQuestion(q, isCreator)
            setIsUpdatedEmbedMedia(false)
        }
    }, [embededMedia])

    //#region Handle

    const handleTextChange = (event) => {
        const value = event.target.value.replace(/\n/g, ' ')
        if (value.length <= MAX_QUESTION_LENGTH) {
            setContent(value)
            setQuestionLength(MAX_QUESTION_LENGTH - value.length)

            const r = Math.round(value.length / (MAX_QUESTION_LENGTH / 2 + 1) + 1)
            setRows(r)

            const newQuestion = { ...question }
            newQuestion.content = event.target.value
            updateQuestion(newQuestion, isCreator)
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

    const handleOnRemoveClick = () => {
        setEmbedMedia('')
        setIsUpdatedEmbedMedia(true)
    }

    const handleOnAddAnswer = async () => {
        const data = await createAnswer(
            {
                ...blankAnswer,
                name: answerIndex[question.answers.length]
            },
            question._id
        )
        console.log(data)

        const newQuestion = { ...question }
        newQuestion.answers.push(data.answer)
        updateQuestion(newQuestion)
    }

    //#endregion

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

    const renderAddAnswer = () => {
        return (
            <div className="empty-answer d-flex align-items-center justify-content-center">
                <div className="decor d-flex align-items-center justify-content-center">
                    <Button variant="primary" size="lg"
                        onClick={() => handleOnAddAnswer()}>
                        Thêm đáp án
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="panel-center">
            {(!question || !question.answers) &&
                <div className="d-flex align-items-center justify-content-center h-100">
                    Chưa có câu hỏi nào! Vui lòng tạo thêm ít nhất 1 câu hỏi cho bài thi!
                </div>
            }

            {question && question.answers &&
                <>
                    <div className="question">
                        <div className="question-content  align-items-center">
                            <Form.Control
                                size="sm" as="textarea"
                                rows={rows}
                                placeholder="Nhập nội dung câu hỏi..."
                                className="textarea-enter"
                                value={content}
                                onChange={handleTextChange}
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

                        <div className="question-embed col-10 d-flex align-items-end justify-content-center">
                            {embededMedia &&
                                <Image src={embededMedia} />
                            }

                            {!embededMedia &&
                                <Image src={process.env.PUBLIC_URL + '/assets/placeholder.png'}
                                    alt="Nothing" />
                            }
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

                    {question.answers.length > 0 ? (
                        <div className="question-answers">
                            {question.answers.map((a, index) =>
                                <Answer
                                    key={index}
                                    name={a.name}
                                    index={index}
                                    answers={question.answers}
                                    updateAnswers={updateAnswers}
                                    onClick={handleOnAnswerClick}
                                    disabled={!isCreator}
                                />)
                            }

                            {question.answers.length < 4 && renderAddAnswer()}
                        </div>
                    ) : (
                        <>{renderAddAnswer()}</>
                    )
                    }

                    <BrowseLibrary show={isShowLibrary} onAction={onConfirmModalAction} />
                </>
            }
        </div>
    )
}

export default Question