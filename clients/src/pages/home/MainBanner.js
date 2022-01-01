import React from 'react'

export default function MainBanner() {
    return (
        <div className="home container-fluid" id="homepage"
            style={{ backgroundColor: '#F7F7F7' }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <img className="homepage__pic" src="assets/home_pic.svg"></img>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <h1 className="text-center">
                            Nền tảng tạo đề thi trắc nghiệm
                        </h1>
                        <h5 className="intro text-justify">
                            Tạo đề thi, game trắc nghiệm nhanh chóng với nhiều dạng câu hỏi.
                            <br /> Giám sát thí sinh hiệu quả, thống kê trực quan...
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}