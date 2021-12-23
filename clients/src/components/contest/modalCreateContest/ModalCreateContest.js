import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, InputGroup } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Image from 'react-bootstrap/Image'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { splitTime } from 'utils/timeUtils'
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

    useEffect(() => {
        if (!contest) return

        setTitle(contest.name)
        setDescription(contest.description)
        setUrl(contest.url)
        setLink(contest.embededMedia)
        const start_time = splitTime(contest.startTime)
        const end_time = splitTime(contest.endTime)
        setStartDate(start_time.date)
        setStartTime(start_time.time)
        setEndDate(end_time.date)
        setEndTime(end_time.time)
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
            const str = startDate.trim() + startTime.trim() + endDate.trim() + endTime.trim()
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
                                    placeholder="Nhập tên contest..."
                                    value={title}
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
                                        value={url}
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
                                    placeholder="Nhập mô tả ngắn cho contest..."
                                    value={description}
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
                                        onChange={e => setStartDate(e.target.value)}
                                        required={true}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={startTime}
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
                                        onChange={e => setEndDate(e.target.value)}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={endTime}
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