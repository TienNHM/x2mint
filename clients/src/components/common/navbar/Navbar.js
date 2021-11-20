import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="https://img.icons8.com/color/40/000000/cat-profile.png" />
                </Link>
                <span className="app-name">X2MINT</span>
            </div>
            <div className="menu-section">
                <div className="menu">
                    <DropdownButton id="dropdown-item-button" title="Menu">
                        <Dropdown.Item as="button">
                            <Link to="/profile">Trang cá nhân</Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/contest">Cuộc thi</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button">
                            <Link to="/login">Đăng nhập</Link>
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </nav>
    )
}

export default Navbar