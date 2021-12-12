import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './ContestStatistics.scss'
import Chart from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { StatisticSubmitTime, StatisticTakeTest } from '../data'

export default function ContestStatistics() {
    const [data, setData] = useState(null)
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
            setData(response.data)
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
        <div className="account-register">

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
                        Tổng quan
                    </div>

                    <div className="overview d-flex align-items-center justify-content-center">
                        <Card
                            bg="success" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số cuộc thi</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.contests.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/user-group-man-woman.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số cuộc thi hiện có. <i>(Bao gồm cả các cuộc thi đã được lưu trữ).</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="info" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số bài kiểm tra</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.tests.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/categorize.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số bài kiểm tra hiện có trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="primary" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số lượt thi</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.takeTests.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/where-to-quest.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số lượt thí sinh tham gia làm bài kiểm tra trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="danger" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số câu hỏi</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.questions.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/test-passed.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số câu hỏi đã được tạo trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

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