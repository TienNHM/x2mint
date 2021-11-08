import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <nav className="navbar-test">
            <div className="logo">
                <img src="https://img.icons8.com/color/48/000000/kahoot.png" alt="logo"></img>
            </div>
            <div className="test-title">
                <div className="title">
                    <input type="text" className="test-title-input"></input>
                </div>
                <button className="submit-title">OK</button>
            </div>
            <div className="nav-settings">
                <button className="preview-test">preview</button>
                <button className="save-test">save</button>
                <button className="exit-test">exit</button>
            </div>
        </nav>
    )
}

export default Navbar