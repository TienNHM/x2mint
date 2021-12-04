import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useAlert } from 'react-alert'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { splitTime } from 'utils/timeUtils'
import {
    MODAL_ACTION_CONFIRM,
    MODAL_ACTION_CLOSE,
    MODAL_ACTION_RETRY
} from 'utils/constants'
import './ModalCreateContest.scss'

function ModalCreateContest({ isShow, onAction, contest, isUpdate }) {
    const [title, setTitle] = useState(' ')
    const [description, setDescription] = useState(' ')
    const [url, setUrl] = useState(' ')
    const [link, setLink] = useState(' ')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [isShowLibrary, setIsShowLibrary] = useState(false)
    const alert = useAlert()

    useEffect(() => {
        console.log('contest', contest)
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

    const openLibrary = (action, photo) => {
        if (action === MODAL_ACTION_CONFIRM) {
            setLink(photo.src.medium)
        }
        setIsShowLibrary(false)
    }

    const handleAction = (action) => {
        if (action === MODAL_ACTION_CLOSE) {
            onAction(isUpdate, MODAL_ACTION_CLOSE)
        }
        else {
            const embededMedia = link
            const start_time = startDate + ' ' + startTime
            const end_time = endDate + ' ' + endTime
            const str = startDate.trim() + startTime.trim() + endDate.trim() + endTime.trim()
            console.log(str.length)
            if (str.length === 0) {
                alert.error('Vui lòng nhập đầy đủ thông tin về cuộc thi')
                onAction(isUpdate, MODAL_ACTION_RETRY)
            }
            else {
                onAction(isUpdate, MODAL_ACTION_CONFIRM, title, description, url, embededMedia, start_time, end_time)
            }
        }
    }

    return (
        <>
            <Modal
                size="lg"
                show={isShow}
                onHide={() => handleAction(MODAL_ACTION_CLOSE)}
                backdrop='static'
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="h5 fw-bolder">Tạo mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="contest-info">
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
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    className="contest-title"
                                    placeholder="Nhập URL..."
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                />
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
                                <Image fluid src={link || 'https://sites.udel.edu/machineshop/wp-content/themes/oria/images/placeholder.png'} />
                            </div>
                            <div className="change-image">
                                <Button size="sm" variant="warning" onClick={() => setIsShowLibrary(true)}>
                                    Đổi ảnh
                                </Button>{' '}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleAction(MODAL_ACTION_CLOSE)}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleAction(MODAL_ACTION_CONFIRM)}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
            <BrowseLibrary show={isShowLibrary} onAction={openLibrary} />
        </>
    )
}

export default ModalCreateContest