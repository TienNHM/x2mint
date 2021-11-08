import React from 'react'
import Question from 'components/multi-choices/question/Question'
import './PanelCenter.scss'

function PanelCenter() {
    const question = {
        id: '1',
        order: 10,
        content: 'Thuật toán sắp xếp nào là nhanh nhất trong số các thuật toán được liệt kê?',
        embededMedia: [
            {
                src: 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
                alt: 'Mèo'
            }
        ],
        answers: [
            {
                id: '1',
                name: 'A',
                content: 'Quick Sort'
            },
            {
                id: '2',
                name: 'B',
                content: 'Interchange Sort'
            },
            {
                id: '3',
                name: 'C',
                content: 'Bubble Sort'
            },
            {
                id: '4',
                name: 'D',
                content: 'Shaker Sort'
            }
        ]
    }

    return (
        <div className="panel-center">
            <Question question={question} />
        </div>
    )
}

export default PanelCenter