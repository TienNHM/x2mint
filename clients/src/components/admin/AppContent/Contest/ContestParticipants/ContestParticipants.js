import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import { Card } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { ExportDataTakeTest, StatisticSubmitTime, StatisticTakeTest } from '../data'
import './ContestParticipants.scss'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'

export default function ContestParticipants() {
    const [takeTestStatistics, setTakeTestStatistics] = useState(null)
    const [statisticsSubmitTime, setStatisticsSubmitTime] = useState(null)
    const [tableData, setTableData] = useState(null)

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
            console.log('response', response.data)

            const takeTestStatisticsData = StatisticTakeTest(response.data.takeTests)
            setTakeTestStatistics(takeTestStatisticsData)
            console.log('takeTestStatistics', takeTestStatisticsData)

            const submitTimeStatisticsData = StatisticSubmitTime(response.data.takeTests)
            setStatisticsSubmitTime(submitTimeStatisticsData)
            console.log('signupStatisticsData', submitTimeStatisticsData)

            setTableData(ExportDataTakeTest(response.data.takeTests))
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
                            Biểu đồ thống kê
                        </div>

                        <div className="chart-data d-flex justify-content-around m-4 align-item-end">
                            <div className="char-bar">
                                <Bar
                                    data={takeTestStatistics}
                                    options={options}
                                    height="400"
                                    width="500"
                                />
                            </div>

                            <div className="chart-line">
                                <Line
                                    data={statisticsSubmitTime}
                                    options={submitTimeLineChart}
                                    height="400"
                                    width="500"
                                />
                            </div>
                        </div>
                    </div>

                    <div id="table-data">
                        <div className="section-header m-3 h4 d-flex">
                            Danh sách
                        </div>

                        <div>
                            <ExportToExcel
                                apiData={cloneDeep(tableData.rows)}
                                fileName={Date.now().toString()}
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
                                materialSearch
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}