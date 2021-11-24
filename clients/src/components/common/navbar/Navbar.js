import React from 'react'
//import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <nav className="nav" id="nav">
            <a href="/" className="nav__logo">
                <i className="ri-plant-line nav__logo-icon"></i> X2M!NT
            </a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="/" className="nav__link active-link">Trang chủ</a></li>
                    <li className="nav__item"><a href="/contest" className="nav__link active-link">Làm bài</a></li>
                    <li className="nav__item"><a href="/create" className="nav__link active-link">Tạo đề</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link active-link">X2M!NT</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link active-link">Liên hệ</a></li>
                    <li className="nav__item"><a href="/login" className="nav__link active-link button button__login">Đăng nhập</a></li>
                    <li className="nav__item"><a href="/signup" className="nav__link active-link button button__signup">Đăng ký</a></li>
                </ul>

                <div className="nav__close" id="nav-close">
                    <i className="ri-close-line"></i>
                </div>
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

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollNavBar() {
    const navbar = document.getElementById('nav')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) navbar.classList.add('scroll-header')
    else navbar.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollNavBar)
export default Navbar