import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2'
import { HashLoader } from 'react-spinners'
import { COLOR } from 'utils/colors'
import { COOKIES, ROLE } from 'utils/constants'
import { StatisticAccountSignUp, StatisticAccountOverview } from '../data'
import './AccountStatistics.scss'

export default function AccountStatistics() {
    const [data, setData] = useState(null)
    const [overview, setOverview] = useState(null)
    const [signupStatistics, setSignupStatistics] = useState(null)

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

            const signupStatisticsData = StatisticAccountSignUp(response.data)
            setSignupStatistics(signupStatisticsData)
            console.log('signupStatisticsData', signupStatisticsData)

            setOverview(StatisticAccountOverview(response.data))
        }
    }, [response])

    const signupLineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Thống kê số lượng tài khoản đăng ký mới'
            }
        }
    }

    const usertypePieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Tỉ lệ phân bổ giữa các loại tài khoản trong hệ thống (%)'
            }
        }
    }

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
                                    <img src="https://img.icons8.com/color/48/000000/student-male.png"/>
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
                                    <img src="https://img.icons8.com/color/48/000000/female-teacher.png"/>
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
                                    <img src="https://img.icons8.com/fluent/48/000000/microsoft-admin.png"/>
                                </Card.Title>
                                <Card.Text>
                                    Tổng số Admins trên hệ thống.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="section-header m-3 h4 d-flex">
                        <i className="fa fa-line-chart me-3"></i>
                        Biểu đồ thống kê
                    </div>

                    <div className="chart-data d-flex justify-content-around m-4 align-item-end">
                        <div className="chart-line">
                            <Line
                                data={signupStatistics}
                                options={signupLineChartOptions}
                                height="400"
                                width="500"
                            />
                        </div>

                        <div className="chart-pie">
                            <Pie
                                options={usertypePieChartOptions}
                                data={{
                                    labels: ['User', 'Creator', 'Admin'],
                                    datasets: [
                                        {
                                            label: 'Tỉ lệ (%)',
                                            data: [
                                                overview[ROLE.USER],
                                                overview[ROLE.CREATOR],
                                                overview[ROLE.ADMIN]
                                            ].map(x => x * 100 / data.length),
                                            backgroundColor: COLOR.BREWER.YELLOW_GREEN_BLUE.YlGnBu3,
                                            borderWidth: 1,
                                            hoverBorderColor: COLOR.BREWER.YELLOW_GREEN_BLUE.YlGnBu3
                                        }
                                    ]
                                }}
                                height="400"
                                width="400" />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}