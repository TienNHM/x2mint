import React, { useEffect, useState } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import './Dashboard.scss'
import Chart from 'chart.js/auto'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { StatisticTakeTest } from '../Contest/data'

export default function Dashboard() {
    const [data, setData] = useState(null)
    const [takeTestStatistics, setTakeTestStatistics] = useState(null)

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

                    <div className="overview d-flex align-items-center justify-content-center">
                        <Card
                            bg="success" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số người dùng</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.users.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/user-group-man-woman.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số người dùng trên hệ thống hiện tại.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="info" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số cuộc thi</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.contests.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/categorize.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số cuộc thi hiện có. <i>(Bao gồm cả các cuộc thi đã được lưu trữ).</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="primary" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số bài kiểm tra</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.tests.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/where-to-quest.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số bài kiểm tra hiện có trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="danger" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Số lượt thi</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.takeTests.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/test-passed.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số lượt thí sinh tham gia làm bài kiểm tra trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="section-header m-3 h4 d-flex">
                        <i className="fa fa-line-chart me-3"></i>
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
                                data={{
                                    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                                    datasets: [
                                        {
                                            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                            label: 'Africa',
                                            borderColor: '#3e95cd',
                                            fill: false
                                        },
                                        {
                                            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                            label: 'Asia',
                                            borderColor: '#8e5ea2',
                                            fill: false
                                        },
                                        {
                                            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                            label: 'Europe',
                                            borderColor: '#3cba9f',
                                            fill: false
                                        },
                                        {
                                            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                            label: 'Latin America',
                                            borderColor: '#e8c3b9',
                                            fill: false
                                        },
                                        {
                                            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                            label: 'North America',
                                            borderColor: '#c45850',
                                            fill: false
                                        }
                                    ]
                                }}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: 'bottom'
                                        },
                                        title: {
                                            display: true,
                                            text: 'Thống kê'
                                        }
                                    }
                                }}
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