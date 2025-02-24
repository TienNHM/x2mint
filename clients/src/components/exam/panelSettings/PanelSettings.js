import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
// import { splitTime } from 'utils/timeUtils'
import { MODAL_ACTION, ROLE, TEST_DATA } from 'utils/constants'
import './PanelSettings.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTest } from 'actions/api/TestAPI'
import { Fab } from 'react-tiny-fab'
import ModalTestInfo from './ModalTestInfo'
// import { cloneDeep } from 'lodash'
import { stopWebcam } from 'utils/faceDetection'

export default function PanelSettings(props) {
    const { test, setTest, videoRef } = props
    const user = useSelector((state) => state.auth.user)
    const isUser = user && user.role === ROLE.USER

    const navigate = useNavigate()

    //#region States
    const webcamTracking = test.tracking && test.tracking.includes(TEST_DATA.TRACKING.WEBCAM)

    // // Test title
    // const inputTestTitleRef = useRef('')
    // const [testTitle, setTestTitle] = useState(test.name ? test.name : '')

    // // Mô tả
    // const inputTestDescriptionRef = useRef('')
    // const [testDescription, setTestDescription] = useState(test.description !== null ? test.description : '')

    // // Test inputNumberOfTimes
    // const inputNumberOfTimesRef = useRef('')
    // const [testNumberOfTimes, setTestNumberOfTimes] = useState(test.maxTimes !== null ? test.maxTimes : 1)

    // // Điểm tối đa
    // const inputMaxPointsRef = useRef(null)
    // const [testMaxPoints, setTestMaxPoints] = useState(test.maxPoints ? test.maxPoints : 0)

    // // Mã PIN
    // const inputPinRef = useRef('')
    // const [testPIN, setTestPIN] = useState(test.pin ? test.pin : '')

    // // Duration
    // const start_time = splitTime(test.startTime)
    // const end_time = splitTime(test.endTime)
    // const [startDate, setStartDate] = useState(start_time.date)
    // const [startTime, setStartTime] = useState(start_time.time)
    // const [endDate, setEndDate] = useState(end_time.date)
    // const [endTime, setEndTime] = useState(end_time.time)
    // const startDateRef = useRef(null)
    // const startTimeRef = useRef(null)
    // const endDateRef = useRef(null)
    // const endTimeRef = useRef(null)

    // Confirm Modal
    const [isShowConfirm, setIsShowConfirm] = useState(false)
    const [content, setContent] = useState('')

    // Test Info Modal
    const [isShowTestInfo, setIsShowTestInfo] = useState(!isUser)
    //#endregion

    //#region Handlers
    // const handleSaveClick = async () => {
    //     const titleValue = inputTestTitleRef.current.value
    //     if (titleValue.trim() === '') {
    //         inputTestTitleRef.current.focus()
    //         toast.error('💢 Vui lòng nhập tên cho bài test!')
    //     }
    //     else if (inputMaxPointsRef.current.value <= 0) {
    //         inputMaxPointsRef.current.focus()
    //         toast.error('💢 Điểm bài thi không hợp lệ!')
    //     }
    //     else if (inputPinRef.current.value.trim() === '') {
    //         inputPinRef.current.focus()
    //         toast.error('💢 Vui lòng nhập mã PIN cho bài thi!')
    //     }
    //     else {
    //         const startTime = startDateRef.current.value + 'T' + startTimeRef.current.value + ':00.000Z'
    //         const endTime = endDateRef.current.value + 'T' + endTimeRef.current.value + ':00.000Z'
    //         if (Date.parse(endTime) > Date.parse(startTime)) {
    //             const newTest = {
    //                 ...test,
    //                 name: titleValue,
    //                 startTime: startTime,
    //                 endTime: endTime,
    //                 description: testDescription,
    //                 maxPoints: testMaxPoints,
    //                 maxTimes: inputNumberOfTimesRef.current.value,
    //                 pin: testPIN
    //                 // url: testLink
    //             }

    //             // Lưu vào CSDL
    //             await updateTest(newTest)

    //             // Update lại test
    //             setTest(cloneDeep(newTest))
    //             toast.success('🎉 Đã lưu lại những thay đổi của bạn!')
    //         }
    //         else {
    //             endDateRef.current.focus()
    //             toast.error('💢 Thời gian không hợp lệ! Vui lòng nhập lại!')
    //         }
    //     }
    // }

    const handleExit = () => {
        setContent('Bạn có muốn thoát không? Lưu ý, mọi thay đổi chưa được lưu sẽ bị mất đi mà không thể khôi phục!')
        setIsShowConfirm(true)
    }

    const handleConfirmModal = (action) => {
        setIsShowConfirm(false)
        if (action === MODAL_ACTION.CONFIRM) {
            if (webcamTracking) {
                stopWebcam(videoRef)
            }
            return navigate(-1)
        }
    }

    const handleOnUpdateTestInfo = async (action, _test) => {
        if (action === MODAL_ACTION.CONFIRM) {
            const newTest = {
                ...test,
                name: _test.name,
                maxPoints: _test.maxPoints,
                //url: _test.url,
                maxTimes: _test.maxTimes,
                pin: _test.pin,
                description: _test.description,
                startTime: _test.startTime,
                endTime: _test.endTime,
                tracking: _test.tracking
            }

            // Lưu vào CSDL
            await updateTest(newTest)

            // Update lại test
            setTest(newTest)
            toast.success('Đã lưu lại những thay đổi của bạn!')
        }
        setIsShowTestInfo(false)
    }
    //#endregion

    // useEffect(() => {
    //     if (test) {
    //         setTestTitle(test.name)
    //         setTestDescription(test.description)
    //         setTestMaxPoints(test.maxPoints)
    //         // setTestLink(test.url)
    //         setTestNumberOfTimes(test.maxTimes)
    //         setTestPIN(test.pin)

    //         const start_time = splitTime(test.startTime)
    //         const end_time = splitTime(test.endTime)
    //         setStartDate(start_time.date)
    //         setStartTime(start_time.time)
    //         setEndDate(end_time.date)
    //         setEndTime(end_time.time)
    //     }
    // }, [test])

    const btnExitStyles = {
        bottom: '0px',
        right: '0px',
        backgroundColor: '#ed325a'
    }

    const btnInfoStyles = {
        bottom: '0px',
        right: '0px',
        backgroundColor: '#edc132'
    }

    return (
        <div className="">
            <div className="floating-buttons d-flex justify-content-start" id="floating-buttons">
                <Fab
                    mainButtonStyles={btnInfoStyles}
                    style={{ bottom: '-10px', right: '-20px' }}
                    icon={<i className="fa fa-reorder"></i>}
                    alwaysShowTitle={true}
                    onClick={() => setIsShowTestInfo(true)}
                >
                    <abbr className='badge bg-warning p-2'>
                        Thông tin bài kiểm tra
                    </abbr>
                </Fab>

                <Fab
                    mainButtonStyles={btnExitStyles}
                    style={{ bottom: '-10px', right: '30px' }}
                    icon={<i className="fa fa-window-close"></i>}
                    alwaysShowTitle={true}
                    onClick={handleExit}
                >
                    <abbr className='badge bg-warning p-2'>
                        Thoát
                    </abbr>
                </Fab>
            </div>
            <ModalTestInfo
                isShow={isShowTestInfo}
                onAction={handleOnUpdateTestInfo}
                test={test}
                isUser={isUser}
            />
            <ConfirmModal
                title="Xác nhận"
                content={content}
                isShow={isShowConfirm}
                onAction={handleConfirmModal}
            />
        </div>

    )

    //#region
    // return (
    //     <div className="panel-settings">
    //         <div className="panel-right">
    //             <div className="panel-right-title">Chi tiết</div>

    //             <div className="attributes app-vertical-scrollbar">
    //                 <div className="attribute-title">
    //                     <div>Tên</div>
    //                     <div className="title">
    //                         <Form.Control
    //                             size="sm"
    //                             type="text"
    //                             ref={inputTestTitleRef}
    //                             placeholder="Tên..."
    //                             className="attribute-title-input"
    //                             value={testTitle ? testTitle : ''}
    //                             onChange={e => setTestTitle(e.target.value)}
    //                             readOnly={isUser}
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="attribute-title">
    //                     <div>Mô tả</div>
    //                     <div className="title">
    //                         <Form.Control
    //                             size="sm"
    //                             as="textarea"
    //                             rows={8}
    //                             ref={inputTestDescriptionRef}
    //                             placeholder="Mô tả..."
    //                             className="attribute-title-input"
    //                             value={testDescription ? testDescription : ''}
    //                             onChange={e => setTestDescription(e.target.value)}
    //                             readOnly={isUser}
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="attribute-title">
    //                     <div>Mã PIN</div>
    //                     <div className="title">
    //                         <Form.Control
    //                             size="sm"
    //                             type="text"
    //                             ref={inputPinRef}
    //                             placeholder="0"
    //                             className="attribute-title-input max-points"
    //                             value={testPIN}
    //                             onChange={e => setTestPIN(e.target.value)}
    //                             readOnly={isUser}
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="attribute-title">
    //                     <div>Điểm tối đa</div>
    //                     <div className="title">
    //                         <Form.Control
    //                             size="sm"
    //                             type="number"
    //                             ref={inputMaxPointsRef}
    //                             placeholder="0"
    //                             className="attribute-title-input max-points"
    //                             value={testMaxPoints}
    //                             onChange={e => setTestMaxPoints(e.target.value)}
    //                             readOnly={isUser}
    //                         />
    //                     </div>
    //                 </div>

    //                 {!isUser &&
    //                     <>
    //                         {/* <div className="attribute-title">
    //                             <div>Link</div>
    //                             <div className="title">
    //                                 <Form.Control
    //                                     size="sm"
    //                                     type="text"
    //                                     ref={inputLinkRef}
    //                                     placeholder="Link URL..."
    //                                     className="attribute-title-input"
    //                                     value={testLink}
    //                                     onChange={e => setTestLink(e.target.value)}
    //                                     readOnly={isUser}
    //                                 />
    //                             </div>
    //                         </div> */}

    //                         <div className="attribute-title">
    //                             <div>
    //                                 <abbr title="Đặt giá trị 0 nếu không giới hạn">
    //                                     Số lượt làm bài
    //                                 </abbr>
    //                             </div>
    //                             <div className="title">
    //                                 <Form.Control
    //                                     size="sm"
    //                                     type="number"
    //                                     min="0"
    //                                     ref={inputNumberOfTimesRef}
    //                                     className="attribute-title-input"
    //                                     value={testNumberOfTimes}
    //                                     onChange={e => setTestNumberOfTimes(e.target.value)}
    //                                     readOnly={isUser}
    //                                 />
    //                             </div>
    //                         </div>

    //                         <div className="time-picker">
    //                             <div>Thời gian bắt đầu</div>
    //                             <div className="time-area">
    //                                 <Form.Control
    //                                     size="sm"
    //                                     type="date"
    //                                     ref={startDateRef}
    //                                     value={startDate}
    //                                     onChange={e => setStartDate(e.target.value)}
    //                                     readOnly={isUser}
    //                                 />
    //                                 <Form.Control
    //                                     size="sm"
    //                                     type="time"
    //                                     ref={startTimeRef}
    //                                     value={startTime}
    //                                     onChange={e => setStartTime(e.target.value)}
    //                                     readOnly={isUser}
    //                                 />
    //                             </div>
    //                         </div>

    //                         <div className="time-picker">
    //                             <div>Thời gian kết thúc</div>
    //                             <div className="time-area">
    //                                 <Form.Control
    //                                     size="sm"
    //                                     type="date"
    //                                     ref={endDateRef}
    //                                     value={endDate}
    //                                     onChange={e => setEndDate(e.target.value)}
    //                                     readOnly={isUser}
    //                                 />
    //                                 <Form.Control
    //                                     size="sm"
    //                                     type="time"
    //                                     ref={endTimeRef}
    //                                     value={endTime}
    //                                     onChange={e => setEndTime(e.target.value)}
    //                                     readOnly={isUser}
    //                                 />
    //                             </div>
    //                         </div>
    //                     </>
    //                 }
    //             </div>

    //             <div className="quick-actions d-flex justify-content-center">
    //                 {!isUser &&
    //                     <Button variant="warning" className="w-100"
    //                         onClick={handleSaveClick}>
    //                         Lưu
    //                     </Button>
    //                 }

    //                 <Button variant="danger" className="w-100"
    //                     onClick={handleExit}>
    //                     Thoát
    //                 </Button>
    //             </div>

    //             <div className="confirm-submit">
    //                 <ConfirmModal
    //                     title="Xác nhận"
    //                     content={content}
    //                     isShow={isShowConfirm}
    //                     onAction={handleConfirmModal}
    //                 />
    //             </div>
    //         </div>

    //         <div className="">
    //             <div className="floating-buttons d-flex justify-content-end" id="floating-buttons">
    //                 <Fab
    //                     mainButtonStyles={btnInfoStyles}
    //                     style={{ bottom: '-10px', right: '-10px' }}
    //                     icon={<i className="fa fa-reorder"></i>}
    //                     alwaysShowTitle={true}
    //                     onClick={() => setIsShowTestInfo(true)}
    //                 ></Fab>

    //                 <Fab
    //                     mainButtonStyles={btnExitStyles}
    //                     style={{ bottom: '-10px', right: '40px' }}
    //                     icon={<i className="fa fa-window-close"></i>}
    //                     alwaysShowTitle={true}
    //                     onClick={handleExit}
    //                 ></Fab>
    //             </div>
    //         </div>
    //     </div>

    // )
    //#endregion
}