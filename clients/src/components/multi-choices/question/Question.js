import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Answer from 'components/multi-choices/answer/Answer'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { MAX_QUESTION_LENGTH, MODAL_ACTION_CONFIRM } from 'utils/constants'
import './Question.scss'

function Question({ question, setQuestion }) {
    const answers = question.answers
    const [embededMedia, setEmbedMedia] = useState('')
    const [content, setContent] = useState(question.content)
    const [rows, setRows] = useState(1)
    const [answerContents, setAnswerContents] = useState(['', '', '', ''])
    const [chooseAnswer, setChooseAnswer] = useState([])
    const [questionLength, setQuestionLength] = useState(MAX_QUESTION_LENGTH)
    const [isShowLibrary, setIsShowLibrary] = useState(false)

    useEffect(() => {
        setContent(question.content)
        console.log(question)
        const ans = question.answers.map(a => a.content)
        setAnswerContents(ans)
        setEmbedMedia(question.embeded_media)
        setQuestionLength(MAX_QUESTION_LENGTH - question.content.length)
    }, [question])

    useEffect(() => {
        setContent(content)
    }, [content])

    useEffect(() => {
        console.log('Choose: ', chooseAnswer)

    }, [chooseAnswer])

    useEffect(() => {
        console.log('Content: ', content)
    }, [content])

    useEffect(() => {
        console.log(answerContents)
    }, [answerContents])

    useEffect(() => {
        console.log(embededMedia)
        // const q = { ...question }
        // q.embeded_media = embededMedia
        // setQuestion(q)
    }, [embededMedia])

    useEffect(() => {
        if (isShowLibrary) {
            console.log('Show library...')
        }
    }, [isShowLibrary])

    const handleTextChange = (event) => {
        const value = event.target.value
        if (value.length <= MAX_QUESTION_LENGTH) {
            setContent(value)
            setQuestionLength(MAX_QUESTION_LENGTH - value.length)
            setRows(value.length / (MAX_QUESTION_LENGTH / 2 + 1) + 1)
        }
    }

    const handleOnAnswerClick = (event) => {
        const value = event.target.value
        const newValue = [...chooseAnswer]
        const index = newValue.indexOf(value)

        if (index < 0) {
            newValue.push(value)
            setChooseAnswer(newValue)
        }
        else {
            var arr = []
            newValue.map(x => x !== value && arr.push(x))
            setChooseAnswer(arr)
        }
    }

    const onConfirmModalAction = (type) => {
        if (type === MODAL_ACTION_CONFIRM) {
            console.log('OK')
        }

        toggleShowLibrary()
    }

    const toggleShowLibrary = () => setIsShowLibrary(!isShowLibrary)

    return (
        <>
            <div className="question">
                <div className="question-content  align-items-center">
                    <Form.Control
                        size="sm"
                        as="textarea"
                        rows={rows}
                        placeholder="Nhập nội dung câu hỏi..."
                        className="textarea-enter"
                        value={content}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="lenght-limit">{questionLength}</div>
            </div>
            <div className="question-embed">
                {embededMedia.length > 0 && <img src={embededMedia}></img>}
                {embededMedia.length <= 0 && <img src="https://memegenerator.net/img/instances/74856541/it-appears-that-there-is-nothing-here.jpg" alt="Nothing"></img>}
            </div>
            <div className="question-embed-edit">
                <div className="question-embed-change">
                    <Button variant="warning" onClick={toggleShowLibrary}>Change</Button>{' '}
                </div>
                <div className="question-embed-remove">
                    <Button variant="danger" onClick={() => setEmbedMedia('')}>Remove</Button>{' '}
                </div>
            </div>
            <div className="question-answers">
                {answers.map((a, index) =>
                    <Answer
                        key={a.id}
                        name={a.name}
                        index={index}
                        answerContents={answerContents}
                        setAnswerContents={setAnswerContents}
                        onClick={handleOnAnswerClick}
                    />)
                }
            </div>
            <BrowseLibrary show={isShowLibrary} onAction={onConfirmModalAction} />
        </>
    )
}

export default Question