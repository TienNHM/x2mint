import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import {
    StatisticSubmitTime,
    StatisticTakeTest,
    StatisticTakeTestStatus
} from 'components/admin/AppContent/Contest/data'
import './StatisticTest.scss'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { getCurrentDatetime } from 'utils/timeUtils'
import { useParams } from 'react-router'
import { StatisticTakeTestsInContest } from 'components/statistics/ContestStatistics'

export default function StatisticContest() {
    let { contestId } = useParams()

    const [takeTestStatistics, setTakeTestStatistics] = useState(null)
    const [statisticsSubmitTime, setStatisticsSubmitTime] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [takeTestStatus, setTakeTestStatus] = useState(null)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: `contests/${contestId}/taketests`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    useEffect(() => {
        if (response) {
            const takeTests = response.takeTests

            // Thống kê điểm số các bài thi
            const takeTestStatisticsData = StatisticTakeTest(cloneDeep(takeTests))
            setTakeTestStatistics(takeTestStatisticsData)

            // Thống kê lượt nộp bài theo thời gian
            const submitTimeStatisticsData = StatisticSubmitTime(cloneDeep(takeTests))
            setStatisticsSubmitTime(submitTimeStatisticsData)

            // Bảng
            setTableData(StatisticTakeTestsInContest(cloneDeep(takeTests)))

            // Tỉ lệ phân bổ giữa các bài thi Passed / Failed / Not submitted (%)
            setTakeTestStatus(StatisticTakeTestStatus(cloneDeep(takeTests)))
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
                                    STATISTICS.TAKE_TEST.IS_PASSED,
                                    STATISTICS.TAKE_TEST._TEST_URL,
                                    STATISTICS.TAKE_TEST._DETAIL
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

                    <div id="charts">
                        <div className="section-header m-3 h4 d-flex">
                            <i className="fa fa-line-chart me-3"></i>
                            Lịch sử làm bài
                        </div>

                        <div className="row ps-3 pe-3 chart-data justify-content-around align-item-end">
                            
                        </div>
                    </div>
                </>
            }
        </div>
    )
}