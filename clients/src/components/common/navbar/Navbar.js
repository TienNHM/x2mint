import React from 'react'
//import { DropdownButton, Dropdown } from 'react-bootstrap'
import './Navbar.scss'
import { useHistory, NavLink } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'

function Navbar() {
    return (
        <nav className="nav" id="nav">
            <a href="/" className="nav__logo">
                <i className="ri-plant-line nav__logo-icon"></i> X2M!NT
            </a>

            <div className="nav__menu" id="nav-menu">
                <li className="nav__item">
                    <NavLink className="nav__link active__link" to="/">Trang chủ</NavLink></li>
                <li className="nav__item">
                    <NavLink className="nav__link active__link" to="/contest">Làm bài</NavLink></li>
                <li className="nav__item">
                    <NavLink className="nav__link active__link" to="/create">Tạo cuộc thi</NavLink></li>
                <li className="nav__item">
                    <NavLink className="nav__link active__link" to="/about">X2M!NT</NavLink></li>
                <li className="nav__item">
                    <NavLink className="nav__link active__link" to="/contact">Liên hệ</NavLink></li>
                <li className="nav__item">
                    <NavLink to="/login" className="nav__btn__login nav__link active-link">Đăng nhập</NavLink></li>
                <li className="nav__item">
                    <NavLink to="/register" className="nav__btn__signup nav__link active-link">Đăng ký</NavLink></li>
                <li className="nav__item">
                    <NavLink to="/profile" className="nav__btn__login nav__link active-link">Trang cá nhân</NavLink></li>
                <li className="nav__item">
                    <NavLink to="/" className="nav__btn__signup nav__link active-link">Đăng xuất</NavLink></li>
            </div>
            <div className="nav__btn">
                <i className="ri-moon-line change-theme" id="theme-button"></i>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </nav>
    )
}
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollNavBar() {
    const navbar = document.getElementById('nav')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) navbar.classList.add('scroll-header')
    else navbar.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollNavBar)
export default Navbar