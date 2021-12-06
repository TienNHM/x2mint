import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact'
import { ACCESS_TOKEN, MODAL_ACTION_CLOSE } from 'utils/constants'
import exportData from './data.js'
import { ExportToExcel } from 'utils/ExportToExcel'
import './SubmitResult.scss'
import { Navigate, useParams } from 'react-router'
import { useAxios } from 'actions/useAxios.js'
import Cookies from 'js-cookie'
import { HashLoader } from 'react-spinners'

export default function SubmitResult() {
    let { takeTestId } = useParams()
    const {
        response,
        loading,
        error
    } = useAxios({
        method: 'GET',
        url: `/submit/${takeTestId}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    const [takeTest, setTakeTest] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        if (response) {
            setTakeTest(response.data)
            console.log(response.data)
            setData(exportData(response.data))
        }
    }, [response])

    return (
        <>
            <Modal
                size="lg"
                fullscreen={true}
                show={true}
                backdrop='static'
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title>
                        <span className="fw-bolder">{takeTest && takeTest.test.testName}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? (
                        <div className='sweet-loading'>
                            <HashLoader color={'#7ED321'} loading={loading} />
                        </div>
                    ) : (
                        <div className="take-test-info">
                            <div className="duration d-flex align-items-end">
                                <div>
                                    <div className="label">
                                        Thời gian nộp bài:
                                        <span className="fw-light"> <i>(Nộp đúng hạn)</i></span>
                                    </div>
                                    <div className="row">
                                        <Form.Control
                                            size="sm"
                                            type="date"
                                            value={takeTest.submitTime.split('T')[0]}
                                            readOnly={true}
                                            style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                        />
                                        <Form.Control
                                            size="sm"
                                            type="time"
                                            value={takeTest.submitTime.split('T')[1].slice(0, 5)}
                                            readOnly={true}
                                            style={{ width: '140px', margin: '5px', textAlign: 'center' }}
                                        />
                                    </div>
                                </div>
                                <div>
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
                                <div>
                                    <ExportToExcel
                                        apiData={data.rows}
                                        fileName={takeTest.user.username + ' ' + takeTest.submitTime}
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
                                />
                            </div>
                        </div>
                    )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        href="/contest"
                    >
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}