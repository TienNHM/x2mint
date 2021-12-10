import React from 'react'
import {
    CCol,
    CContainer,
    CImage,
    CRow
} from '@coreui/react'

const Page404 = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6}>
                        <span className="clearfix d-flex flex-column justify-content-center">
                            <h1 className="float-start display-3 me-4 d-flex justify-content-center">
                                <span className="display-1">404</span>
                                <span className="h1 ps-4 pt-4">Đã xảy ra lỗi!</span>
                            </h1>

                            <CImage align="center" src={process.env.PUBLIC_URL + '/assets/empty.svg'} width={300} height={300} />

                            <h6 className="pt-4">
                                Không tìm thấy tài nguyên. Vui lòng quay lại sau!
                            </h6>
                        </span>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Page404
