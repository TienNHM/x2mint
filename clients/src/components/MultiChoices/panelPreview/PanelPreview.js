import React, { useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { cloneDeep, isEmpty } from 'lodash'
import { Button } from 'react-bootstrap'
import { applyDrag } from 'utils/dragDrop'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { MODAL_ACTION_CONFIRM, STATUS } from 'utils/constants'
import { emptyQuestion } from 'actions/initialData'
import './PanelPreview.scss'
import { createQuestion, updateQuestion, deleteQuestion } from 'actions/api/QuestionAPI'

function PanelPreview(props) {
    const {
        test, setTest,
        questions, setQuestions,
        selectedQuestion, setSelectedQuestion
    } = props

    const [isShow, setIsShow] = useState(false)

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
        newTest.questionsOrder = newQuestions.map(q => q.id)
        newTest.questions = newQuestions
        setQuestions(newQuestions)
        setTest(newTest)
    }

    const handleOnAddQuestion = async () => {
        // Tạo mới 1 question
        const quiz = cloneDeep(emptyQuestion)
        const newQuiz = await createQuestion(quiz, test.id)
        console.log(newQuiz)

        // Cập nhật lại bài test kèm theo question mới
        setTest(newQuiz.test)

        // Cập nhật lại selectedQuestion
        const index = newQuiz.test.questions.length
        setSelectedQuestion(newQuiz.test.questions[index - 1])

        setQuestions(newQuiz.test.questions)

        // Thêm quiz vào danh sách các câu hỏi
        // let questionsList = [...questions]
        // questionsList.push(newQuiz.question)
        // const questionsOrder = test.questions.map(q => q._id)
        // questionsOrder.push(newQuiz.question.id)
        // questionsList.questionsOrder = questionsOrder
        // setQuestions(questionsList)

        // const newTest = { ...test }
        // newTest.questions = questionsList
        // newTest.questionsOrder = newTest.questions.map(q => q.id)
        // setTest(newTest)
    }

    const handleOnDeleteQuestion = () => {
        setIsShow(true)
    }

    const onActionDeleteQuestion = async (action) => {
        if (action === MODAL_ACTION_CONFIRM) {
            // TODO delete question
            const data = await deleteQuestion(selectedQuestion._id)
            console.log(data)

            const newQuestions = [...questions]
            const index = newQuestions.indexOf(selectedQuestion)
            newQuestions.splice(index, 1)
            // if (newQuestions.length <= 0) {
            //     const quiz = cloneDeep(emptyQuestion)
            //     quiz.id = 'question-1'
            //     newQuestions.push(quiz)
            // }

            setQuestions(newQuestions)
            setSelectedQuestion(newQuestions[index > 0 ? index - 1 : 0])
        }
        setIsShow(false)
    }

    useEffect(() => {
        console.log(selectedQuestion)
    }, [selectedQuestion])

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
                            <Draggable key={index}>
                                <div className="question-item-preview">
                                    <div className="question-number">{index + 1}</div>
                                    <div
                                        className={
                                            q._id === selectedQuestion._id ? 'rv-content q-selected' : 'rv-content'
                                        }
                                        onClick={() => setSelectedQuestion({ ...q })}
                                    >
                                        {q.content.split(' ').slice(0, 12).join(' ')}
                                    </div>
                                </div>
                            </Draggable>
                        ))}
                    </Container>
                }

                {isEmpty(test) &&
                    <div className="not-found align-items-center">
                        Vui lòng thêm câu hỏi mới!
                    </div>
                }
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
                onAction={onActionDeleteQuestion} />
        </div>
    )
}

export default PanelPreview