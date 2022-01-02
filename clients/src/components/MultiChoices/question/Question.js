import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Image from 'react-bootstrap/Image'
import Answer from 'components/multiChoices/answer/Answer'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { SyncLoader } from 'react-spinners'
import { createAnswer } from 'actions/api/AnswerAPI'
import { updateQuestion } from 'actions/api/QuestionAPI'
import { MAX, MODAL_ACTION, ROLE } from 'utils/constants'
import './Question.scss'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { toast } from 'react-toastify'

function Question({ question, setQuestion, takeTest, updateTakeTest }) {
    console.log('question', question)
    // Lấy thông tin user
    const user = useSelector((state) => state.auth.user)
    const isUser = user.role === ROLE.USER

    const answerIndex = ['A', 'B', 'C', 'D']

    const [embededMedia, setEmbedMedia] = useState('')
    const [content, setContent] = useState('')
    const [rows, setRows] = useState(1)
    const [chooseAnswers, setChooseAnswers] = useState([])
    const [questionLength, setQuestionLength] = useState(MAX.QUESTION_LENGTH)

    const [isShowLibrary, setIsShowLibrary] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    useEffect(() => {
        if (question) {
            setContent(question.content)
            setEmbedMedia(question.embededMedia)
            setQuestionLength(question.content ?
                MAX.QUESTION_LENGTH - question.content.length :
                MAX.QUESTION_LENGTH
            )
            setChooseAnswers(isUser ? [] : question.correctAnswers)
        }
    }, [question, isUser])

    const RenderEmptyQuestion = () => {
        return (
            <div className="d-flex align-items-center justify-content-center h-100 flex-column">
                {isUser &&
                    <div className='sweet-loading'>
                        <SyncLoader color={'#7ED321'} loading={true} speedMultiplier={2} />
                    </div>
                }

                {!isUser &&
                    <>
                        <h1 className="fw-bolder">Chưa có câu hỏi nào!</h1>
                        <Image src={process.env.PUBLIC_URL + '/assets/images/no-records.svg'}
                            style={{ height: '50vh' }} />
                        <h4 className="fw-bold text-warning">Vui lòng tạo thêm ít nhất 1 câu hỏi cho bài thi!</h4>
                    </>
                }
            </div>
        )
    }

    const renderAddAnswer = () => {
        return (
            <div className="empty-answer d-flex align-items-center justify-content-center">
                <div className="decor d-flex align-items-center justify-content-center">
                    <Button variant="success" size="lg" className="w-100 h-100"
                        style={{ borderRadius: '10px' }}
                        onClick={() => handleOnAddAnswer()}>
                        Thêm đáp án
                    </Button>
                </div>
            </div>
        )
    }

    let indexQuestion = -1
    if (isUser && !takeTest) {
        return (
            <div className="panel-center">
                {RenderEmptyQuestion()}
            </div>
        )
    }
    else if (isUser && takeTest) {
        indexQuestion = takeTest.chooseAnswers.findIndex(c => c.question === question._id)
    }

    //#region Handle

    const handleTextChange = (event) => {
        const value = event.target.value.replace(/\n/g, ' ')
        if (value.length <= MAX.QUESTION_LENGTH) {
            setContent(value)
            setQuestionLength(MAX.QUESTION_LENGTH - value.length)

            const r = Math.round(value.length / (MAX.QUESTION_LENGTH / 2 + 1) + 1)
            setRows(r)

            const newQuestion = { ...question }
            newQuestion.content = event.target.value
            setQuestion(newQuestion, !isUser)
        }
    }

    const handleTextBlur = async () => {
        console.log(question)
        const data = await updateQuestion(question)
        console.log(data)
    }

    const handleOnAnswerClick = async (answerName, checkStatus) => {
        // update correctAnswers of question when choose answer
        const newValue = [...chooseAnswers]
        const index = newValue.indexOf(answerName)
        let choose = []

        //#region Update lại chooseAnswers
        // Nếu trong mảng chooseAnswer hiện tại không có giá trị answerName
        if (index < 0) {
            // Nhưng checkStatus = true, nghĩa là đang thêm answerName vào chooseAnswer
            if (checkStatus) {
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

        if (!isUser) {
            const newQuestion = {
                ...question,
                answers: question.answers.map(a => a._id),
                correctAnswers: choose
            }


            const data = await updateQuestion(newQuestion)
            console.log(data)
            setQuestion({
                ...data.question,
                _id: data.question.id
            })
        }
        else {
            updateTakeTest(question, choose)
        }
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

    const onActionBrowseLibrary = async (type, photo) => {
        if (photo && type === MODAL_ACTION.CONFIRM) {
            setEmbedMedia(photo)

            const q = { ...question }
            q.embededMedia = photo
            setQuestion(q, !isUser)
            await updateQuestion(q)
        }

        setIsShowLibrary(false)
    }

    const onActionConfirmModal = async (action) => {
        if (action === MODAL_ACTION.CONFIRM) {
            setEmbedMedia('')
            const q = { ...question }
            q.embededMedia = ''
            setQuestion(q, !isUser)
            await updateQuestion(q)
            toast.success('🌟 Đã xóa thành công!')
        }
        else {
            toast.warning('💢 Đã hủy xóa hình ảnh!')
        }
        setIsShowConfirmModal(false)
    }

    const updateAnswer = (answer) => {
        const newQuestion = { ...question }
        console.log('123', newQuestion)
        const index = newQuestion.answers.findIndex(a => a.id === answer.id)
        newQuestion.answers[index] = answer
        setQuestion(newQuestion, !isUser)
    }

    return (
        <div className="panel-center col">
            {(!question || !question.answers) &&
                <>{RenderEmptyQuestion()}</>
            }

            {question && question.answers &&
                <>
                    <div className="row">
                        {isUser && (
                            <div className="question-user">
                                {content}
                            </div>
                        )}

                        {!isUser && (
                            <div className="question">
                                <div className="question-content align-items-center">
                                    <Form.Control
                                        size="sm" as="textarea"
                                        rows={rows}
                                        placeholder="Nhập nội dung câu hỏi..."
                                        className="textarea-enter"
                                        value={content}
                                        onChange={handleTextChange}
                                        onBlur={handleTextBlur}
                                        disabled={isUser}
                                    />
                                </div>
                                <div className="lenght-limit">{questionLength}</div>
                            </div>
                        )}
                    </div>

                    <div className="embeded row">
                        <div className="col-1 d-flex align-items-end justify-content-start">
                            {!isUser &&
                                <Button variant="warning"
                                    className="fw-bolder text-light"
                                    onClick={() => setIsShowLibrary(true)}
                                >
                                    <i className="fa fa-edit"></i>
                                </Button>
                            }
                        </div>

                        <div className="question-embed mt-2 col-10 d-flex align-items-end justify-content-center">
                            {embededMedia &&
                                <Image src={embededMedia} />
                            }

                            {!embededMedia &&
                                <Image src={process.env.PUBLIC_URL + '/assets/images/placeholder.png'}
                                    alt="Nothing" />
                            }
                        </div>

                        <div className="col-1 d-flex align-items-end justify-content-end">
                            {!isUser &&
                                <Button variant="danger"
                                    className="fw-bolder text-light"
                                    onClick={() => setIsShowConfirmModal(true)}
                                >
                                    <i className="fa fa-remove"></i>
                                </Button>
                            }
                        </div>
                    </div>

                    {question.answers.length > 0 ? (
                        <div className="row">
                            <div className="question-answers" style={{ marginTop: '10px' }} >
                                {question.answers.map((a, index) =>
                                    <Answer
                                        key={index}
                                        answer={a}
                                        setAnswer={updateAnswer}
                                        onClick={handleOnAnswerClick}
                                        disabled={isUser}
                                        isChosen={
                                            isUser ? takeTest.chooseAnswers[indexQuestion].answers.includes(a.name) :
                                                question.correctAnswers.includes(a.name)
                                        }
                                    />)
                                }

                                {!isUser && question.answers.length < 4 && renderAddAnswer()}
                            </div>
                        </div>
                    ) : (
                        <div className="add-question row">
                            {!isUser && renderAddAnswer()}
                        </div>
                    )
                    }

                    <ConfirmModal
                        content="Bạn có thật sự muốn xóa bỏ hình này không?"
                        isShow={isShowConfirmModal}
                        onAction={onActionConfirmModal}
                    />
                    <BrowseLibrary show={isShowLibrary} onAction={onActionBrowseLibrary} />
                </>
            }
        </div>
    )
}

export default Question