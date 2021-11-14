import React from 'react'
import './QuestionItemPreview.scss'

function QuestionItemPreview({ question, index, isSelected, setSelectedQuestion }) {
    const short_content = question.content.split(' ').slice(0, 5).join(' ') + '...'
    const handleQuestionPreviewClick = () => {
        setSelectedQuestion(question)
    }
    const class_name = isSelected ? 'question-item-preview-content selected' : 'question-item-preview-content'
    return (
        <div className="question-item-preview">
            <div className="question-item-preview-number">{index + 1}</div>
            <div
                className={class_name}
                onClick={handleQuestionPreviewClick}
            >
                {short_content}
            </div>
        </div>
    )
}

export default QuestionItemPreview