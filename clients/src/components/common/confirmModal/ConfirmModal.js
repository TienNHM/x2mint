import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import HTMLReactParser from 'html-react-parser'
import { MODAL_ACTION } from 'utils/constants'

function ConfirmModal({ title, content, isShow, onAction }) {
    return (
        <Modal
            show={isShow}
            onHide={() => onAction(MODAL_ACTION.CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton className="d-flex justify-content-center">
                <Modal.Title>
                    {HTMLReactParser(title || 'Xác nhận')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{HTMLReactParser(content)}</Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={() => onAction(MODAL_ACTION.CLOSE)}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => onAction(MODAL_ACTION.CONFIRM)}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal