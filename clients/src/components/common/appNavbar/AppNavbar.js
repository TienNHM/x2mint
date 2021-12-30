import React from 'react'
import './AppNavbar.scss'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from 'redux/authSlice'
import { ROLE } from 'utils/constants'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavHashLink } from 'react-router-hash-link'

export default function MyAppNavbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()
    const logOut_ = () => {
        dispatch(logOut())
    }
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <i className="ri-plant-line"></i> X2M!NT
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse
                    id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-center">
                        <NavLink to="/">
                            Trang chủ
                        </NavLink>

                        {isAuthenticated && user.role === ROLE.ADMIN && (
                            <NavLink to="/dashboard">
                                Dashboard
                            </NavLink>
                        )}

                        {isAuthenticated && user.role === ROLE.CREATOR && (
                            <NavLink to="/contests-management">
                                Quản lý cuộc thi
                            </NavLink>
                        )}

                        {isAuthenticated && user.role === ROLE.USER && (
                            <NavLink to="/contest">
                                Các cuộc thi
                            </NavLink>
                        )}

                        <NavHashLink to="/#about">X2M!NT</NavHashLink>
                        <NavHashLink to="/#contact">Liên hệ</NavHashLink>

                        {!isAuthenticated && (
                            <>
                                <NavLink to="/login"
                                    className="nav__btn__login active-link">
                                    Đăng nhập
                                </NavLink>

                                <NavLink to="/register"
                                    className="nav__btn__signup active-link">
                                    Đăng ký
                                </NavLink>
                            </>
                        )}

                        {isAuthenticated && (
                            <>
                                <NavLink to="/profile"
                                    className="nav__btn__login nav__link active-link">
                                    Trang cá nhân
                                </NavLink>

                                <NavLink to="/"
                                    className="nav__btn__signup nav__link active-link">
                                    <button className="fw-bolder"
                                        style={{
                                            background: 'transparent',
                                            borderWidth: 0
                                        }}
                                        onClick={() => logOut_()}>
                                        Đăng xuất
                                    </button>
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}