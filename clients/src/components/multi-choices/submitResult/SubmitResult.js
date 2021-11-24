import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact'
import { MODAL_ACTION_CLOSE } from 'utils/constants'
import exportData from './data.js'
import { initialTakeTest } from 'actions/initialData'
import './SubmitResult.scss'

export default function SubmitResult({ isShow = true, onAction }) {
    const takeTest = { ...initialTakeTest }
    const submitTime = takeTest.submitTime.split(' ')
    const data = exportData(takeTest)

    return (
        <>
            <Modal
                size="lg"
                fullscreen={true}
                show={isShow}
                onHide={() => onAction(MODAL_ACTION_CLOSE)}
                backdrop='static'
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="fw-bolder">{takeTest.testName}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="take-test-info">
                        <div className="duration">
                            <div className="date-time-picker">
                                <div className="label">
                                    Thời gian nộp bài:
                                    <span className="fw-light"> <i>(Nộp đúng hạn)</i></span>
                                </div>
                                <div className="row">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={submitTime[0]}
                                        readOnly={true}
                                        style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={submitTime[1]}
                                        readOnly={true}
                                        style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                    />
                                </div>
                            </div>
                            <div className="date-time-picker">
                                <div className="label">Điểm số:</div>
                                <div className="row">
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        value={takeTest.points}
                                        readOnly={true}
                                        style={{ width: '80px', margin: '5px', textAlign: 'center' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <MDBDataTableV5
                            hover striped bordered
                            entriesOptions={[10, 25, 50, 100]}
                            entries={10}
                            pagesAmount={4}
                            data={data}
                            materialSearch
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}