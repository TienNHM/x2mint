import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import Image from 'components/common/image/Image'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './BrowseLibrary.scss'

function BrowseLibrary({ show, onAction }) {
    const [link, setLink] = useState('')
    const handleLinkChange = (event) => setLink(event.target.value)
    const [query, setQuery] = useState('')
    const handleQueryChange = (event) => setQuery(event.target.value)

    return (
        <Modal
            size="lg"
            show={show}
            fullscreen={true}
            onHide={() => onAction(MODAL_ACTION_CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title className="h6">Chọn ảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="top-modal">
                    <div className="search-area">
                        <div>Tìm kiếm: </div>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Nhập từ khóa tìm kiếm..."
                            className="text-input"
                            value={query}
                            onChange={handleQueryChange}
                        />
                    </div>
                    <div className="link-input-area">
                        <div>Link ảnh: </div>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Link trực tiếp đến ảnh (JPG, JPEG, PNG, GIF, SVG...)"
                            className="text-input"
                            value={link}
                            onChange={handleLinkChange}
                        />
                    </div>
                </div>
                <div className="search-result">
                    <h6>Kết quả tìm kiếm</h6>
                    <div className="list-result-images">
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BrowseLibrary