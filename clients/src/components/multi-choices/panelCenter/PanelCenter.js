import React from 'react'
import Question from 'components/multi-choices/question/Question'
import Answer from 'components/multi-choices/answer/Answer'
import './PanelCenter.scss'

function PanelCenter() {
    const question = {
        order: 10,
        content: 'Thuật toán sắp xếp nào là nhanh nhất trong số các thuật toán được liệt kê?',
        embededMedia: [
            {
                src: 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
                alt: 'Mèo'
            }
        ]
    }

    return (
        <div className="panel-center">
            <Question question={question} />
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