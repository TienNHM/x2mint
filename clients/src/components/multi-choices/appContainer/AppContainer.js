import React, { useState, useEffect } from 'react'
import { initialTest } from 'actions/initialData'
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
        questionsOrder: []
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

    // Load data
    useEffect(() => {
        const questionsFromDB = initialTest.questions
        if (initialTest) {
            setTest(initialTest)

            // thứ tự tuân theo thuộc tính questionsOrder
            const q = mapOrder(questionsFromDB, initialTest.questionsOrder, 'id')
            setQuestions(q)
            setSelectedQuestion(q[0])
        }

    }, [])

    useEffect(() => {
        console.log('Test: ', test)
    }, [test])

    useEffect(() => {
        console.log('Questions: ', questions)
    }, [questions])

    useEffect(() => {
        console.log('Selected Questions: ', selectedQuestion)
    }, [selectedQuestion])

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
                setSelectedQuestion={setSelectedQuestion}
            />
            {/* <PanelRight /> */}
        </div>
    )
}

export default Container