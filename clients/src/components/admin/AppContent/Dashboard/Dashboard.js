import React from 'react'
import { Card } from 'react-bootstrap'
import './Dashboard.scss'
import Chart from 'chart.js/auto'
import { Line, Doughnut, Bar } from 'react-chartjs-2'

export default function Dashboard() {
    return (
        <div className="account-register">
            <div className="section-header m-3 h4 d-flex align-items-center">
                Tổng quan
            </div>

            <div className="overview d-flex">
                <Card
                    bg="success" text="light"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Số người dùng</Card.Header>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <span className="h1 number">10</span>
                            <img src="https://img.icons8.com/fluency/48/000000/user-group-man-woman.png" />
                        </Card.Title>
                        <Card.Text>
                            Tổng số người dùng trên hệ thống. <i>(Bao gồm cả các Creators).</i>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    bg="info" text="light"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Số cuộc thi</Card.Header>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <span className="h1 number">10</span>
                            <img src="https://img.icons8.com/fluency/48/000000/categorize.png" />
                        </Card.Title>
                        <Card.Text>
                            Tổng số cuộc thi hiện có trên hệ thống. <i>(Bao gồm cả các cuộc thi đã được lưu trữ).</i>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    bg="primary" text="light"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Số bài kiểm tra</Card.Header>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <span className="h1 number">10</span>
                            <img src="https://img.icons8.com/fluency/48/000000/where-to-quest.png" />
                        </Card.Title>
                        <Card.Text>
                            Tổng số bài kiểm tra hiện có trên hệ thống.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    bg="danger" text="light"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Số lượt thi</Card.Header>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <span className="h1 number">10</span>
                            <img src="https://img.icons8.com/fluency/48/000000/test-passed.png" />
                        </Card.Title>
                        <Card.Text>
                            Tổng số lượt thí sinh tham gia làm bài kiểm tra trên hệ thống.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="section-header m-3 h4 d-flex align-items-center">
                Biểu đồ thống kê
            </div>

            <div className="chart-data d-flex justify-content-between m-4 align-items-center">
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
                            title: {
                                display: true,
                                text: 'World population per region (in millions)'
                            },
                            legend: {
                                display: true,
                                position: 'bottom'
                            }
                        }}
                    />
                </div>

                <div className="chart-circle">
                    <Doughnut
                        data={{
                            labels: [
                                'Africa',
                                'Asia',
                                'Europe',
                                'Latin America',
                                'North America'
                            ],
                            datasets: [
                                {
                                    label: 'Population (millions)',
                                    backgroundColor: [
                                        '#3e95cd',
                                        '#8e5ea2',
                                        '#3cba9f',
                                        '#e8c3b9',
                                        '#c45850'
                                    ],
                                    data: [2478, 5267, 734, 784, 433]
                                }
                            ]
                        }}
                        option={{
                            title: {
                                display: true,
                                text: 'Predicted world population (millions) in 2050'
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}