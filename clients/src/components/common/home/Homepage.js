import { divide } from 'lodash'
import React from 'react'
import './Homepage.scss'
import About from 'components/common/home/About'
import Contact from 'components/common/home/Contact'
function Homepage() {
    return (
        <>
            <section className="homepage" id="homepage">
                <div className="home__left">
                    <img className="homepage__pic" src="assets/home_pic.svg"></img>
                </div>
                <div className="home__right">
                    <div>
                        <h1>
              Nền tảng tạo đề thi <br /> trắc nghiệm trực tuyến
                        </h1>
                        <p className="intro">
              Tạo đề thi, game trắc nghiệm nhanh chóng với nhiều dạng câu hỏi.
                            <br /> Giám sát thí sinh hiệu quả, thống kê trực quan plapla ....
                        </p>
                        <button className="nav__btn__signup">Trải nghiệm ngay</button>
                    </div>
                </div>
            </section>
            <About />
            <Contact />
        </>
    )
}
export default Homepage
