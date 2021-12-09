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
import { updateQuestion } from 'actions/api/QuestionAPI'

function Question({ question, setQuestion, updateTakeTest }) {
    // Lấy thông tin user
    const user = useSelector((state) => state.auth.user)
    const isCreator = user.role === ROLE_CREATOR
    const answerIndex = ['A', 'B', 'C', 'D']

    const [embededMedia, setEmbedMedia] = useState('')
    const [content, setContent] = useState('')
    const [rows, setRows] = useState(1)
    const [chooseAnswers, setChooseAnswers] = useState([])
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
            setChooseAnswers(isCreator ? question.correctAnswers : [])
        }
    }, [question])

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
            setQuestion(newQuestion, isCreator)
        }
    }

    const handleTextBlur = async () => {
        console.log(question)
        const data = await updateQuestion(question)
        console.log(data)
    }

    const handleOnAnswerClick = async (answerName, checkStatus) => {
        // TODO update correctAnswers of question when choose answer
        const newValue = [...chooseAnswers]
        const index = newValue.indexOf(answerName)
        let choose = []

        //#region Update lại chooseAnswers
        // Nếu trong mảng chooseAnswer hiện tại không có giá trị answerName
        if (index < 0) {
            // Nhưng checkStatus = true, nghĩa là đang thêm answerName vào chooseAnswer
            if (checkStatus) {
                console.log(newValue)
                newValue.push(answerName)
                choose = newValue
            }
        }
        // Ngược lại, answerName đã có trong chooseAnswer
        else {
            // Nhưng nếu checkStatus = false, nghĩa là loại bỏ answerName ra khỏi chooseAnswer
            if (!checkStatus) {
                var arr = []
                newValue.map(x => x !== answerName && arr.push(x))
                choose = arr
            }
        }

        setChooseAnswers(choose)
        //#endregion

        if (isCreator) {
            console.log(question.answers)
            const newQuestion = {
                ...question,
                answers: question.answers.map(a => a.id),
                correctAnswers: choose,
                id: question._id
            }

            console.log('....', newQuestion)

            const data = await updateQuestion(newQuestion)
            console.log(data)
            setQuestion(data.question)
        }
        else {
            updateTakeTest(question, choose)

            //TODO update choose answer
        }
    }

    const handleOnRemoveClick = async () => {
        setEmbedMedia('')
        const q = { ...question }
        q.embededMedia = ''
        setQuestion(q, isCreator)
        const data = await updateQuestion(q)
        console.log(data)
    }

    const handleOnAddAnswer = async () => {
        const data = await createAnswer(
            {
                content: '',
                embededMedia: '',
                _status: '',
                name: answerIndex[question.answers.length]
            },
            question._id
        )

        const newQuestion = {
            ...data.question,
            _id: data.question.id
        }

        delete newQuestion.id // Mặc định mọi thứ đều dùng _id

        setQuestion(newQuestion)
    }

    //#endregion

    const onConfirmModalAction = async (type, photo) => {
        if (photo && type === MODAL_ACTION_CONFIRM) {
            setEmbedMedia(photo.src.large)

            const q = { ...question }
            q.embededMedia = photo.src.large
            setQuestion(q, isCreator)
            const data = await updateQuestion(q)
            console.log(data)
        }

        setIsShowLibrary(false)
    }

    const updateAnswer = (answer) => {
        const newQuestion = { ...question }
        console.log('123', newQuestion)
        const index = newQuestion.answers.findIndex(a => a.id === answer.id)
        newQuestion.answers[index] = answer
        setQuestion(newQuestion, isCreator)
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
                <div className="d-flex align-items-center justify-content-center h-100 flex-column">
                    <h1 className="fw-bolder">Chưa có câu hỏi nào!</h1>
                    <Image src={process.env.PUBLIC_URL + '/assets/no-records.svg'}
                        style={{ height: '50vh' }} />
                    <h4 className="fw-bold text-warning">Vui lòng tạo thêm ít nhất 1 câu hỏi cho bài thi!</h4>
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
                                onBlur={handleTextBlur}
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
                                    onClick={() => setIsShowLibrary(true)}
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
                                    answer={a}
                                    setAnswer={updateAnswer}
                                    onClick={handleOnAnswerClick}
                                    disabled={!isCreator}
                                    isChosen={question.correctAnswers.includes(a.name)}
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