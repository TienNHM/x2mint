import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { stopWebcam } from 'utils/faceDetection'

const Page404 = () => {
    stopWebcam(null)

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <span className="clearfix d-flex flex-column justify-content-center">
                            <div className="float-start display-3 me-4 d-flex justify-content-center">
                                <h1 className="display-1 fw-bolder text-danger"
                                    style={{ fontSize: '5rem' }}>
                                    404
                                </h1>
                                <h1 className="ps-4 pt-4 text-warning"
                                    style={{ fontSize: '3rem' }}>
                                    Đã xảy ra lỗi!
                                </h1>
                            </div>

                            <div>
                                <Image align="center"
                                    src={process.env.PUBLIC_URL + '/assets/images/empty.svg'}
                                    width={300} height={300}
                                />
                            </div>

                            <h6 className="pt-4 text-success" style={{ fontSize: '1.5rem' }}>
                                Không tìm thấy tài nguyên. Vui lòng quay lại sau!
                            </h6>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page404
