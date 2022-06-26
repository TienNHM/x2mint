import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Image, InputGroup, Modal } from 'react-bootstrap'
import Chart from 'chart.js/auto'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, MODAL_ACTION } from 'utils/constants'
import { COLOR } from 'utils/colors'
import { HashLoader } from 'react-spinners'
import { GetStatusNumber } from './ClusteringUtils'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js'
// import faker from 'faker'
import { Bubble } from 'react-chartjs-2'

const ml5 = window.ml5

Chart.register()
// ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

// export const data = {
//     datasets: [
//         {
//             label: 'Red dataset',
//             data: Array.from({ length: 50 }, () => ({
//                 x: faker.datatype.number({ min: -100, max: 100 }),
//                 y: faker.datatype.number({ min: -100, max: 100 }),
//                 r: 10
//             })),
//             backgroundColor: 'rgba(255, 99, 132, 0.5)'
//         },
//         {
//             label: 'Blue dataset',
//             data: Array.from({ length: 50 }, () => ({
//                 x: faker.datatype.number({ min: -100, max: 100 }),
//                 y: faker.datatype.number({ min: -100, max: 100 }),
//                 r: 10
//             })),
//             backgroundColor: 'rgba(53, 162, 235, 0.5)'
//         }
//     ]
// }

const COLORS = ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)']

export default function ContestKmeansClustering({ takeTestData, isShow, onAction }) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        process()
    }, [takeTestData])

    const process = () => {
        console.log('takeTestData', takeTestData)

        takeTestData = takeTestData.map(x => {
            return {
                // id: x.test._id,
                points: x.points,
                // userId: x.user._id,
                status: GetStatusNumber(x._status),
                time: new Date(x.updatedAt) - new Date(x.createdAt)
            }
        })

        console.log('takeTestData', takeTestData)

        const options = {
            k: 3,
            maxIter: 4,
            threshold: 0.5
        }
        // Initialize the magicFeature
        const kmeans = ml5.kmeans(takeTestData, options, clustersCalculated)

        // When the model is loaded
        function clustersCalculated() {
            console.log('Points Clustered!')

            const result = kmeans.dataset.reduce(
                (r, a) => {
                    r[a.centroid] = r[a.centroid] || []
                    r[a.centroid].push({
                        x: a[2],
                        y: a[1],
                        r: a[0]/2
                    })
                    // r[a.centroid].push(a)
                    return r
                },
                Object.create(null)
            )

            console.log(result)


            var datasets = []
            var i = 0
            for (let key of Object.keys(result)) {
                datasets.push({
                    label: key.toString(),
                    data: result[key],
                    backgroundColor:  COLOR.OFFICE.Excel16[i]
                })
                i += 1
            }
            console.log(datasets)
            setData({ datasets })
            setIsLoading(false)

        }
    }


    const handleAction = (action) => {
        if (action === MODAL_ACTION.CLOSE) {
            onAction(MODAL_ACTION.CLOSE)
        }
    }

    return (
        <Modal
            size="lg"
            fullscreen={true}
            show={isShow}
            onHide={() => handleAction(MODAL_ACTION.CLOSE)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton className="d-flex justify-content-center">
                <Modal.Title className="h5 fw-bolder">Tạo mới</Modal.Title>
            </Modal.Header>

            <Modal.Body className="d-flex justify-content-center align-items-center">
                {!isLoading &&
                    <Bubble
                        options={options}
                        data={data}
                    />
                }

                {/* <div className="contest-info w-100">
                    <div className="body-left">
                    </div>

                    <div className="body-right">
                    </div>
                </div> */}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
                <Button
                    variant="secondary"
                    onClick={() => handleAction(MODAL_ACTION.CLOSE)}
                >
                    Đóng
                </Button>

                <Button
                    variant="primary"
                    onClick={() => handleAction(MODAL_ACTION.CONFIRM)}
                >
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
