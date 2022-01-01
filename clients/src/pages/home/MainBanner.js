import React from 'react'
import { Image } from 'react-bootstrap'

export default function MainBanner() {
    return (
        <div className="home container-fluid" id="homepage"
            style={{ backgroundColor: '#F7F7F7' }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <Image
                        className="homepage__pic"
                        src={process.env.PUBLIC_URL + 'assets/images/home_pic.svg'} />
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <h1 className="text-center">
                            Nền tảng tạo đề thi trắc nghiệm
                        </h1>
                        <h5 className="intro text-justify m-3 p-3">
                            Tạo đề thi, game trắc nghiệm nhanh chóng với nhiều dạng câu hỏi.
                            <br /> Giám sát thí sinh hiệu quả, thống kê trực quan...
                        </h5>
                        <div>
                            <img className="m-3"
                                src="https://img.icons8.com/fluency/64/000000/diversity.png" />
                            <img className="m-3"
                                src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-online-management-flatart-icons-flat-flatarticons-1.png" />
                            <img className="m-3"
                                src="https://img.icons8.com/external-becris-flat-becris/64/000000/external-statistics-data-science-becris-flat-becris.png" />
                            <img className="m-3"
                                src="https://img.icons8.com/external-others-justicon/64/000000/external-image-photography-others-justicon.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}