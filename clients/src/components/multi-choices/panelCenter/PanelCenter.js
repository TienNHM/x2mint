import React from 'react'
import Question from 'components/multi-choices/question/Question'
import QuestionEmbed from 'components/multi-choices/questionEmbed/QuestionEmbed'
import Answer from 'components/multi-choices/answer/Answer'
import './PanelCenter.scss'

function PanelCenter() {
  return (
    <div className="panel-center">
      <Question />
      <QuestionEmbed />
      <div className="question-answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  )
}

export default PanelCenter