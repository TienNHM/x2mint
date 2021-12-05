import React, { useState, useEffect } from 'react'
import { mapOrder } from 'utils/sorts'
import PanelPreview from 'components/MultiChoices/panelPreview/PanelPreview'
import Question from 'components/MultiChoices/question/Question'
import PanelSettings from 'components/MultiChoices/panelSettings/PanelSettings'
import { emptyTest, emptyTakeTest } from 'actions/initialData'
import './MultiChoices.scss'
import { useParams } from 'react-router'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from 'utils/constants'
import { HashLoader } from 'react-spinners'

function MultiChoices({ setIsShowTest, _test, updateTest, isCreator }) {
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
    const [test, setTest] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [isLoadedSelectedQuestion, setIsLoadedSelectedQuestion] = useState(false)
    const [isSaved, setIsSaved] = useState(true)
    const [takeTest, setTakeTest] = useState({ ...emptyTakeTest })

    useEffect(() => {
        if (testResponse) {
            console.log('response', testResponse)
            const t = testResponse.data
            setTest(t)
            console.log('test', t)

            const q = mapOrder(t.questions, t.questionsOrder, 'id')
            setQuestions(q)

            setSelectedQuestion(selectedQuestion ? selectedQuestion : t.questions[0])
        }
    }, [testResponse])

    // Load data
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

    useEffect(() => {
        const newTest = { ...test }
        newTest.questions = questions
        setTest(newTest)
    }, [questions])

    useEffect(() => {
        if (isLoadedSelectedQuestion) {
            console.log('Selected Question: ', selectedQuestion)
            let newQuestions = [...questions]
            const index = newQuestions.findIndex(question => question.id === selectedQuestion.id)
            newQuestions[index] = selectedQuestion
            setQuestions(newQuestions)
        }
    }, [selectedQuestion])

    const updateSelectedQuestion = (question) => {
        setSelectedQuestion({ ...question })
        console.log('Update Selected Question: ', question)
    }

    const updateTakeTest = (question, chooseAnswer) => {
        //Nếu ko phải creator thì update lại takeTest
        console.log(question)
        // const newTakeTest = { ...takeTest }
        // const choose = {
        //     questionId: question.id,
        //     answers: [...chooseAnswer],
        //     correctAnswers: question.correct_answers,
        //     maxPoints: question.maxPoints
        // }
        // if (newTakeTest.chooseAnswers.length > 0) {
        //     const index = newTakeTest.chooseAnswers.findIndex(e => e.questionId === question.id)
        //     if (index !== -1) {
        //         newTakeTest.chooseAnswers[index] = choose
        //     }
        //     else newTakeTest.chooseAnswers.push(choose)
        // }
        // else newTakeTest.chooseAnswers = [choose]

        // setTakeTest(newTakeTest)
        // console.log('New take test', newTakeTest)
    }

    return (
        <div className="app-container">
            {testIsLoading &&
                <div className='sweet-loading'>
                    <HashLoader color={'#7ED321'} loading={testIsLoading} />
                </div>
            }

            {!testIsLoading &&
                <>
                    {isCreator &&
                        <PanelPreview
                            test={test}
                            setTest={setTest}
                            questions={questions}
                            setQuestions={setQuestions}
                            selectedQuestion={selectedQuestion}
                            setSelectedQuestion={setSelectedQuestion}
                        />
                    }

                    <Question
                        questionId={selectedQuestion}
                        updateQuestion={updateSelectedQuestion}
                        isCreator={isCreator | false}
                        updateTakeTest={updateTakeTest}
                    />

                    <PanelSettings
                        test={test}
                        setTest={setTest}
                        isCreator={isCreator | false}
                        setSelectedQuestion={updateSelectedQuestion}
                        setIsShowTest={setIsShowTest}
                        setIsSaved={setIsSaved}
                    />
                </>
            }
        </div>
    )
}

export default MultiChoices