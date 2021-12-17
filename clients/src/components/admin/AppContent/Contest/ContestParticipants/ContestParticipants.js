import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { ExportDataTakeTest, StatisticSubmitTime, StatisticTakeTest, StatisticTakeTestStatus } from '../data'
import './ContestParticipants.scss'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { getCurrentDatetime } from 'utils/timeUtils'

export default function ContestParticipants() {
    const [takeTestStatistics, setTakeTestStatistics] = useState(null)
    const [statisticsSubmitTime, setStatisticsSubmitTime] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [takeTestStatus, setTakeTestStatus] = useState(null)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: '/statistics',
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    useEffect(() => {
        if (response) {
            const takeTestStatisticsData = StatisticTakeTest(response.data.takeTests)
            setTakeTestStatistics(takeTestStatisticsData)

            const submitTimeStatisticsData = StatisticSubmitTime(response.data.takeTests)
            setStatisticsSubmitTime(submitTimeStatisticsData)

            setTableData(ExportDataTakeTest(response.data.takeTests))

            setTakeTestStatus(StatisticTakeTestStatus(response.data.takeTests))
        }
    }, [response])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Thống kê điểm số các bài thi'
            }
        }
    }

    const submitTimeLineChart = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Thống kê lượt nộp bài theo thời gian'
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    const takeTestStatusDoughnutChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Tỉ lệ phân bổ giữa các bài thi Passed / Failed / Not submitted (%)'
            }
        }
    }

    return (
        <div className="contest-participants">
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
                    <div id="charts">
                        <div className="section-header m-3 h4 d-flex">
                            <i className="fa fa-line-chart me-3"></i>
                            Biểu đồ thống kê
                        </div>

                        <div className="row ps-3 pe-3 chart-data justify-content-around align-item-end">
                            <div className="char-bar col-sm-12 col-md-6 col-lg-4 p-3 d-flex align-items-end">
                                <Bar
                                    data={takeTestStatistics}
                                    options={options}
                                    height="400"
                                    width="500"
                                />
                            </div>

                            <div className="chart-line col-sm-12 col-md-6 col-lg-4 p-3 d-flex align-items-end">
                                <Line
                                    data={statisticsSubmitTime}
                                    options={submitTimeLineChart}
                                    height="400"
                                    width="500"
                                />
                            </div>

                            <div className="chart-pie col-sm-12 col-md-6 col-lg-4 p-3 d-flex align-items-end">
                                <Doughnut
                                    options={takeTestStatusDoughnutChartOptions}
                                    data={takeTestStatus}
                                    height="400"
                                    width="400" />
                            </div>
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
                                fileName={'Danh sách các lượt thi - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.TAKE_TEST.EXAMINEE,
                                    STATISTICS.TAKE_TEST.IS_PASSED
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