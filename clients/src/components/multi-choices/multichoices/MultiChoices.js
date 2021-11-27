import React, { useState, useEffect } from 'react'
import { mapOrder } from 'utils/sorts'
import PanelPreview from 'components/multi-choices/panelPreview/PanelPreview'
import Question from 'components/multi-choices/question/Question'
import PanelSettings from 'components/multi-choices/panelSettings/PanelSettings'
import { emptyTest, emptyTakeTest } from 'actions/initialData'
import './MultiChoices.scss'

function MultiChoices({ setIsShowTest, test, updateTest, isCreator }) {
    console.log(test)
    const [currentTest, setCurrentTest] = useState(test)
    const q = mapOrder(test.questions, test.questions_order, 'id')
    const [questions, setQuestions] = useState(q)
    const [selectedQuestion, setSelectedQuestion] = useState(q[0])
    const [isLoadedSelectedQuestion, setIsLoadedSelectedQuestion] = useState(false)
    const [isSaved, setIsSaved] = useState(true)
    const [takeTest, setTakeTest] = useState({ ...emptyTakeTest })

    // Load data
    useEffect(() => {
        const questionsFromDB = test.questions
        if (test) {
            setCurrentTest(test)

            // thứ tự tuân theo thuộc tính questions_order
            const q = mapOrder(questionsFromDB, test.questions_order, 'id')
            setQuestions(q)
            setSelectedQuestion(q[0])
        }
        else {
            const newTest = { ...emptyTest, id: 'test-1' }

            setCurrentTest(newTest)
            setQuestions(newTest.questions)
            setSelectedQuestion(selectedQuestion | newTest.questions[0])
        }
        setIsLoadedSelectedQuestion(true)
    }, [test])

    useEffect(() => {
        console.log('Current Test: ', currentTest)
        if (!isSaved) {
            setIsSaved(true)
            test = { ...currentTest }
            updateTest({ ...currentTest })
        }
    }, [currentTest])

    useEffect(() => {
        const newTest = { ...currentTest }
        newTest.questions = questions
        setCurrentTest(newTest)
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
        const newTakeTest = { ...takeTest }
        const choose = {
            questionId: question.id,
            answers: [...chooseAnswer],
            correctAnswers: question.correct_answers,
            maxPoints: question.maxPoints
        }
        if (newTakeTest.chooseAnswers.length > 0) {
            const index = newTakeTest.chooseAnswers.findIndex(e => e.questionId === question.id)
            if (index !== -1) {
                newTakeTest.chooseAnswers[index] = choose
            }
            else newTakeTest.chooseAnswers.push(choose)
        }
        else newTakeTest.chooseAnswers = [choose]

        setTakeTest(newTakeTest)
        console.log('New take test', newTakeTest)
    }

    return (
        <div className="app-container">
            {isCreator &&
                <PanelPreview
                    test={currentTest}
                    setTest={setCurrentTest}
                    questions={questions}
                    setQuestions={setQuestions}
                    selectedQuestion={selectedQuestion}
                    setSelectedQuestion={setSelectedQuestion}
                />
            }

            <Question
                question={selectedQuestion}
                updateQuestion={updateSelectedQuestion}
                isCreator={isCreator | false}
                updateTakeTest={updateTakeTest}
            />

            <PanelSettings
                test={currentTest}
                setTest={setCurrentTest}
                isCreator={isCreator | false}
                setSelectedQuestion={updateSelectedQuestion}
                setIsShowTest={setIsShowTest}
                setIsSaved={setIsSaved}
            />
        </div>
    )
}

export default MultiChoices