import React from 'react'
import Select from 'components/multi-choices/select/Select'
import './PanelRight.scss'

function PanelRight() {
    const questionTypes = {
        name: 'type',
        options: [
            {
                value: '1',
                label: 'Type 1',
                selected: true
            },
            {
                value: '2',
                label: 'Type 2',
                selected: false
            },
            {
                value: '3',
                label: 'Type 3',
                selected: false
            }
        ]
    }

    const timeLimits = {
        name: 'time-limit',
        options: [
            {
                value: '10',
                label: '10 giây',
                selected: true
            },
            {
                value: '15',
                label: '15 giây',
                selected: false
            },
            {
                value: '30',
                label: '30 giây',
                selected: false
            },
            {
                value: '60',
                label: '60 giây',
                selected: false
            },
            {
                value: '90',
                label: '90 giây',
                selected: false
            },
            {
                value: '120',
                label: '120 giây',
                selected: false
            }
        ]
    }

    const points = {
        name: 'points',
        options: [
            {
                value: '10',
                label: '10',
                selected: true
            },
            {
                value: '20',
                label: '20',
                selected: false
            },
            {
                value: '30',
                label: '30',
                selected: false
            }
        ]
    }

    const musics = {
        name: 'music',
        options: [
            {
                value: 'Music 1',
                label: 'Music 1',
                selected: true
            },
            {
                value: 'Music 2',
                label: 'Music 2',
                selected: false
            },
            {
                value: 'Music 3',
                label: 'Music 3',
                selected: false
            }
        ]
    }

    const answerOptions = {
        name: 'music',
        options: [
            {
                value: 'Option 1',
                label: 'Option 1',
                selected: true
            },
            {
                value: 'Option 2',
                label: 'Option 2',
                selected: false
            },
            {
                value: 'Option 3',
                label: 'Option 3',
                selected: false
            }
        ]
    }

    return (
        <div className="panel-right">
            <div className="attributes">
                <div className="question-type">
                    <div>Question type:</div>
                    <Select data={questionTypes} />
                </div>
                <div className="question-time-limit">
                    <div>Time limit:</div>
                    <Select data={timeLimits} />
                </div>
                <div className="question-points">
                    <div>Points:</div>
                    <Select data={points} />
                </div>
                <div className="question-music">
                    <div>Music:</div>
                    <Select data={musics} />
                </div>
                <div className="question-answer-option">
                    <div>Answer Option:</div>
                    <Select data={answerOptions} />
                </div>
            </div>
            <div className="quick-actions">
                <button className="duplicate-question">Duplicate</button>
                <button className="delete-question">Delete</button>
            </div>
        </div>
    )
}

export default PanelRight