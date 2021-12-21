import React from 'react'
import { Image } from 'react-bootstrap'
import './Homepage.scss'
import About from 'components/common/home/About'
import Contact from 'components/common/home/Contact'
import Footer from 'components/common/home/Footer'


function Homepage() {
    const renderHomepage = () => {
        return (
            <section className="homepage" id="homepage">
                <div className="home__left">
                    <img className="homepage__pic" src="assets/home_pic.svg"></img>
                </div>
                <div className="home__right">
                    <div>
                        <h1>
                            Nền tảng tạo đề thi <br /> trắc nghiệm trực tuyến
                        </h1>
                        <h5 className="intro">
                            Tạo đề thi, game trắc nghiệm nhanh chóng với nhiều dạng câu hỏi.
                            <br /> Giám sát thí sinh hiệu quả, thống kê trực quan plapla ....
                        </h5>
                    </div>
                </div>
            </section>
        )
    }

    const renderAbout = () => {
        return (
            <section className="about" id="about">
                <Image src={process.env.PUBLIC_URL + '/assets/icons/plant-line.svg'}></Image>

                <h5> X2M!NT là một nền tảng cho phép người dùng tạo ra các bài kiểm tra và tham gia làm bài.
                    <br />Có thể tùy chọn quy mô và cách tổ chức của các bài kiểm tra để tạo ra các lớp học, các cuộc thi có nhiều vòng hoặc đơn giản chỉ là các bài test đơn lẻ, ...
                </h5>

                <div className="about__contest">
                    <div className="left">
                        <img className="create__pic" src="assets/create.svg"></img>
                        <p id="create">TẠO BÀI KIỂM TRA</p>
                    </div>

                    <div className="right">
                        <img className="test__pic" src="assets/contest.svg"></img>
                        <p id="create">DỰ THI</p>
                    </div>
                </div>

            </section>
        )
    }

    const renderContact = () => {
        return (
            <section className="profile" id="contact">
                <div className="card-info ">
                    <div className="card__img">
                        <img id="avatar" src="./img/hoang.jpg" alt="" />
                    </div>
                    <h2 className="profile__name">Minh Hoàng</h2>
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
                    <button className="btn__contact__me">Contact me</button>
                </div>

                <div className="card-info ">
                    <div className="card__img">
                        <img id="avatar" src="./img/thien.jpg" alt="" />
                    </div>
                    <h2 className="profile__name">Minh Thiện</h2>
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
                    <button className="btn__contact__me">Contact me</button>
                </div>

                <div className="card-info ">
                    <div className="card__img">
                        <img id="avatar" src="./img/tien.jpg" alt="" />
                    </div>
                    <h2 className="profile__name">Minh Tiến</h2>
                    <p id="mssv">18110377</p>
                    <div className="card__social">
                        <a target="_black" href="https://www.instagram.com/tien_nhm/">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a target="_black" href="https://www.linkedin.com/in/tien-nhm/">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                        <a target="_black" href="https://github.com/TienNHM">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>
                    <button className="btn__contact__me">Contact me</button>
                </div>

                <div className="card-info ">
                    <div className="card__img">
                        <img id="avatar" src="./img/yen.jpg" alt="" />
                    </div>
                    <h2 className="profile__name">Ngọc Yến</h2>
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
                    <button className="btn__contact__me">Contact me</button>
                </div>
            </section>
        )
    }

    return (
        <div className="home">
            {renderHomepage()}

            {renderAbout()}

            <Contact />
            <Footer />
        </>
            {renderContact()}
        </div>
    )
}

export default Homepage