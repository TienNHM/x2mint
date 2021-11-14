import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import HTMLReactParser from 'html-react-parser'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'

function ConfirmModal({ title, content, isShow, onAction }) {
    return (
        <Modal
            show={isShow}
            onHide={() => onAction(MODAL_ACTION_CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title className="h5">{HTMLReactParser(title || 'Xác nhận')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{HTMLReactParser(content)}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal