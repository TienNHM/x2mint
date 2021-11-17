import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './ModalCreateContest.scss'

function ModalCreateContest({ isShow, onAction, contest, isUpdate }) {
    const [title, setTitle] = useState(' ')
    const [description, setDescription] = useState(' ')
    const [url, setUrl] = useState(' ')
    const [link, setLink] = useState(' ')
    const startDateRef = useRef(' ')
    const startTimeRef = useRef(' ')
    const endDateRef = useRef(' ')
    const endTimeRef = useRef(' ')
    const [isShowLibrary, setIsShowLibrary] = useState(false)

    useEffect(() => {
        setTitle(contest.name)
        setDescription(contest.description)
        setUrl(contest.url)
        setLink(contest.embeded_media)
    }, [contest])

    const openLibrary = (action, photo) => {
        if (action === MODAL_ACTION_CONFIRM) {
            setLink(photo.src.medium)
        }
        setIsShowLibrary(false)
    }

    const handleAction = (action) => {
        const embeded_media = link
        const start_time = (startDateRef.current.value | '') + ' ' + (startTimeRef.current.value | '')
        const end_time = (endDateRef.current.value | '') + ' ' + (endTimeRef.current.value | '')
        onAction(isUpdate, action, title, description, url, embeded_media, start_time, end_time)
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
                                        ref={startDateRef}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        ref={startTimeRef}
                                    />
                                </div>
                            </div>
                            <div className="datetime-picker">
                                <div className="label">Thời gian kết thúc</div>
                                <div className="datetime">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        ref={endDateRef}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        ref={endTimeRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="body-right">
                            <div className="label">Ảnh cover</div>
                            <div className="display-image">
                                <Image src={link || 'https://sites.udel.edu/machineshop/wp-content/themes/oria/images/placeholder.png'} />
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
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
            <BrowseLibrary show={isShowLibrary} onAction={openLibrary} />
        </>
    )
}

export default ModalCreateContest