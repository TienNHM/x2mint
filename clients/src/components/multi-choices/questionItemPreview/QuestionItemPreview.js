import React from 'react'
import './QuestionItemPreview.scss'

function QuestionItemPreview({ question, index, setSelectedQuestion }) {
    const short_content = question.content.split(' ').slice(0, 5).join(' ') + '...'
    const handleQuestionPreviewClick = () => {
        setSelectedQuestion(question)
    }
    return (
        <div className="question-item-preview">
            <div className="question-item-preview-number">{index + 1}</div>
            <div className="question-item-preview-content" onClick={handleQuestionPreviewClick}>
                {short_content}
            </div>
        </div>
    )
}

export default QuestionItemPreview