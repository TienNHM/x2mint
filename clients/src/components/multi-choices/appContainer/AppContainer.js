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
    const [test, setTest] = useState(emptyTest)
    const [questions, setQuestions] = useState([])

    // Load data
    useEffect(() => {
        const questionsFromDB = initialTest.questions
        if (initialTest) {
            setTest(initialTest)

            // thứ tự tuân theo thuộc tính questionsOrder
            setQuestions(mapOrder(questionsFromDB, initialTest.questionsOrder, 'id'))
        }

    }, [])

    useEffect(() => {
        console.log('Test: ', test)
    }, [test])

    useEffect(() => {
        console.log('Questions: ', questions)
    }, [questions])

    return (
        <div className="app-container">
            <PanelLeft
                test={test}
                setTest={setTest}
                questions={questions}
                setQuestions={setQuestions}
            />
            <PanelPresentation />
            <PanelRight />
        </div>
    )
}

export default Container