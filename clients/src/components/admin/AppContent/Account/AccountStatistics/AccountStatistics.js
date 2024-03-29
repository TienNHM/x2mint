import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Line, Pie } from 'react-chartjs-2'
import { HashLoader } from 'react-spinners'
import { COLOR } from 'utils/colors'
import { ACCOUNT_TYPES, COOKIES, ROLE } from 'utils/constants'
import {
    StatisticAccountSignUp,
    StatisticUserRoleOverview,
    StatisticUserTypeOverview
} from '../data'
import './AccountStatistics.scss'

export default function AccountStatistics() {
    const [data, setData] = useState(null)
    const [userRoleOverview, setUserRoleOverview] = useState(null)
    const [userTypeOverview, setUserTypeOverview] = useState(null)
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

            const signupStatisticsData = StatisticAccountSignUp(response.data)
            setSignupStatistics(signupStatisticsData)

            setUserRoleOverview(StatisticUserRoleOverview(response.data))
            setUserTypeOverview(StatisticUserTypeOverview(response.data))
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
                text: 'Thống kê số lượng tài khoản đăng ký mới',
                position: 'bottom'
            }
        }
    }

    const userRolePieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Tỉ lệ các tài khoản được phân quyền trong hệ thống (%)',
                position: 'bottom'
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
                text: 'Tỉ lệ phân bổ các loại tài khoản trong hệ thống (%)',
                position: 'bottom'
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

                    <div className="overview row ps-3 pe-3 d-flex align-items-center justify-content-center">
                        <div className="col-sm-6 col-md-3 mt-2 mb-2">
                            <Card
                                bg="success" text="light"
                                className="m-1 shadow-lg"
                            >
                                <Card.Header>
                                    <div className="tooltip-component">
                                        Số người dùng
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số người dùng trên hệ thống hiện tại.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {data.length}
                                        </span>
                                        <img src="https://img.icons8.com/fluency/48/000000/user-group-man-woman.png" />
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
                                        Số thí sinh
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số thí sinh trên hệ thống hiện tại.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {userRoleOverview[ROLE.USER]}
                                        </span>
                                        <img src="https://img.icons8.com/color/48/000000/student-male.png" />
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
                                        Số Creators
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số Creators hiện có trên hệ thống.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {userRoleOverview[ROLE.CREATOR]}
                                        </span>
                                        <img src="https://img.icons8.com/color/48/000000/female-teacher.png" />
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
                                        Pro Users
                                        <i className="fa fa-info-circle ms-2"></i>
                                        <span className="tooltiptext">
                                            Tổng số người dùng dùng bản Pro trên hệ thống hiện tại.
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-around">
                                        <span className="h1 number">
                                            {userTypeOverview[ACCOUNT_TYPES.PRO]}
                                        </span>
                                        <img src="https://img.icons8.com/fluency/48/000000/star.png"/>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="section-header m-3 h4 d-flex">
                        <i className="fa fa-line-chart me-3"></i>
                        Biểu đồ thống kê
                    </div>

                    <div className="chart-data row ps-3 pe-3 d-flex justify-content-around m-4">
                        <div className="chart-line col-sm-12 col-md-4 p-3 d-flex align-items-end">
                            <Line
                                data={signupStatistics}
                                options={signupLineChartOptions}
                                height="400"
                                width="500"
                            />
                        </div>

                        <div className="chart-pie col-sm-12 col-md-4 p-3 d-flex align-items-end">
                            <Pie
                                options={userRolePieChartOptions}
                                data={{
                                    labels: ['User', 'Creator', 'Admin'],
                                    datasets: [
                                        {
                                            label: 'Tỉ lệ (%)',
                                            data: [
                                                userRoleOverview[ROLE.USER],
                                                userRoleOverview[ROLE.CREATOR],
                                                userRoleOverview[ROLE.ADMIN]
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

                        <div className="chart-pie col-sm-12 col-md-4 p-3 d-flex align-items-end">
                            <Pie
                                options={usertypePieChartOptions}
                                data={{
                                    labels: ['Pro', 'Lite'],
                                    datasets: [
                                        {
                                            label: 'Tỉ lệ (%)',
                                            data: [
                                                userTypeOverview[ACCOUNT_TYPES.PRO],
                                                userTypeOverview[ACCOUNT_TYPES.LITE]
                                            ].map(x => x * 100 / data.length),
                                            backgroundColor: COLOR.BREWER.ORANGES.Oranges3,
                                            borderWidth: 1,
                                            hoverBorderColor: COLOR.BREWER.ORANGES.Oranges3
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