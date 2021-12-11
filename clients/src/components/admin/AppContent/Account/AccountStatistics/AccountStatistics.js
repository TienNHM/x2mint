import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import { HashLoader } from 'react-spinners'
import { COOKIES, ROLE } from 'utils/constants'
import { StatisticAccount, StatisticAccountOverview } from '../data'
import './AccountStatistics.scss'

export default function AccountStatistics() {
    const [data, setData] = useState(null)
    const [overview, setOverview] = useState(null)
    const [takeTestStatistics, setTakeTestStatistics] = useState(null)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: '/users',
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    useEffect(() => {
        if (response) {
            setData(response.data)
            console.log('response', response.data)

            const usersStatisticsData = StatisticAccount(response.data)
            setTakeTestStatistics(usersStatisticsData)
            console.log('usersStatisticsData', usersStatisticsData)

            setOverview(StatisticAccountOverview(response.data))
        }
    }, [response])

    return (
        <div className="account-statistics">
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
                            <Card.Header>Số người dùng</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {data.length}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/user-group-man-woman.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số người dùng trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="info" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Examinee</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {overview[ROLE.USER]}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/categorize.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số Examinees trong hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="primary" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Creators</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {overview[ROLE.CREATOR]}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/where-to-quest.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số Creators hiện có trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg="danger" text="light"
                            style={{ width: '18rem', height: '11rem' }}
                            className="mb-2 shadow-lg"
                        >
                            <Card.Header>Admins</Card.Header>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-around">
                                    <span className="h1 number">
                                        {overview[ROLE.ADMIN]}
                                    </span>
                                    <img src="https://img.icons8.com/fluency/48/000000/test-passed.png" />
                                </Card.Title>
                                <Card.Text>
                                    Tổng số Admins trên hệ thống.
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
                                options={{
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
                                }}
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