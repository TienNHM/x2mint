import React from 'react'

function About() {
    return (
        <div className="container footer">
            <div className="row row-cols-auto">
                <div className="col">
                    <div className="col footer__logo">
                        <img src="./assets/icons/hcmute.png"></img>
                        <img src="./assets/icons/fit.png"></img>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <h4>TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH</h4>
                    </div>
                    <div className="row">
                        <h1>KHOA CÔNG NGHỆ THÔNG TIN</h1>
                    </div>
                    <div className="row">
                        <h5>MÔN HỌC: CÔNG NGHỆ PHẦN MỀM MỚI</h5>
                    </div>
                    <div className="row gv">
                        <h1 >GV: NGUYỄN THANH HẢI</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About