import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { getCurrentDatetime } from 'utils/timeUtils'
import { ExportBills, GetTotalAmount, StatisticBills } from './data'
import { Chart } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'

export default function Revenue() {
    const [tableData, setTableData] = useState(null)
    const [billsStatistic, setBillsStatistic] = useState(null)
    const [totalAmount, setTotalAmount] = useState(0)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: '/bills',
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    useEffect(() => {
        if (response) {
            const bills = response.bills
            setBillsStatistic(StatisticBills(bills))
            setTableData(ExportBills(bills))
            setTotalAmount(GetTotalAmount(bills))
        }
    }, [response])

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Thống kê doanh thu theo thời gian',
                position: 'bottom'
            }
        }
    }

    return (
        <div className="account-permissions">
            {loading &&
                <div
                    className='sweet-loading d-flex justify-content-center align-items-center'
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 100
                    }}>
                    <HashLoader color={'#7ED321'} loading={loading} />
                </div>
            }

            {!loading &&
                <>
                    <div className="section-header m-3 h4 d-flex justify-content-center">
                        <i className="fa fa-map-signs me-3"></i>
                        Tổng doanh thu toàn thời gian
                    </div>
                    <div className="m-2 p-2">
                        <Card
                            bg="success" text="light"
                            className="m-1 shadow-lg"
                        >
                            <Card.Header>
                                <div className="tooltip-component">
                                    Tổng doanh thu
                                    <i className="fa fa-info-circle ms-2"></i>
                                    <span className="tooltiptext">
                                        Tổng doanh thu đến thời điểm hiện tại.
                                    </span>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {totalAmount} VNĐ
                                    </span>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="section-header m-3 h4 d-flex justify-content-center">
                        <i className="fa fa-map-signs me-3"></i>
                        Thống kê doanh thu theo thời gian
                    </div>
                    <div className="chart-data row ps-3 pe-3 d-flex justify-content-around m-4">
                        <div className="chart-line col p-3 d-flex align-items-end">
                            <Chart
                                data={billsStatistic}
                                options={chartOptions}
                            />
                        </div>
                    </div>

                    <div id="table-data">
                        <div className="section-header m-3 h4 d-flex">
                            <i className="fa fa-list me-3"></i>
                            Danh sách
                        </div>

                        <div>
                            <ExportToExcel
                                apiData={cloneDeep(tableData.rows)}
                                fileName={'Thống kê doanh thu - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.BILL._USER,
                                    STATISTICS.BILL._STATUS
                                ]}
                            />
                        </div>

                        <div className="p-3">
                            <MDBDataTableV5
                                hover striped bordered
                                entriesOptions={[10, 25, 50, 100]}
                                entries={10}
                                pagesAmount={4}
                                data={tableData}
                                materialSearch scrollX
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}