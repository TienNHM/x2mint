import React, { useRef, useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { Button } from 'react-bootstrap'
import { MODAL_ACTION } from 'utils/constants'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { submit } from 'actions/api/TakeTestAPI'
import './PanelQuestionPicker.scss'
import { Fab } from 'react-tiny-fab'
import FaceDetect, { initWebcam } from './faceDetection'

export default function PanelQuestionPicker(props) {
    const faceapi = window.faceapi

    const { test, selectedQuestion, setSelectedQuestion, takeTest, setIsSubmitted } = props

    const btnSubmitRef = useRef(null)
    const timeRemainRef = useRef(null)
    const videoRef = useRef(null)
    const [video, setVideo] = useState(null)

    // Confirm Modal
    const [isShowConfirm, setIsShowConfirm] = useState(false)
    const contentToShow = 'Bạn có muốn xác nhận việc nộp bài?<br /><strong>Lưu ý, sau khi xác nhận, bạn không thể chỉnh sửa câu trả lời.</strong>'

    const faceDetection = () => {
        const handle = {
            video,
            setVideo,
            videoRef,
            takeTest,
            submit,
            setIsSubmitted
        }
        FaceDetect(faceapi, handle)
    }

    useEffect(() => {
        initWebcam(faceapi, videoRef, setVideo)
        return () => {
            setVideo(null)
        }
    }, [videoRef])

    useEffect(() => {
        console.log('video', video)
        if (video) faceDetection()
    }, [video])

    //#region  Submit
    const handleConfirmSubmit = async (action) => {
        if (action === MODAL_ACTION.CONFIRM) {
            btnSubmitRef.current.disabled = true
            timeRemainRef.current.stop()
            setIsShowConfirm(false)
            await submit(takeTest._id)
            setIsSubmitted(true)
        }
        else if (action === MODAL_ACTION.CLOSE) {
            timeRemainRef.current.start()
            setIsShowConfirm(false)
        }
    }

    //#endregion

    //#region Coundown
    const Completionist = () => <h6 className="time-countdown">Hết giờ</h6>

    const renderer = ({ hours, minutes, seconds, completed }) => {
        const m = ('' + minutes).length < 2 ? ('0' + minutes) : ('' + minutes)
        const s = ('' + seconds).length < 2 ? ('0' + seconds) : ('' + seconds)
        if (completed) {
            // Render a completed state
            handleConfirmSubmit(MODAL_ACTION.CONFIRM)
            return <Completionist />
        } else {
            // Render a countdown
            return <span className="time-countdown">
                {hours} : {m} : {s}
            </span>
        }
    }

    //#endregion

    const mainButtonStyles = {
        bottom: '0px',
        right: '0px',
        backgroundColor: '#1dc476'
    }

    return (
        <div className="take-test">
            <div className="webcam">
                <video id="video" autoPlay muted
                    width="200" height="150"
                    ref={videoRef}
                    // onPlay={() => faceDetection()}
                ></video>
            </div>

            <div className="question-picker">
                <div className="title">
                    <div className="section-title">Danh sách câu hỏi</div>
                    <hr style={{ margin: '8px' }} />
                </div>
                <div className="btn-question">
                    {test.questions.map((q, index) =>
                        <Button key={index}
                            variant={q._id === selectedQuestion._id ? 'warning' : 'light'}
                            onClick={() => setSelectedQuestion(q, false)}
                            className="fw-bold text-success"
                        >
                            {index + 1}
                        </Button>
                    )}
                </div>
            </div>

            <div className="time-remain">
                <div className="time-remain-title">Thời gian còn lại</div>
                <div className="time-remain-show d-flex align-items-center">
                    <Countdown date={Date.parse(test.endTime)} renderer={renderer} ref={timeRemainRef}>
                        <Completionist />
                    </Countdown>
                </div>
            </div>

            <div className="submit-test">
                <Button
                    variant="primary"
                    onClick={() => setIsShowConfirm(true)}
                    className="w-100"
                    ref={btnSubmitRef}
                >
                    Nộp bài
                </Button>
            </div>

            <div className="submit-area d-flex justify-content-end" id="open-settings">
                <ConfirmModal
                    title="Xác nhận"
                    content={contentToShow}
                    isShow={isShowConfirm}
                    onAction={handleConfirmSubmit}
                />
            </div>

            <div className="floating-buttons" id="floating-buttons">
                <Fab
                    mainButtonStyles={mainButtonStyles}
                    style={{ bottom: '-10px', right: '90px' }}
                    icon={<i className="fa fa-check-square"></i>}
                    alwaysShowTitle={true}
                    onClick={() => setIsShowConfirm(true)}
                ></Fab>
            </div>
        </div>
    )
}