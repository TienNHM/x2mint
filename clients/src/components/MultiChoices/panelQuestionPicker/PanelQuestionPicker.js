import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import React, { useRef, useState } from 'react'
import Countdown from 'react-countdown'
import { Button } from 'react-bootstrap'
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from 'utils/constants'
import './PanelQuestionPicker.scss'

export default function PanelQuestionPicker(props) {
    const { test, selectedQuestion, setSelectedQuestion } = props

    const btnSubmitRef = useRef(null)
    const timeRemainRef = useRef(null)

    // Confirm Modal
    const [isShowConfirm, setIsShowConfirm] = useState(false)
    const [content, setContent] = useState('')

    const handleConfirmSubmit = (action) => {
        if (action === MODAL_ACTION_CONFIRM) {
            btnSubmitRef.current.disabled = true
            timeRemainRef.current.stop()
            setIsShowConfirm(false)
            //TODO Show result page
        }
        else if (action === MODAL_ACTION_CLOSE) {
            timeRemainRef.current.start()
            setIsShowConfirm(false)
        }
    }

    const handleOnSubmitClick = () => {
        setContent('Bạn có muốn xác nhận việc nộp bài?<br /><strong>Lưu ý, sau khi xác nhận, bạn không thể chỉnh sửa câu trả lời.</strong>')
        setIsShowConfirm(true)
    }

    const Completionist = () => <h6 className="time-countdown">Hết giờ</h6>

    const renderer = ({ hours, minutes, seconds, completed }) => {
        const m = ('' + minutes).length < 2 ? ('0' + minutes) : ('' + minutes)
        const s = ('' + seconds).length < 2 ? ('0' + seconds) : ('' + seconds)
        if (completed) {
            // Render a completed state
            handleOnSubmitClick()
            console.log('Completed state: ', completed)
            return <Completionist />
        } else {
            // Render a countdown
            return <span className="time-countdown">
                {hours} : {m} : {s}
            </span>
        }
    }

    return (
        <div className="take-test">
            <div className="question-picker">
                <div className="section-title">Danh sách câu hỏi</div>
                <hr style={{ margin: '8px' }} />
                <div className="btn-question">
                    {test.questions.map((q, index) =>
                        //TODO kiểm tra xem đã chọn đáp án cho câu hỏi này chưa để render màu tương ứng
                        <Button key={index}
                            variant={q._id === selectedQuestion._id ? 'primary' : 'light'}
                            onClick={() => setSelectedQuestion(q, false)}
                        >
                            {index + 1}
                        </Button>
                    )}
                </div>
            </div>
            <div className="examinee-actions">
                <div className="time-remain">
                    <div className="section-title">Thời gian còn lại</div>
                    <div className="time-remain-show d-flex align-items-center">
                        <Countdown date={Date.parse(test.endTime)} renderer={renderer} ref={timeRemainRef}>
                            <Completionist />
                        </Countdown>
                    </div>
                </div>
                <div className="submit-test">
                    <Button
                        variant="primary"
                        onClick={handleOnSubmitClick}
                        ref={btnSubmitRef}
                    >
                        Nộp bài
                    </Button>{' '}
                </div>
            </div>


            <div className="confirm-submit">
                <ConfirmModal
                    title="Xác nhận"
                    content={content}
                    isShow={isShowConfirm}
                    onAction={handleConfirmSubmit}
                />
            </div>
        </div>
    )
}