import React from 'react'
import Question from 'components/multi-choices/question/Question'
import './PanelPresentation.scss'

function PanelPresentation({ selectedQuestion, updateSelectedQuestion }) {

    return (
        <div className="panel-center">
            <Question question={selectedQuestion} updateQuestion={updateSelectedQuestion} />
        </div>
    )
}

export default PanelPresentation