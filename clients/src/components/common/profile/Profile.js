import React from 'react'
//import { DropdownButton, Dropdown } from 'react-bootstrap'
import './Profile.scss'

function Profile() {
    return (
        <>
            <div className="container profile">
                <div className="row row-cols-auto">
                    <div className="col">
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
                    </div>
                    <div className="col">Column</div>
                </div>
            </div>
        </>
    )
}
export default Profile