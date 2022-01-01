import React from 'react'
import { Image } from 'react-bootstrap'

function Footer() {
    const styleBottom = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/background-2.svg)`,
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="footer mt-3"
            style={styleBottom}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-4 pt-3 x2mint">
                    <Image src={process.env.PUBLIC_URL + '/assets/icons/logo.png'}
                        alt="logo"
                        width="150" height="150" />
                </div>
                <div className="col-12 col-md-4 pt-3 d-flex justify-content-center align-items-center">
                    <div>
                        <h5>Liên hệ</h5>
                        <div className="d-flex justify-content-center">
                            <a className="p-1"
                                href="https://www.facebook.com/ex2mint"
                                target="_blank" rel='noreferrer'>
                                <Image src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                            </a>
                            <a className="p-1"
                                href="mailto:tiennhm.it@gmail.com"
                                target="_blank" rel="noreferrer">
                                <Image src="https://img.icons8.com/color/48/000000/gmail-new.png" />
                            </a>
                            <a className="p-1"
                                href="https://github.com/x2mint"
                                target="_blank" rel="noreferrer">
                                <Image src="https://img.icons8.com/fluency/48/000000/github.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-3 d-flex justify-content-center align-items-center">
                    <div>
                        <h5>Phát triển bởi</h5>
                        <div className="d-flex justify-content-center">
                            <a className="p-1"
                                href="https://github.com/tiennhm"
                                target="_blank" rel="noreferrer">
                                <Image src={process.env.PUBLIC_URL + '/assets/images/tien.webp'}
                                    roundedCircle
                                    width="48" height="48"
                                />
                            </a>
                            <a className="p-1"
                                href="https://github.com/timomint"
                                target="_blank" rel="noreferrer">
                                <Image src={process.env.PUBLIC_URL + '/assets/images/thien.webp'}
                                    roundedCircle
                                    width="48" height="48"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer