import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form, InputGroup } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Image from 'react-bootstrap/Image'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { getCurrentDate, getCurrentTime, splitTime } from 'utils/timeUtils'
import { MODAL_ACTION } from 'utils/constants'
import './ModalCreateContest.scss'

function ModalCreateContest({ isShow, onAction, contest, isUpdate }) {

    //#region States
    const [title, setTitle] = useState(' ')
    const [description, setDescription] = useState(' ')
    const [url, setUrl] = useState(' ')
    const [link, setLink] = useState(' ')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [isShowLibrary, setIsShowLibrary] = useState(false)
    //#endregion

    //#region Refs
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const urlRef = useRef(null)
    const startDateRef = useRef(null)
    const endDateRef = useRef(null)
    const startTimeRef = useRef(null)
    const endTimeRef = useRef(null)
    //#endregion

    useEffect(() => {
        if (!contest) return

        setTitle(contest.name)
        setDescription(contest.description)
        setUrl(contest.url)
        setLink(contest.embededMedia)
        if (contest.startTime) {
            const start_time = splitTime(contest.startTime)
            const end_time = splitTime(contest.endTime)
            setStartDate(start_time.date)
            setStartTime(start_time.time)
            setEndDate(end_time.date)
            setEndTime(end_time.time)
        }
        else {
            const start_date = getCurrentDate()
            const start_time = getCurrentTime().slice(0, 5)
            setStartDate(start_date)
            setStartTime(start_time)
            setEndDate(start_date)
            setEndTime(start_time)
        }

    }, [contest])

    const openLibrary = (action, link) => {
        if (action === MODAL_ACTION.CONFIRM) {
            setLink(link)
        }
        setIsShowLibrary(false)
    }

    const handleAction = (action) => {
        if (action === MODAL_ACTION.CLOSE) {
            onAction(isUpdate, MODAL_ACTION.CLOSE)
        }
        else {
            const embededMedia = link
            const start_time = startDate.trim() + 'T' + startTime.trim() + ':00.000Z'
            const end_time = endDate.trim() + 'T' + endTime.trim() + ':00.000Z'
            const str = title + startDate.trim() + startTime.trim() + endDate.trim() + endTime.trim()

            //#region Validate
            if (!title || title === '') {
                toast.error('💢 Vui lòng nhập tên cuộc thi!')
                titleRef.current.focus()
                return
            }
            if (!description || description === '') {
                toast.error('💢 Vui lòng nhập mô tả cuộc thi!')
                descriptionRef.current.focus()
                return
            }
            if (!start_time) {
                toast.error('💢Thời gian bắt đầu cuộc thi không hợp lệ. Vui lòng chọn lại!')
                startDateRef.current.focus()
                return
            }
            if (!end_time || new Date(end_time) < Date.now()) {
                toast.error('💢Thời gian kết thúc cuộc thi không hợp lệ. Vui lòng chọn lại!')
                endDateRef.current.focus()
                return
            }
            if (new Date(end_time) <= new Date(start_time)) {
                toast.error('💢 Thời gian không hợp lệ. Thời gian kết thúc phải diễn ra sau thời gian bắt đầu!')
                endDateRef.current.focus()
                return
            }
            //#endregion

            if (str.length === 0) {
                toast.error('💢 Vui lòng nhập đầy đủ thông tin về cuộc thi')
                onAction(isUpdate, MODAL_ACTION.RETRY)
            }
            else {
                onAction(isUpdate, MODAL_ACTION.CONFIRM,
                    title, description, url, embededMedia,
                    start_time, end_time
                )
            }
        }
    }

    return (
        <>
            <Modal
                size="lg"
                fullscreen={true}
                show={isShow}
                onHide={() => handleAction(MODAL_ACTION.CLOSE)}
                backdrop='static'
                keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title className="h5 fw-bolder">Tạo mới</Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex justify-content-center align-items-center">
                    <div className="contest-info w-100">
                        <div className="body-left">
                            <div className="contest-title-section">
                                <div className="label">Tên</div>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    className="contest-title"
                                    id="contest-title"
                                    placeholder="Nhập tên contest..."
                                    value={title}
                                    ref={titleRef}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="contest-title-section">
                                <div className="label">URL</div>
                                <InputGroup size="sm">
                                    <InputGroup.Text>
                                        {process.env.REACT_APP_DOMAIN + '/'}
                                    </InputGroup.Text>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        className="contest-title"
                                        placeholder="Nhập URL..."
                                        id="contest-url"
                                        value={url}
                                        ref={urlRef}
                                        onChange={e => setUrl(e.target.value)}
                                    />
                                </InputGroup>
                            </div>

                            <div className="contest-description-section">
                                <div className="label">Mô tả</div>
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    rows="6"
                                    className="contest-description"
                                    id="contest-description"
                                    placeholder="Nhập mô tả ngắn cho contest..."
                                    value={description}
                                    ref={descriptionRef}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="datetime-picker">
                                <div className="label">Thời gian bắt đầu</div>
                                <div className="datetime">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={startDate}
                                        ref={startDateRef}
                                        id="startDate"
                                        onChange={e => setStartDate(e.target.value)}
                                        required={true}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={startTime}
                                        ref={startTimeRef}
                                        id="startTime"
                                        onChange={e => setStartTime(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="datetime-picker">
                                <div className="label">Thời gian kết thúc</div>
                                <div className="datetime">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={endDate}
                                        ref={endDateRef}
                                        id="endDate"
                                        onChange={e => setEndDate(e.target.value)}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={endTime}
                                        ref={endTimeRef}
                                        id="endTime"
                                        onChange={e => setEndTime(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="body-right">
                            <div className="label">Ảnh cover</div>

                            <div className="display-image">
                                <Image fluid src={link || process.env.PUBLIC_URL + '/assets/placeholder.png'} />
                            </div>

                            <div className="change-image">
                                <Button size="sm"
                                    variant="warning"
                                    onClick={() => setIsShowLibrary(true)}>
                                    Đổi ảnh
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => handleAction(MODAL_ACTION.CLOSE)}>
                        Đóng
                    </Button>

                    <Button variant="primary"
                        onClick={() => handleAction(MODAL_ACTION.CONFIRM)}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>

            <BrowseLibrary show={isShowLibrary} onAction={openLibrary} />
        </>
    )
}

export default ModalCreateContest