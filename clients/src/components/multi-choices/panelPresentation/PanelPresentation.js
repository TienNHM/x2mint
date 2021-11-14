import React from 'react'
import Question from 'components/multi-choices/question/Question'
import './PanelPresentation.scss'

function PanelPresentation({ selectedQuestion, updateSelectedQuestion, isCreator }) {

    return (
        <div className="panel-center">
            <Question
                question={selectedQuestion}
                updateQuestion={updateSelectedQuestion}
                isCreator={isCreator}
            />
        </div>
    )
}

export default PanelPresentation