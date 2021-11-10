import React from 'react'
import Question from 'components/multi-choices/question/Question'
import './PanelPresentation.scss'

function PanelPresentation({ selectedQuestion, setSelectedQuestion }) {

    return (
        <div className="panel-center">
            <Question question={selectedQuestion} />
        </div>
    )
}

export default PanelPresentation