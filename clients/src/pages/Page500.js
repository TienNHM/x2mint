import React from 'react'
import {
    CCol,
    CContainer,
    CImage,
    CRow
} from '@coreui/react'

const Page500 = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6}>
                        <span className="clearfix d-flex flex-column justify-content-center">
                            <h1 className="float-start display-3 me-4 d-flex justify-content-center">
                                <span className="display-1">500</span>
                                <span className="h1 ps-4 pt-4">Đã xảy ra lỗi!</span>
                            </h1>

                            <CImage align="center" src={process.env.PUBLIC_URL + '/assets/opps.svg'} width={300} height={300} />

                            <h6 className="pt-4">
                                Trang bạn yêu cầu tạm thời không truy cập được. Vui lòng quay lại sau!
                            </h6>
                        </span>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Page500
