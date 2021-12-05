import React from 'react'

function About() {
    return (
        <>
            <section className="about" id="about">
                <a href="#" className="nav__logo">
                    <i className="ri-plant-line nav__logo-icon"></i>
                </a>
                <p> X2M!NT là một nền tảng cho phép người dùng tạo ra các bài kiểm tra và tham gia làm bài.
                    <br/>Có thể tùy chọn quy mô và cách tổ chức của các bài kiểm tra để tạo ra các lớp học, các cuộc thi có nhiều vòng hoặc đơn giản chỉ là các bài test đơn lẻ, ...
                </p>
                <div className="about__contest" id="about-contest">
                    <div className="left">
                        <img className="create__pic" src="assets/create.svg"></img>
                        <p id="create">TẠO BÀI KIỂM TRA</p>
                        <button className="nav__btn__signup">Thử ngay</button>
                    </div>
                    <div className="right">
                        <img className="test__pic" src="assets/contest.svg"></img>
                        <p id="create">DỰ THI</p>
                        <button className="nav__btn__signup">Làm bài ngay !</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About