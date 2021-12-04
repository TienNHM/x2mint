import React, { useRef, useState } from 'react'
import { Button, Modal, Form, Overlay, Popover } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { MODAL_ACTION_CLOSE } from 'utils/constants'
import exportData from './data.js'
import SubmitResult from 'components/multi-choices/submitResult/SubmitResult'
import './StatisticTest.scss'

export default function StatisticTest({ isShow, onAction, test }) {
    const [show, setShow] = useState(false)
    const [isShowSubmitPage, setIsShowSubmitPage] = useState(false)
    const target = useRef(null)

    if (test === null) return null

    const startTime = test.startTime.split(' ')
    const endTime = test.endTime.split(' ')

    const data = exportData(null, setIsShowSubmitPage) //TODO export data

    const handleAction = (action) => {
        if (action === MODAL_ACTION_CLOSE) {
            setIsShowSubmitPage(false)
        }
    }

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
                        <div className="duration d-flex align-items-end">
                            <div>
                                <div className="label">Thời gian bắt đầu</div>
                                <div className="row">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={startTime[0]}
                                        readOnly={true}
                                        style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={startTime[1]}
                                        readOnly={true}
                                        style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="label">Thời gian kết thúc</div>
                                <div className="row">
                                    <Form.Control
                                        size="sm"
                                        type="date"
                                        value={endTime[0]}
                                        readOnly={true}
                                        style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                    />
                                    <Form.Control
                                        size="sm"
                                        type="time"
                                        value={endTime[1]}
                                        readOnly={true}
                                        style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <ExportToExcel
                                    //TODO: Custom export
                                    apiData={data.rows}
                                    fileName={'data'}
                                />
                            </div>
                        </div>
                        <div className="data-table">
                            <MDBDataTableV5
                                hover striped bordered
                                entriesOptions={[10, 25, 50, 100]}
                                entries={10}
                                pagesAmount={4}
                                data={data}
                                materialSearch
                                fullPagination
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

            <SubmitResult
                isShow={isShowSubmitPage}
                onAction={handleAction}
            />
        </>
    )
}