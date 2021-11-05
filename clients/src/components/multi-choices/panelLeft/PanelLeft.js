import React from 'react'
import QuestionItemPreview from 'components/multi-choices/questionItemPreview/QuestionItemPreview'
import './PanelLeft.scss'

function PanelLeft() {
  return (
    <div className="panel-left">
      <div className="questions-preview-title">Questions</div>
      <div className="questions-preview">
        <QuestionItemPreview />
        <QuestionItemPreview />
        <QuestionItemPreview />
        <QuestionItemPreview />
        <QuestionItemPreview />
        <QuestionItemPreview />
        <QuestionItemPreview />
        <QuestionItemPreview />
      </div>
      <div className="question-actions">
        <button className="add-question">Add question</button>
      </div>
    </div>
  )
}

export default PanelLeft