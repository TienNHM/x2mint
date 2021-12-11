import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import './AppNavbar.scss'

export default function AppNavbar() {
    const OpenSidebar = () => {
        document.querySelector('#settings').hidden = false
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
        <div className="navbar-admin">
            <Navbar bg="light" expand="lg" className="shadow mb-3 mt-1 bg-white rounded" >
                <Container fluid>
                    <Button variant="light" onClick={() => OpenSidebar()}>
                        <i className="fa fa-bars"></i>
                    </Button>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="right-nav d-flex justify-content-end">
                        <Button variant="light" onClick={() => handleOpenFullScreen()}>
                            <i className="fa fa-bell" id="fullscreen"></i>
                        </Button>
                        <Button variant="light" onClick={() => handleOpenFullScreen()}>
                            <i className="fa fa-expand-arrows-alt" id="fullscreen"></i>
                        </Button>
                        <Button variant="light" onClick={() => handleSettingsTheme()}>
                            <i className="fa fa-adjust"></i>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}