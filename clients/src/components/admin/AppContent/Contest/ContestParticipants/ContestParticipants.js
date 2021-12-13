import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import { Card } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { StatisticSubmitTime, StatisticTakeTest } from '../data'
import './ContestParticipants.scss'

export default function ContestParticipants() {
    const [takeTestStatistics, setTakeTestStatistics] = useState(null)
    const [statisticsSubmitTime, setStatisticsSubmitTime] = useState(null)

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
                </>
            }
        </div>
    )
}