import React, { useEffect, useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { MDBDataTableV5 } from 'mdbreact'
import { COOKIES } from 'utils/constants'
import exportData from './data.js'
import { ExportToExcel } from 'utils/ExportToExcel'
import './SubmitResult.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from 'actions/useAxios.js'
import Cookies from 'js-cookie'
import { HashLoader } from 'react-spinners'
import { splitTime } from 'utils/timeUtils'

export default function SubmitResult() {
    let { takeTestId } = useParams()
    let navigate = useNavigate()

    const {
        response: responseTakeTest,
        loading: loadingTakeTest
    } = useAxios({
        method: 'GET',
        url: `/takeTest/${takeTestId}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const {
        response: responseTakeTestLogs,
        loading: loadingTakeTestLogs
    } = useAxios({
        method: 'GET',
        url: `/takeTest/${takeTestId}/logs`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    if (document.fullscreenElement) {
        document.exitFullscreen()
    }

    const [takeTest, setTakeTest] = useState(null)
    const [takeTestData, setTakeTestData] = useState(null)
    //const [takeTestLogs, setTakeTestLogs] = useState(null)
    const [takeTestLogsData, setTakeTestLogsData] = useState(null)

    useEffect(() => {
        if (responseTakeTest) {
            setTakeTest(responseTakeTest.data)
            setTakeTestData(exportData(responseTakeTest.data))
        }
    }, [responseTakeTest])

    useEffect(() => {
        if (responseTakeTestLogs) {
            const data = responseTakeTestLogs.data
            //setTakeTestLogs(data)
            if (data) {
                const logs = data.logs.map(value => {
                    const { time, action } = value
                    const datatime = splitTime(time)
                    return {
                        date: datatime.date,
                        time: datatime.time,
                        action: action
                    }
                })
                setTakeTestLogsData(logs)
            }
            else setTakeTestLogsData([])
        }
    }, [responseTakeTestLogs])

    return (
        <>
            <Modal
                size="lg"
                fullscreen={true}
                show={true}
                onHide={() => navigate(-2)}
                backdrop='static'
                keyboard={false}>
                <Modal.Header closeButton className="d-flex justify-content-center">
                    <Modal.Title>
                        <span className="fw-bolder">{takeTest && takeTest.test.name}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(loadingTakeTest || loadingTakeTestLogs) && (
                        <div className='sweet-loading'>
                            <HashLoader color={'#7ED321'} loading={loadingTakeTest} />
                        </div>
                    )}

                    {!loadingTakeTest && !loadingTakeTestLogs &&
                        <div className="row">
                            <div className="take-test-info col-lg-6 col-12">
                                <div className="duration d-flex align-items-end row">
                                    <div className="col-12 col-lg-6">
                                        <div className="label">
                                            Thời gian nộp bài:
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
                                    <div className="col-6 col-lg-3">
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
                                    <div className="col-6 col-lg-3 d-flex justify-content-end">
                                        <div>
                                            <ExportToExcel
                                                apiData={takeTestData.rows}
                                                fileName={takeTest.user.username + ' ' + takeTest.submitTime}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="data-table">
                                    <MDBDataTableV5
                                        hover striped bordered
                                        entriesOptions={[10, 25, 50, 100]}
                                        entries={10}
                                        pagesAmount={4}
                                        data={takeTestData}
                                        materialSearch scrollX
                                    />
                                </div>
                            </div>

                            <div className="take-test-logs col-lg-6 col-12">
                                <div className="fw-bolder">Lịch sử làm bài</div>
                                <ul className="logs" style={{ listStyle: 'square', lineHeight: '2' }}>
                                    {takeTestLogsData.map((value, index) => {
                                        return (
                                            <li key={index}>
                                                <span>
                                                    <span className="bg-info text-light px-1 mx-1">
                                                        {value.time}
                                                    </span>
                                                    <span className="bg-success text-light px-1 mx-1">
                                                        {value.date}
                                                    </span>
                                                </span>
                                                <span>{value.action}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}