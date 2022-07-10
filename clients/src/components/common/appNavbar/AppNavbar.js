import React from 'react'
import './AppNavbar.scss'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from 'redux/authSlice'
import { ROLE } from 'utils/constants'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavHashLink } from 'react-router-hash-link'
import { GoogleLogout } from 'react-google-login'

export default function MyAppNavbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()

    const onLogoutSuccess = () => {
        dispatch(logOut())
    }
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <i className="ri-plant-line"></i> X2M!NT
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-center">
                        <NavLink to="/">
                            Trang chủ
                        </NavLink>

                        {isAuthenticated && user.role === ROLE.ADMIN && (
                            <>
                                <NavLink to="/contests">
                                    Các cuộc thi
                                </NavLink>
                                <NavLink to="/dashboard">
                                    Dashboard
                                </NavLink>
                            </>
                        )}

                        {isAuthenticated && user.role === ROLE.CREATOR && (
                            <NavLink to="/contests">
                                Quản lý cuộc thi
                            </NavLink>
                        )}

                        {isAuthenticated && user.role === ROLE.USER && (
                            <NavLink to="/contests">
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
                                    className="nav__btn__login nav__link">
                                    Trang cá nhân
                                </NavLink>

                                <GoogleLogout
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    buttonText="Đăng xuất"
                                    onLogoutSuccess={onLogoutSuccess}
                                    render={renderProps => (
                                        <NavLink to="/"
                                            className="nav__btn__signup nav__link">
                                            <button className="fw-bolder"
                                                style={{
                                                    background: 'transparent',
                                                    borderWidth: 0
                                                }}
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}>
                                                Đăng xuất
                                            </button>
                                        </NavLink>
                                    )}
                                >
                                </GoogleLogout>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}