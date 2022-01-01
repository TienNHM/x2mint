import React from 'react'
import { Image } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 500
})

export default function About() {
    const styleTop = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/background-1.svg)`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="about container-fluid" id="about"
            style={styleTop}>
            <div data-aos="fade-up">
                <Image src={process.env.PUBLIC_URL + '/assets/icons/plant-line.svg'}></Image>
                <h2 className='text-center'>
                    Thuận tiện - Nhanh chóng - Hiệu quả - Bảo mật
                </h2>
            </div>
            <div className="row w-100 p-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-up">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                </div>

                <div className="col-12 col-md-6" data-aos="fade-up">
                    <Image className="w-50"
                        src={process.env.PUBLIC_URL + 'assets/contest.svg'} />
                    <p id="create">DỰ THI</p>
                </div>
            </div>
            <div className="row w-100 p-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-up">
                    <Image className="w-50"
                        src={process.env.PUBLIC_URL + '/assets/create.svg'} />
                    <p id="create">TẠO BÀI KIỂM TRA</p>
                </div>

                <div className="col-12 col-md-6" data-aos="fade-up">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                </div>
            </div>
        </div>
    )
}