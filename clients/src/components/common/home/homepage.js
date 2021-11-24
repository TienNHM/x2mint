
import React from 'react'
import './Homepage.scss'
function Homepage() {
    return (
        <>
            <section className="homepage" id="homepage">
                <div className="left">
                    <img src="home_pic.svg"></img>
                </div>
                <div className="right">
                    <div>
                        <h1>Nền tảng tạo đề thi <br/> trắc nghiệm trực tuyến</h1>
                        <p className="intro">Tạo đề thi, game trắc nghiệm nhanh chống với nhiều dạng câu hỏi.<br/> Giám sát thí sinh hiệu quả, thống kê trực quan plapla ....</p>
                        <button className="button button__signup">Trải nghiệm ngay</button>
                    </div>
                </div>
            </section>
            <section className="about" id="about">
                <a href="/" className="nav__logo">
                    <i className="ri-plant-line nav__logo-icon"></i> X2M!NT
                </a>
                <p> X2M!NT là một nền tảng cho phép người dùng tạo ra các bài kiểm tra và tham gia làm bài.
                    <br/>Có thể tùy chọn quy mô và cách tổ chức của các bài kiểm tra để tạo ra các lớp học, các cuộc thi có nhiều vòng hoặc đơn giản chỉ là các bài test đơn lẻ, ...
                </p>
                <div className="about__contest" id="about-contest">
                    <div id="create">
                        <p id="create">TẠO BÀI KIỂM TRA</p>
                        <button className="button button__signup">Thử ngay</button>
                        <img className="create" src="create.svg"></img>
                    </div>
                    <div id="contest">
                        <img className="create" src="contest.svg"></img>
                        <p id="create">DỰ THI</p>
                        <button className="button button__signup">Làm bài ngay !</button>
                    </div>
                </div>
            </section>
            <section className="profile" id="profile">
                <div className="card">
                    <div className="card__img">
                        <img id="avatar" src="./img/hoang.jpg" alt="" />
                    </div>
                    <h2>Minh Hoàng</h2>
                    <p id="mssv">18110285</p>
                    <div className="card__social">
                        <a target="_black" href="/">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                    <button>Contact me</button>
                </div>
                <div className="card">
                    <div className="card__img">
                        <img id="avatar" src="./img/thien.jpg" alt="" />
                    </div>
                    <h2>Minh Thiện</h2>
                    <p id="mssv">18110371</p>
                    <div className="card__social">
                        <a target="_black" href="/">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                    <button>Contact me</button>
                </div>
                <div className="card">
                    <div className="card__img">
                        <img id="avatar" src="./img/tien.jpg" alt="" />
                    </div>
                    <h2>Minh Tiến</h2>
                    <p id="mssv">18110377</p>
                    <div className="card__social">
                        <a target="_black" href="/">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                    <button>Contact me</button>
                </div>
                <div className="card">
                    <div className="card__img">
                        <img id="avatar" src="./img/yen.jpg" alt="" />
                    </div>
                    <h2>Ngọc Yến</h2>
                    <p id="mssv">18110402</p>
                    <div className="card__social">
                        <a target="_black" href="/">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a target="_black" href="/">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                    <button>Contact me</button>
                </div>
            </section>
            <section className="footer">

            </section>
        </>
    )
}
export default Homepage