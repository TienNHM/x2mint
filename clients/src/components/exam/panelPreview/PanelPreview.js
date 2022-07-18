import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { cloneDeep, isEmpty } from 'lodash'
import { applyDrag } from 'utils/dragDrop'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { MODAL_ACTION } from 'utils/constants'
import { blankQuestion } from 'actions/initialData'
import './PanelPreview.scss'
import { createQuestion, deleteQuestion } from 'actions/api/QuestionAPI'
import { updateTest } from 'actions/api/TestAPI'
import { Fab } from 'react-tiny-fab'
import { toast } from 'react-toastify'

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
    const onQuestionDrop = async (dropResult) => {
        // Tạo bản sao
        let newQuestions = cloneDeep(questions)
        // Sắp xếp thứ tự các questions lại theo dropResult
        newQuestions = applyDrag(newQuestions, dropResult)

        // Tạo bản sao
        const newTest = cloneDeep(test)
        const order = newQuestions.map(q => q._id)
        newTest.questionsOrder = order
        newTest.questions = newQuestions

        const data = await updateTest(newTest)
        setQuestions(cloneDeep(data.test.questions))
        setTest(cloneDeep(data.test.questions))
    }

    const handleOnAddQuestion = async () => {
        // Tạo mới 1 question
        const quiz = cloneDeep(blankQuestion)
        const newQuiz = await createQuestion(quiz, test.id)

        // Cập nhật lại bài test kèm theo question mới
        setTest(newQuiz.test)

        // Cập nhật lại selectedQuestion
        const index = newQuiz.test.questions.length
        setSelectedQuestion(newQuiz.test.questions[index - 1])

        setQuestions(newQuiz.test.questions)
    }

    const handleOnDeleteQuestion = () => {
        setIsShow(true)
    }

    const onActionDeleteQuestion = async (action) => {
        if (action === MODAL_ACTION.CONFIRM) {
            await deleteQuestion(selectedQuestion._id)

            const newQuestions = [...questions]
            let index = -1
            newQuestions.forEach((question, i) => {
                if (question._id === selectedQuestion._id) {
                    index = i
                }
            })
            newQuestions.splice(index, 1)

            const updateTestRes = await updateTest({
                ...test,
                questions: cloneDeep(newQuestions),
                questionsOrder: newQuestions.map(q => {
                    if (q._id !== selectedQuestion._id)
                        return q._id
                })
            })
            const newTest = updateTestRes.test
            setTest(cloneDeep(newTest))
            setQuestions(newTest.questions)

            const newIndex = (index > 0 && index < newTest.questions.length) ? index : 0
            setSelectedQuestion(newTest.questions[newIndex])

            toast.success('🌟 Đã xóa thành công!')
        }
        else {
            toast.warning('💢 Đã hủy việc xóa câu hỏi!')
        }
        setIsShow(false)
    }

    const renderPreviewQuestion = (q, index) => {
        const isSelectedClassName = q._id === selectedQuestion._id ?
            'rv-content q-selected' :
            'rv-content'

        return (
            <div className="question-item-preview"
                onClick={() => setSelectedQuestion({ ...q })}>
                <div className="question-number">{index + 1}</div>
                <div className={isSelectedClassName}>
                    <div className="display-text text-truncate">
                        {q.content}
                    </div>
                </div>
            </div>
        )
    }

    const btnAddQuestionStyles = {
        bottom: '0px',
        right: '0px',
        backgroundColor: '#1dc476'
    }

    const btnRemoveQuestionStyles = {
        bottom: '0px',
        right: '0px',
        backgroundColor: '#8993a3'
    }

    return (
        <div className="panel-preview">
            <div className="panel-left">
                <div className="questions-preview-title">Câu hỏi</div>
                <div className="questions-preview">
                    {!isEmpty(test) &&
                        <Container
                            groupName="questions-preview-panel"
                            orientation={window.screen.availWidth <= 992 ? 'horizontal' : 'vertical'}
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
                                    {renderPreviewQuestion(q, index)}
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

                <div className="">
                    <Fab
                        mainButtonStyles={btnAddQuestionStyles}
                        style={{ bottom: '-10px', right: '130px' }}
                        icon={<i className="fa fa-plus"></i>}
                        alwaysShowTitle={true}
                        onClick={handleOnAddQuestion}
                    >
                        <abbr className='badge bg-warning p-2'>
                            Thêm câu hỏi
                        </abbr>
                    </Fab>
                    <Fab
                        mainButtonStyles={btnRemoveQuestionStyles}
                        style={{ bottom: '-10px', right: '80px' }}
                        icon={<i className="fa fa-minus"></i>}
                        alwaysShowTitle={true}
                        onClick={handleOnDeleteQuestion}
                    >
                        <abbr className='badge bg-warning p-2'>
                            Xóa câu hỏi
                        </abbr>
                    </Fab>
                </div>
            </div>

            <ConfirmModal
                content='Bạn có thực sự muốn xóa câu hỏi này không?'
                isShow={isShow}
                onAction={onActionDeleteQuestion} />
        </div>
    )
}

export default PanelPreview