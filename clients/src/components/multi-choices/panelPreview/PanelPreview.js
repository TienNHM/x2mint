import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { cloneDeep, isEmpty } from 'lodash'
import { Button } from 'react-bootstrap'
import QuestionItemPreview from 'components/multi-choices/questionItemPreview/QuestionItemPreview'
import { applyDrag } from 'utils/dragDrop'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import { emptyQuestion } from 'actions/initialData'
import './PanelPreview.scss'

function PanelPreview(props) {
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
        newTest.questions_order = newQuestions.map(q => q.id)
        newTest.questions = newQuestions
        setQuestions(newQuestions)
        setTest(newTest)
    }

    const handleOnAddQuestion = () => {
        let questionsList = [...questions]
        const quiz = cloneDeep(emptyQuestion)
        quiz.id = 'question-' + (questionsList.length + 1)
        console.log('quizz', quiz)
        setSelectedQuestion(quiz)
        questionsList.push(quiz)
        const questions_order = test.questions.map(q => q.id)
        questions_order.push(quiz.id)
        questionsList.questions_order = questions_order
        setQuestions(questionsList)

        const newTest = { ...test }
        newTest.questions = questionsList
        newTest.questions_order = newTest.questions.map(q => q.id)
        setTest(newTest)
        console.log('newTest', newTest)
    }

    const [isShow, setIsShow] = useState(false)

    const handleOnDeleteQuestion = () => {
        setIsShow(true)
    }

    const onAction = (action) => {
        if (action === MODAL_ACTION_CONFIRM) {
            const newQuestions = [...questions]
            const index = newQuestions.indexOf(selectedQuestion)
            newQuestions.splice(index, 1)
            if (newQuestions.length <= 0) {
                const quiz = cloneDeep(emptyQuestion)
                quiz.id = 'question-1'
                newQuestions.push(quiz)
        }

        setQuestions(newQuestions)
        setSelectedQuestion(newQuestions[index > 0 ? index - 1 : 0])
    }
    setIsShow(false)
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
            <Button
                variant="primary"
                onClick={handleOnAddQuestion}>
                Thêm
            </Button>{' '}
            <Button variant="danger" onClick={handleOnDeleteQuestion}>Xóa</Button>{' '}
        </div>
        <ConfirmModal
            content='Bạn có thực sự muốn xóa câu hỏi này không?'
            isShow={isShow}
            onAction={onAction} />
    </div>
)
}

export default PanelPreview