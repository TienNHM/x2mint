import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import BrowseLibrary from 'components/common/browseLibrary/BrowseLibrary'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './ModalCreateContest.scss'

function ModalCreateContest({ isShow, onAction }) {
    const contestTitleRef = useRef(null)
    const contestDescriptionRef = useRef(null)
    const [isShowLibrary, setIsShowLibrary] = useState(false)
    const [link, setLink] = useState('')

    const openLibrary = (action, photo) => {
        if (action === MODAL_ACTION_CONFIRM) {
            setLink(photo.src.medium)
        }
        setIsShowLibrary(false)
    }

    return (
        <>
            <Modal
                size="lg"
                show={isShow}
                onHide={() => onAction(MODAL_ACTION_CLOSE)}
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
                                    ref={contestTitleRef}
                                />
                            </div>
                            <div className="contest-description-section">
                                <div className="label">Mô tả</div>
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    rows="8"
                                    className="contest-description"
                                    placeholder="Nhập mô tả ngắn cho contest..."
                                    ref={contestDescriptionRef}
                                />
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
                    <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
            <BrowseLibrary show={isShowLibrary} onAction={openLibrary} />
        </>
    )
}

export default ModalCreateContest