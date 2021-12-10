import React, { useState, useEffect } from 'react'
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
            console.log('response', testResponse)
            const t = testResponse.data
            setTest(t)
            console.log('test', t)

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
                    _status: STATUS.OK,
                    questionsOrder: t.questionsOrder,
                    chooseAnswers: chooseAnswers,
                    test: t.id
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
        const newTakeTest = { ...takeTest }
        const choose = {
            question: question._id,
            answers: [...chooseAnswer]
        }

        if (newTakeTest.chooseAnswers.length > 0) {
            const index = newTakeTest.chooseAnswers.findIndex(e => e.question === question._id)
            if (index !== -1) {
                newTakeTest.chooseAnswers[index] = choose
            }
            else newTakeTest.chooseAnswers.push(choose)
        }
        else newTakeTest.chooseAnswers = [choose]

        const data = await updateTakeTest(newTakeTest)

        setTakeTest({
            ...data.takeTest,
            _id: data.takeTest.id
        })
    }

    return (
        <div className="app-container">
            {isSubmitted &&
                <Navigate to={`/takeTest/${takeTest.id}`} />
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
                <>
                    {!isUser ?
                        (
                            <PanelPreview
                                test={test}
                                setTest={setTest}
                                questions={questions}
                                setQuestions={setQuestions}
                                selectedQuestion={selectedQuestion}
                                setSelectedQuestion={setSelectedQuestion}
                            />
                        ) : (
                            <PanelQuestionPicker
                                test={test}
                                selectedQuestion={selectedQuestion}
                                setSelectedQuestion={setSelectedQuestion}
                                takeTest={takeTest}
                                setIsSubmitted={setIsSubmitted}
                            />
                        )
                    }

                    <Question
                        question={selectedQuestion}
                        setQuestion={updateSelectedQuestion}
                        isCreator={!isUser}
                        takeTest={takeTest}
                        updateTakeTest={updateTakeTestInfo}
                    />

                    <PanelSettings
                        test={test}
                        setTest={setTest}
                        isCreator={!isUser}
                        setSelectedQuestion={updateSelectedQuestion}
                    />
                </>
            }
        </div>
    )
}

export default MultiChoices