import React, { useRef, useState } from 'react'
import { Button, Modal, Form, Overlay, Popover } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact'
import { MODAL_ACTION_CLOSE } from 'utils/constants'
import { SAMPLE_DATA } from './data.js'
import './StatisticTest.scss'

export default function StatisticTest({ isShow, onAction, test }) {
    const [show, setShow] = useState(false)
    const target = useRef(null)

    if (test === null) return null

    const start_time = test.startTime.split(' ')
    const end_time = test.endTime.split(' ')

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
                        <span className="fw-bolder">{test.name}</span>
                        <Button variant="information"
                            style={{ marginLeft: '5px', boxShadow: 'none', 'color': '#71bef1' }}
                            ref={target}
                            size="sm"
                            onClick={() => setShow(!show)}>
                            <i className="fa fa-info-circle"></i>
                        </Button>
                        <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={target}
                            containerPadding={20}
                        >
                            <Popover id="popover-contained">
                                <Popover.Header as="h3">Thông tin về bài test</Popover.Header>
                                <Popover.Body>
                                    <strong>{test.description}</strong>
                                </Popover.Body>
                            </Popover>
                        </Overlay>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="test-info">
                        <div className="duration">
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
                        <MDBDataTableV5
                            hover striped bordered
                            entriesOptions={[10, 25, 50, 100]}
                            entries={10}
                            pagesAmount={4}
                            data={SAMPLE_DATA}
                            materialSearch
                            fullPagination
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