import React, { useState, useEffect } from 'react'
import { mapOrder } from 'utils/sorts'
import PanelPreview from 'components/MultiChoices/panelPreview/PanelPreview'
import Question from 'components/MultiChoices/question/Question'
import PanelSettings from 'components/MultiChoices/panelSettings/PanelSettings'
import { blankTest, emptyTakeTest } from 'actions/initialData'
import './MultiChoices.scss'
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, ROLE_CREATOR } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import PanelQuestionPicker from './panelQuestionPicker/PanelQuestionPicker'

function MultiChoices() {
    let { testId } = useParams()
    const {
        response: testResponse,
        loading: testIsLoading,
        error: testIsError
    } = useAxios({
        method: 'GET',
        url: `/tests/${testId}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    const user = useSelector((state) => state.auth.user)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [test, setTest] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [isSaved, setIsSaved] = useState(true)
    const [takeTest, setTakeTest] = useState(null)

    useEffect(() => {
        if (testResponse) {
            console.log('response', testResponse)
            const t = testResponse.data
            setTest(t)
            console.log('test', t)

            const q = mapOrder(t.questions, t.questionsOrder, 'id')
            setQuestions(q)
            setSelectedQuestion(selectedQuestion ? selectedQuestion : q[0])

            const chooseAnswers = q.map(quiz => {
                return {
                    question: quiz._id,
                    answers: []
                }
            })

            const newTakeTest = {
                ...emptyTakeTest,
                questionsOrder: t.questionsOrder,
                chooseAnswers: chooseAnswers,
                test: t.id,
                isCorrect: []
            }
            setTakeTest(newTakeTest)
        }
    }, [testResponse])

    //#region  Load data
    // useEffect(() => {
    //     const questionsFromDB = test.questions
    //     if (test) {
    //         setCurrentTest(test)

    //         // thứ tự tuân theo thuộc tính questionsOrder
    //         const q = mapOrder(questionsFromDB, test.questionsOrder, 'id')
    //         setQuestions(q)
    //         setSelectedQuestion(q[0])
    //     }
    //     else {
    //         const newTest = { ...emptyTest, id: 'test-1' }

    //         setCurrentTest(newTest)
    //         setQuestions(newTest.questions)
    //         setSelectedQuestion(selectedQuestion | newTest.questions[0])
    //     }
    //     setIsLoadedSelectedQuestion(true)
    // }, [test])

    // useEffect(() => {
    //     console.log('Current Test: ', test)
    //     if (!isSaved) {
    //         setIsSaved(true)
    //         updateTest({ ...test })
    //     }
    // }, [test])
    //#endregion

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

        console.log(newQuestions)
    }

    const updateTakeTest = (question, chooseAnswer) => {
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

        setTakeTest(newTakeTest)
    }

    return (
        <div className="app-container">
            {isSubmitted &&
                <Navigate to={`/submit/${takeTest.id}`} />
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
                    {user.role === ROLE_CREATOR ?
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
                        updateQuestion={updateSelectedQuestion}
                        isCreator={user.role === ROLE_CREATOR}
                        updateTakeTest={updateTakeTest}
                    />

                    <PanelSettings
                        test={test}
                        setTest={setTest}
                        isCreator={user.role === ROLE_CREATOR}
                        setSelectedQuestion={updateSelectedQuestion}
                        setIsSaved={setIsSaved}
                    />
                </>
            }
        </div>
    )
}

export default MultiChoices