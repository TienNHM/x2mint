import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact'
import { MODAL_ACTION_CLOSE } from 'utils/constants'
import { SAMPLE_DATA } from './data.js'
import './StatisticTest.scss'

export default function StatisticTest({ isShow, onAction, test }) {
    if (test === null) return null

    const start_time = test.start_time.split(' ')
    const end_time = test.end_time.split(' ')

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
                    <Modal.Title className="h5 fw-bolder">Thống kê</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="test-info">
                        <div className="body-left">
                            <div className="contest-description-section">
                                <div className="label">Mô tả</div>
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    rows="6"
                                    className="contest-description"
                                    value={test.description}
                                    readOnly={true}
                                />
                            </div>
                            <div className="datetime-picker">
                                <div className="label">Thời gian bắt đầu</div>
                                <div className="datetime">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={start_time[0]}
                                        readOnly={true}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={start_time[1]}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="datetime-picker">
                                <div className="label">Thời gian kết thúc</div>
                                <div className="datetime">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={end_time[0]}
                                        readOnly={true}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={end_time[1]}
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="body-right">
                            <div className="h3 fw-bolder text-center">{test.name}</div>
                            <MDBDataTableV5
                                hover narrow striped small bordered
                                entriesOptions={[10, 25, 50, 100]}
                                entries={10}
                                pagesAmount={4}
                                data={SAMPLE_DATA}
                                materialSearch
                            />
                        </div>
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