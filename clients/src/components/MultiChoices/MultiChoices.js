import React, { useState, useEffect, useRef } from 'react'
import { mapOrder } from 'utils/sorts'
import PanelPreview from 'components/MultiChoices/panelPreview/PanelPreview'
import Question from 'components/MultiChoices/question/Question'
import PanelSettings from 'components/MultiChoices/panelSettings/PanelSettings'
import './MultiChoices.scss'
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, ROLE, STATUS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import PanelQuestionPicker from './panelQuestionPicker/PanelQuestionPicker'
import { createTakeTest, updateTakeTest } from 'actions/api/TakeTestAPI'
import { Button, FormControl, Image } from 'react-bootstrap'
import { toast } from 'react-toastify'

function MultiChoices() {
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
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isEntered, setIsEntered] = useState(false)

    const pinRef = useRef('')

    const [test, setTest] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [takeTest, setTakeTest] = useState(null)

    useEffect(() => {
        async function callCreateTakeTest(_takeTest) {
            const data = await createTakeTest(_takeTest)
            console.log(data)

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

    const updateSelectedQuestion = (question) => {
        // TODO kiểm tra lại
        setSelectedQuestion(question)

        // Update lại question trong list questions
        let newQuestions = [...questions]
        // console.log('update selected question', newQuestions)
        const index = newQuestions.findIndex(q => q._id === selectedQuestion._id)
        newQuestions[index] = question
        setQuestions(newQuestions)

        console.log(newQuestions)
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
            `Chọn đáp án ${chooseAnswer.join(', ')} cho câu hỏi số ${index+1}.`
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
        }
        else {
            toast.error('❌ Sai mã PIN, vui lòng nhập lại!')
            pinRef.current.value = ''
            pinRef.current.focus()
        }
    }

    if (isEntered || !isUser) {
        return (
            <div className="app-container">
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
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div style={{ paddingTop: '10vh' }}>
                    <Image src={process.env.PUBLIC_URL + '/assets/enter-otp.svg'}
                        style={{ height: '60vh' }}></Image>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="fw-bolder text-success text-uppercase">
                            Nhập mã PIN
                        </div>

                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            ref={pinRef}
                        />

                        <Button variant="success" onClick={() => enterTest()}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MultiChoices