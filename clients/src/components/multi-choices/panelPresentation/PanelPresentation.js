import React from 'react'
import Question from 'components/multi-choices/question/Question'
import './PanelPresentation.scss'

function PanelPresentation(props) {
    const { selectedQuestion, updateSelectedQuestion, isCreator, updateTakeTest } = props
    return (
        <div className="panel-center">
            <Question
                question={selectedQuestion}
                updateQuestion={updateSelectedQuestion}
                isCreator={isCreator}
                updateTakeTest={updateTakeTest}
            />
        </div>
    )
}

export default PanelPresentation