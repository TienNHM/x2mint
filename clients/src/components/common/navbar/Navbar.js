import React from 'react'
import './Navbar.scss'

function Navbar() {
    const handleRedirectToHomepage = () => {
        console.log('Về trang chủ...')
    }

    return (
        <nav className="navbar">
            <div className="logo" onClick={handleRedirectToHomepage}>
                <img src="https://img.icons8.com/color/40/000000/cat-profile.png"/>
                <span className="app-name">X2MINT</span>
            </div>
            <div className="logo" onClick={handleRedirectToHomepage}>
                <img src="https://img.icons8.com/color/40/000000/finn.png"/>
            </div>
        </nav>
    )
}

export default Navbar