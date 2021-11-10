import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'

function BrowseLibrary({ show, onAction }) {
    return (
        <Modal
            show={show}
            onHide={() => onAction(MODAL_ACTION_CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title className="h6">Chọn ảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>Content</Modal.Body>
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