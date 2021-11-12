import React, { useState, useEffect } from 'react'
import { initialTest } from 'actions/initialTest'
import { mapOrder } from 'utils/sorts'
import PanelLeft from 'components/multi-choices/panelLeft/PanelLeft'
import PanelPresentation from 'components/multi-choices/panelPresentation/PanelPresentation'
import PanelRight from 'components/multi-choices/panelRight/PanelRight'
import './AppContainer.scss'

function Container() {
    const emptyTest = {
        id: '',
        title: '',
        creator_id: '',
        status: '',
        questions: [],
        questions_order: []
    }
    const emptyQuestion = {
        id: 'question-1',
        type: 'MULTICHOICE',
        content: '',
        embeded_media: [],
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
        correct_answer: ''
    }
    const [test, setTest] = useState(emptyTest)
    const [questions, setQuestions] = useState([])
    const [selectedQuestion, setSelectedQuestion] = useState(emptyQuestion)
    const [isLoadedSelectedQuestion, setIsLoadedSelectedQuestion] = useState(false)

    // Load data
    useEffect(() => {
        const questionsFromDB = false// initialTest.questions
        if (initialTest === true) {
            setTest(initialTest)

            // thứ tự tuân theo thuộc tính questions_order
            const q = mapOrder(questionsFromDB, initialTest.questions_order, 'id')
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

            setTest(newTest)
            setQuestions(newTest.questions)
            setSelectedQuestion(newTest.questions[0])
        }
        setIsLoadedSelectedQuestion(true)
    }, [])

    useEffect(() => {
        console.log('Test: ', test)
    }, [test])

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
            console.log('Questions: ', newQuestions)
        }
        console.log('=================', selectedQuestion)
    }, [selectedQuestion])

    const updateSelectedQuestion = (question) => {
        setSelectedQuestion({ ...question })
        console.log('Update Selected Question: ', question)
    }

    return (
        <div className="app-container">
            <PanelLeft
                test={test}
                setTest={setTest}
                questions={questions}
                setQuestions={setQuestions}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
            />
            <PanelPresentation
                selectedQuestion={selectedQuestion}
                updateSelectedQuestion={updateSelectedQuestion}
            />
            <PanelRight test={test} setTest={setTest} />
        </div>
    )
}

export default Container