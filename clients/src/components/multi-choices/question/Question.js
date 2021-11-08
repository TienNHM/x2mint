import React, { useEffect, useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import './Question.scss'

function Question({ question }) {
    const embededMedia = question.embededMedia
    const [content, setContent] = useState('')

    useEffect(() => {
        setContent(question.content)
    }, [])

    const handleTextChange = (event) => setContent(event.target.value)

    return (
        <>
            <div className="question">
                <div className="question-number">{question.order}</div>
                <div className="question-content">
                    <FormControl as="textarea" className="question-content-input" value={content} onChange={handleTextChange}/>
                </div>
            </div>
            <div className="question-embed">
                {embededMedia.length>0 && <img src={embededMedia[0].src} alt={embededMedia[0].alt}></img>}
                {embededMedia.length<=0 && <img src="https://memegenerator.net/img/instances/74856541/it-appears-that-there-is-nothing-here.jpg" alt="Nothing"></img>}
            </div>
            <div className="question-embed-edit">
                <div className="question-embed-info">
                    <Button variant="info">Info</Button>{' '}
                </div>
                <div className="question-embed-crop">
                    <Button variant="warning">Crop</Button>{' '}
                </div>
                <div className="question-embed-remove">
                    <Button variant="danger">Remove</Button>{' '}
                </div>
            </div>
        </>
    )
}

export default Question