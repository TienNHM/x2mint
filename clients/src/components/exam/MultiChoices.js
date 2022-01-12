import React, { useState, useEffect, useRef } from 'react'
import { mapOrder } from 'utils/sorts'
import './MultiChoices.scss'
import { Navigate, useParams } from 'react-router-dom'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, MAX_EXIT_FULLSCREEN, ROLE, STATUS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import PanelQuestionPicker from './panelQuestionPicker/PanelQuestionPicker'
import { createTakeTest, updateTakeTest } from 'actions/api/TakeTestAPI'
import { Button, FormControl, Image } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useEventListener } from 'utils/EventListener'
import { submit } from 'actions/api/TakeTestAPI'
import { cloneDeep } from 'lodash'
import PanelPreview from './panelPreview/PanelPreview'
import PanelSettings from './panelSettings/PanelSettings'
import Question from './question/Question'
import { onSelectStart } from 'utils/DisableSelectEventListener'

export default function MultiChoices() {
    let { testId } = useParams()
    const {
        response: testResponse,
        loading: testIsLoading
    } = useAxios({
        method: 'GET',
        url: `/tests/${testId}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const user = useSelector((state) => state.auth.user)
    const isUser = user.role === ROLE.USER

    const pinRef = useRef('')

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isEntered, setIsEntered] = useState(false)
    const [test, setTest] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [takeTest, setTakeTest] = useState(null)

    const [countExitFullscreen, setCountExitFullscreen] = useState(0)
    const [isFullScreen, setIsFullScreen] = useState(true)

    const handler = async () => {
        if (!isEntered) {
            return
        }

        if (window.innerWidth !== screen.width ||
            window.innerHeight !== screen.height
        ) {
            if (countExitFullscreen < MAX_EXIT_FULLSCREEN) {
                toast.error('💢 Vui lòng mở toàn màn hình để tiếp tục làm bài!')
                setCountExitFullscreen(countExitFullscreen + 1)
                setIsFullScreen(false)

                await updateTakeTest(
                    cloneDeep(takeTest),
                    '⚠ Thoát toàn màn hình.'
                )
            }
            else {
                toast.error('💢 Bài thi vi phạm quy chế thi!')
                await submit(takeTest._id)
                setIsSubmitted(true)
            }
        }
        else {
            setIsFullScreen(true)
        }
    }

    useEventListener('resize', handler)

    useEffect(() => {
        async function callCreateTakeTest(_takeTest) {
            const data = await createTakeTest(_takeTest)

            setTakeTest({
                ..._takeTest,
                _id: data.takeTestId
            })
        }

        if (testResponse) {
            const t = testResponse.data
            setTest(t)

            const q = mapOrder(t.questions, t.questionsOrder, 'id')
            setQuestions(q)
            setSelectedQuestion(selectedQuestion ? selectedQuestion : q[0])

            if (isUser) {
                const chooseAnswers = q.map(quiz => {
                    return {
                        question: quiz._id,
                        answers: []
                    }
                })

                const newTakeTest = {
                    _status: STATUS.NOT_SUBMITTED,
                    questionsOrder: t.questionsOrder,
                    chooseAnswers: chooseAnswers,
                    test: t.id,
                    user: user.id
                }

                callCreateTakeTest(newTakeTest)
            }
        }
    }, [testResponse])

    useEffect(() => {
        const newTest = { ...test }
        newTest.questions = questions
        setTest(newTest)
    }, [questions])

    useEffect(() => {
        //console.log('test', test)
    }, [test])

    const updateSelectedQuestion = (question) => {
        // TODO kiểm tra lại
        setSelectedQuestion(question)

        // Update lại question trong list questions
        let newQuestions = [...questions]
        const index = newQuestions.findIndex(q => q._id === selectedQuestion._id)
        newQuestions[index] = question
        setQuestions(newQuestions)
    }

    const updateTakeTestInfo = async (question, chooseAnswer) => {
        //Nếu ko phải creator thì update lại takeTest
        const newTakeTest = {
            ...takeTest
        }
        const choose = {
            question: question._id,
            answers: [...chooseAnswer]
        }

        let index = 0
        if (newTakeTest.chooseAnswers.length > 0) {
            index = newTakeTest.chooseAnswers.findIndex(e => e.question === question._id)
            if (index !== -1) {
                newTakeTest.chooseAnswers[index] = choose
            }
            else newTakeTest.chooseAnswers.push(choose)
        }
        else newTakeTest.chooseAnswers = [choose]

        const data = await updateTakeTest(
            newTakeTest,
            `Chọn đáp án ${chooseAnswer.join(', ')} cho câu hỏi số ${index + 1}.`
        )

        setTakeTest({
            ...data.takeTest,
            _id: data.takeTest.id
        })
    }

    const enterTest = () => {
        if (pinRef.current.value === test.pin) {
            toast.success('🎉 Nhập mã PIN thành công, chúc bạn thi tốt')
            setIsEntered(true)
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen()
            }
        }
        else {
            toast.error('❌ Sai mã PIN, vui lòng nhập lại!')
            pinRef.current.value = ''
            pinRef.current.focus()
        }
    }

    if (isEntered || !isUser) {
        if (isFullScreen) {
            return (
                <div className="app-container" ref={isUser && onSelectStart}>
                    {isSubmitted &&
                        <Navigate to={`/takeTest/${takeTest._id}`} />
                    }

                    {testIsLoading &&
                        <div
                            className='sweet-loading d-flex justify-content-center align-items-center'
                            style={
                                {
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                }
                            }
                        >
                            <HashLoader color={'#7ED321'} loading={testIsLoading} />
                        </div>
                    }

                    {!testIsLoading &&
                        <div className="row">
                            {!isUser ?
                                (
                                    <div className="col-lg-2 col-12">
                                        <PanelPreview
                                            test={test}
                                            setTest={setTest}
                                            questions={questions}
                                            setQuestions={setQuestions}
                                            selectedQuestion={selectedQuestion}
                                            setSelectedQuestion={setSelectedQuestion}
                                        />
                                    </div>
                                ) : (
                                    <div className="col-lg-2 col-12">
                                        <PanelQuestionPicker
                                            test={test}
                                            selectedQuestion={selectedQuestion}
                                            setSelectedQuestion={setSelectedQuestion}
                                            takeTest={takeTest}
                                            setIsSubmitted={setIsSubmitted}
                                        />
                                    </div>
                                )
                            }

                            <div className="col-lg-8 col-12">
                                <Question
                                    question={selectedQuestion}
                                    setQuestion={updateSelectedQuestion}
                                    isCreator={!isUser}
                                    takeTest={takeTest}
                                    updateTakeTest={updateTakeTestInfo}
                                />
                            </div>

                            <div className="col-lg-2 col-12" id="panel-settings">
                                <PanelSettings
                                    test={test}
                                    setTest={setTest}
                                />
                            </div>
                        </div>
                    }
                </div>
            )
        }
        else {
            return (
                <div className="d-flex flex-column justify-content-center align-items-center"
                    style={{ height: '100vh' }}>
                    <h1 className="fw-bolder text-danger">
                        Vui lòng bấm F11 mở toàn màn hình để tiếp tục làm bài thi!
                    </h1>
                    <Button variant="success"
                        onClick={() => document.documentElement.requestFullscreen()}>
                        Làm bài
                    </Button>
                </div>
            )
        }
    }
    else {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div style={{ paddingTop: '10vh' }}>
                    <Image src={process.env.PUBLIC_URL + '/assets/images/enter-otp.svg'}
                        style={{ height: '60vh' }}></Image>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="fw-bolder text-success text-uppercase">
                            Nhập mã PIN
                        </div>

                        <FormControl
                            aria-label="PIN"
                            className="fw-bolder text-center m-1"
                            ref={pinRef}
                        />

                        <Button variant="success"
                            className="m-1"
                            onClick={() => enterTest()}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}