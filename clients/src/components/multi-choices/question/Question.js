import React, { useEffect, useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import Answer from 'components/multi-choices/answer/Answer'
import './Question.scss'

function Question({ question }) {
    const embededMedia = question.embededMedia
    const [content, setContent] = useState('')
    const [chooseAnswer, setChooseAnswer] = useState([])
    const [timeLimit, setTimeLimit] = useState('30')
    const answers = question.answers

    useEffect(() => {
        setContent(question.content)
    }, [question.content])

    const handleTextChange = (event) => setContent(event.target.value)

    const handleOnClick = (event) => {
        const value = event.target.value
        const newValue = [...chooseAnswer]
        const index = newValue.indexOf(value)

        if (index < 0) {
            newValue.push(value)
            setChooseAnswer(newValue)
        }
        else {
            var arr = []
            newValue.map(x => x!==value && arr.push(x))
            setChooseAnswer(arr)
        }
    }

    useEffect(() => {
        console.log(chooseAnswer)

    }, [chooseAnswer])

    return (
        <>
            <div className="question">
                <div className="question-number">{question.order}</div>
                <div className="question-content">
                    <FormControl as="textarea" className="question-content-input" value={content} onChange={handleTextChange} />
                </div>
            </div>
            <div className="question-embed">
                {embededMedia.length > 0 && <img src={embededMedia[0].src} alt={embededMedia[0].alt}></img>}
                {embededMedia.length <= 0 && <img src="https://memegenerator.net/img/instances/74856541/it-appears-that-there-is-nothing-here.jpg" alt="Nothing"></img>}
            </div>
            <div className="question-embed-edit">
                <div className="question-embed-change">
                    <Button variant="warning">Change</Button>{' '}
                </div>
                <div className="question-embed-remove">
                    <Button variant="danger">Remove</Button>{' '}
                </div>
            </div>
            <div className="question-answers">
                {answers.map(a => <Answer key={a.id} name={a.name} content={a.content} onClick={handleOnClick} />)}
            </div>
        </>
    )
}

export default Question