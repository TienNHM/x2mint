import React, { useState, useEffect } from 'react'
import { mapOrder } from 'utils/sorts'
import PanelPreview from 'components/multi-choices/panelPreview/PanelPreview'
import PanelPresentation from 'components/multi-choices/panelPresentation/PanelPresentation'
import PanelSettings from 'components/multi-choices/panelSettings/PanelSettings'
import './MultiChoices.scss'

function Container({setIsShowTest, test}) {
    console.log(test)
    const [currentTest, setCurrentTest] = useState(test)
    const q = mapOrder(test.questions, test.questions_order, 'id')
    const [questions, setQuestions] = useState(q)
    const [selectedQuestion, setSelectedQuestion] = useState(q[0])
    const [isLoadedSelectedQuestion, setIsLoadedSelectedQuestion] = useState(false)

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
            const newTest = {
                id: 'test-1',
                title: '',
                creator_id: 'user-1',
                status: 'DRAFT',
                start_time: '',
                end_time: '',
                questions: [{
                    id: 'question-1',
                    type: 'MULTICHOICE',
                    content: '',
                    embeded_media: '',
                    answers: [
                        {
                            id: '1',
                            name: 'A',
                            content: ''
                        },
                        {
                            id: '2',
                            name: 'B',
                            content: ''
                        },
                        {
                            id: '3',
                            name: 'C',
                            content: ''
                        },
                        {
                            id: '4',
                            name: 'D',
                            content: ''
                        }
                    ],
                    correct_answer: '1'
                }],
                questions_order: ['question-1']
            }

            setCurrentTest(newTest)
            setQuestions(newTest.questions)
            setSelectedQuestion(newTest.questions[0])
        }
        setIsLoadedSelectedQuestion(true)
    }, [test])

    useEffect(() => {
        console.log('Test: ', currentTest)
    }, [test])

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

    const updateSelectedQuestion = (question, isCreator) => {
        setSelectedQuestion({ ...question })
        console.log('Update Selected Question: ', question)
    }

    const isCreator = true

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

            <PanelPresentation
                selectedQuestion={selectedQuestion}
                updateSelectedQuestion={updateSelectedQuestion}
                isCreator={isCreator}
            />

            <PanelSettings
                test={currentTest}
                setTest={setCurrentTest}
                isCreator={isCreator}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={updateSelectedQuestion}
                setIsShowTest={setIsShowTest}
            />
        </div>
    )
}

export default Container