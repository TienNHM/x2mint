import React, { useState, useEffect, useRef } from 'react'
import { mapOrder } from 'utils/sorts'
import './MultiChoices.scss'
import { Navigate, useParams } from 'react-router-dom'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, TAKE_TEST_LOGS, ROLE, STATUS, TEST_DATA } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import PanelQuestionPicker from './panelQuestionPicker/PanelQuestionPicker'
import { createTakeTest, getLastestTakeTestByTestAndUser, updateTakeTest } from 'actions/api/TakeTestAPI'
import { Button, FormControl, Image } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useEventListener } from 'utils/EventListener'
import { submit } from 'actions/api/TakeTestAPI'
import { cloneDeep } from 'lodash'
import PanelPreview from './panelPreview/PanelPreview'
import PanelSettings from './panelSettings/PanelSettings'
import Question from './question/Question'
import { onSelectStart } from 'utils/DisableSelectEventListener'
import FaceDetect, { initWebcam, stopWebcam } from 'utils/faceDetection'

export default function MultiChoices() {
    const faceapi = window.faceapi

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
    const isUser = user && user.role === ROLE.USER

    const pinRef = useRef('')

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isEntered, setIsEntered] = useState(false)
    const [test, setTest] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [takeTest, setTakeTest] = useState(null)

    const [countExitFullscreen, setCountExitFullscreen] = useState(0)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [fullscreenTracking, setFullscreenTracking] = useState(false)
    const [webcamTracking, setWebcamTracking] = useState(false)

    const videoRef = useRef(null)
    const [video, setVideo] = useState(null)

    useEffect(() => {
        if (isUser && isEntered && webcamTracking) {
            const handle = {
                setVideo,
                videoRef,
                setIsSubmitted
            }
            initWebcam(faceapi, handle)
            return () => {
                setVideo(null)
            }
        }
    }, [videoRef, isEntered])

    useEffect(() => {
        const faceDetection = async () => {
            const handle = {
                video,
                setVideo,
                videoRef,
                takeTest,
                submit,
                setIsSubmitted
            }
            await FaceDetect(faceapi, handle)
        }

        if (isUser && video && webcamTracking) {
            faceDetection()
        }
    }, [video, webcamTracking])

    const handler = async () => {
        if (!isEntered || !fullscreenTracking) {
            return
        }

        if (window.innerWidth !== screen.width ||
            window.innerHeight !== screen.height
        ) {
            if (countExitFullscreen < TAKE_TEST_LOGS.MAX_EXIT_FULLSCREEN) {
                if (webcamTracking) {
                    if (videoRef) stopWebcam(videoRef)
                    setVideo(null)
                }

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

                if (webcamTracking) {
                    stopWebcam(videoRef)
                    setVideo(null)
                }

                await submit(takeTest._id)
                setIsSubmitted(true)
            }
        }
        else {
            setIsFullScreen(true)
            const handle = {
                setVideo,
                videoRef,
                setIsSubmitted
            }
            initWebcam(faceapi, handle)
        }
    }

    useEventListener('resize', handler)

    useEffect(() => {
        async function callInitTakeTest(test, questions) {
            const response = await getLastestTakeTestByTestAndUser(test.id, user.id)
            const lastest = response.data[0]

            if (lastest && lastest._status === STATUS.NOT_SUBMITTED) {
                setTakeTest({
                    ...lastest,
                    _id: lastest.id
                })
            }
            else {
                const chooseAnswers = questions.map(quiz => {
                    return {
                        question: quiz._id,
                        answers: []
                    }
                })

                const newTakeTest = {
                    _status: STATUS.NOT_SUBMITTED,
                    questionsOrder: test.questionsOrder,
                    chooseAnswers: chooseAnswers,
                    test: test.id,
                    user: user.id
                }
                const data = await createTakeTest(newTakeTest)

                setTakeTest({
                    ...newTakeTest,
                    _id: data.takeTestId
                })
            }
        }

        if (testResponse) {
            const t = testResponse.data
            const q = mapOrder(t.questions, t.questionsOrder, 'id')
            setTest(t)
            setQuestions(q)
            setSelectedQuestion(selectedQuestion ? selectedQuestion : q[0])

            if (isUser) {
                const _fullscreenTracking = t.tracking && t.tracking.includes(TEST_DATA.TRACKING.FULLSCREEN)
                setFullscreenTracking(_fullscreenTracking)
                setIsFullScreen(_fullscreenTracking)
                const _webcamTracking = t.tracking && t.tracking.includes(TEST_DATA.TRACKING.WEBCAM)
                setWebcamTracking(_webcamTracking)
                callInitTakeTest(t, q)
            }
        }
    }, [testResponse])

    useEffect(() => {
        const newTest = { ...test }
        newTest.questions = questions
        setTest(newTest)
    }, [questions])

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
            if (fullscreenTracking && !document.fullscreenElement) {
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
        if ((isFullScreen && fullscreenTracking) || (!fullscreenTracking)) {
            return (
                <div className="app-container" ref={isUser ? onSelectStart : null}>
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
                            <div className="col-lg-10 col-12">
                                <Question
                                    question={selectedQuestion}
                                    setQuestion={updateSelectedQuestion}
                                    isCreator={!isUser}
                                    takeTest={takeTest}
                                    updateTakeTest={updateTakeTestInfo}
                                    selectedQuestion={selectedQuestion}
                                    setSelectedQuestion={setSelectedQuestion}
                                    updateTakeTestLogs={updateTakeTest}
                                />
                            </div>

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
                                            webcam={
                                                {
                                                    video,
                                                    setVideo,
                                                    videoRef
                                                }
                                            }
                                        />
                                    </div>
                                )
                            }

                            <div className="" id="panel-settings">
                                <PanelSettings
                                    test={test}
                                    setTest={setTest}
                                    videoRef={videoRef}
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
                <div style={{ paddingTop: '15vh' }}>
                    <Image src={process.env.PUBLIC_URL + '/assets/images/enter-otp.svg'}
                        style={{ width: '60vw', maxWidth: '500px' }} />
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