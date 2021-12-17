import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
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
                        <i className="fa fa-map-signs me-3"></i>
                        Tổng quan
                    </div>

                    <div className="overview row ps-3 pe-3 d-flex align-items-center justify-content-center">
                        <div className="col-sm-6 col-md-3 mt-2 mb-2">
                            <Card
                                bg="success" text="light"
                                className="m-1 shadow-lg"
                            >
                                <Card.Header>
                                    <div className="tooltip-component">
                                        Số cuộc thi
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số cuộc thi hiện có. <i>(Bao gồm cả các cuộc thi đã được lưu trữ).</i>
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {data.contests.length}
                                        </span>
                                        <img src="https://img.icons8.com/fluency/48/000000/categorize.png" />
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-6 col-md-3 mt-2 mb-2">
                            <Card
                                bg="info" text="light"
                                className="m-1 shadow-lg"
                            >
                                <Card.Header>
                                    <div className="tooltip-component">
                                        Số bài test
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số bài kiểm tra hiện có trên hệ thống.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {data.tests.length}
                                        </span>
                                        <img src="https://img.icons8.com/external-flat-geotatah/48/000000/external-battle-gamification-flat-flat-geotatah.png" />
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-6 col-md-3 mt-2 mb-2">
                            <Card
                                bg="primary" text="light"
                                className="m-1 shadow-lg"
                            >
                                <Card.Header>
                                    <div className="tooltip-component">
                                        Số lượt thi
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số lượt thí sinh tham gia làm bài kiểm tra trên hệ thống.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {data.takeTests.length}
                                        </span>
                                        <img src="https://img.icons8.com/fluency/48/000000/test-passed.png" />
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-6 col-md-3 mt-2 mb-2">
                            <Card
                                bg="danger" text="light"
                                className="m-1 shadow-lg"
                            >
                                <Card.Header>
                                    <div className="tooltip-component">
                                        Số câu hỏi
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số câu hỏi đã được tạo trên hệ thống.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {data.questions.length}
                                        </span>
                                        <img src="https://img.icons8.com/fluency/48/000000/where-to-quest.png" />
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="section-header m-3 h4 d-flex">
                        <i className="fa fa-line-chart me-3"></i>
                        Biểu đồ thống kê
                    </div>

                    <div className="chart-data row ps-3 pe-3 d-flex justify-content-around m-4 align-item-end">
                        <div className="char-bar col-sm-12 col-md-6 p-3 d-flex align-items-end">
                            <Bar
                                data={takeTestStatistics}
                                options={options}
                                height="400"
                                width="500"
                            />
                        </div>

                        <div className="chart-line col-sm-12 col-md-6 p-3 d-flex align-items-end">
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