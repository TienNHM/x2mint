import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import './AppNavbar.scss'

export default function AppNavbar() {

    const OpenSidebar = () => {
        document.querySelector('#settings').hidden = false

        document
            .querySelector('#main-container')
            .className = 'main-container col-9 d-flex flex-column'
    }

    const handleSettingsTheme = () => {
        alert('settings theme')
    }

    const handleOpenFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
            document.querySelector('#fullscreen').className = 'fa fa-compress-arrows-alt'
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
                document.querySelector('#fullscreen').className = 'fa fa-expand-arrows-alt'
            }
        }
    }

    return (
        <div className="navbar-admin bg-light">
            <div className="d-flex justify-content-between shadow mb-3 mt-1 rounded" >
                <Button variant="light" onClick={() => OpenSidebar()}>
                    <i className="fa fa-bars"></i>
                </Button>
                <div id="navbarScroll" className="right-nav d-flex justify-content-end">
                    <Button variant="light">
                        <i className="fa fa-bell" id="notification"></i>
                    </Button>
                    <Button variant="light" onClick={() => handleOpenFullScreen()}>
                        <i className="fa fa-expand-arrows-alt" id="fullscreen"></i>
                    </Button>
                    <Button variant="light" onClick={() => handleSettingsTheme()}>
                        <i className="fa fa-adjust"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}