import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { cloneDeep, isEmpty } from 'lodash'

import QuestionItemPreview from 'components/multi-choices/questionItemPreview/QuestionItemPreview'
import { applyDrag } from 'utils/dragDrop'
import './PanelLeft.scss'

function PanelLeft(props) {
    const { test, setTest, questions, setQuestions, selectedQuestion, setSelectedQuestion } = props
    /**
     * Xử lý sự kiện kéo thả
     * @param {*} dropResult kết quả kéo thả
     */
    const onQuestionDrop = (dropResult) => {
        // Tạo bản sao
        let newQuestions = cloneDeep(questions)
        // Sắp xếp thứ tự các questions lại theo dropResult
        newQuestions = applyDrag(newQuestions, dropResult)

        // Tạo bản sao
        const newTest = cloneDeep(test)
        newTest.questions_order = newQuestions.map(q => q.id),
        newTest.questions = newQuestions
        setQuestions(newQuestions)
        setTest(newTest)
    }

    const handleOnAddQuestion = () => {
        const newQuestion = {
            id: 'question-' + (questions.length+1),
            type: 'MULTICHOICE',
            content: '',
            embeded_media: '',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: ''
                },
                {
                    id: '2',
                    name: 'B',
                    content: ''
                },
                {
                    id: '3',
                    name: 'C',
                    content: ''
                },
                {
                    id: '4',
                    name: 'D',
                    content: ''
                }
            ],
            correct_answer: '1'
        }

        const questionsList = [...questions]
        questionsList.push(newQuestion)
        setQuestions(questionsList)

        const newTest = {...test}
        newTest.questions = questionsList
        setTest(newTest)

        setSelectedQuestion(newQuestion)
    }

    return (
        <div className="panel-left">
            <div className="questions-preview-title">Questions</div>
            <div className="questions-preview">
                {!isEmpty(test) &&
                    <Container
                        groupName="questions-preview-panel"
                        orientation="vertical" // default
                        onDrop={onQuestionDrop}
                        getChildPayload={index => questions[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'question-drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {questions.map((q, index) => (
                            <Draggable key={q.id}>
                                <QuestionItemPreview
                                    question={q}
                                    index={index}
                                    isSelected={q === selectedQuestion}
                                    setSelectedQuestion={setSelectedQuestion}
                                />
                            </Draggable>
                        ))}
                    </Container>
                }
                {isEmpty(test) && <div className="not-found align-items-center">Please add more questions!</div>}
            </div>
            <div className="question-actions">
                <button className="add-question" onClick={handleOnAddQuestion}>
                    Add question
                </button>
            </div>
        </div>
    )
}

export default PanelLeft