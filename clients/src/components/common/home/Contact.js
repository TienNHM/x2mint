import React from 'react'

function About() {
    return (
        <>
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
        </>
    )
}
export default About