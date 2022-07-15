import React from 'react'
import './Homepage.scss'
import Footer from 'pages/home/Footer'
import MainBanner from './MainBanner'
import About from './About'
import { stopWebcam } from 'utils/faceDetection'

function Homepage() {

    stopWebcam(null)

    return (
        <div className="homepage">
            <MainBanner />
            <About />
            <Footer />
        </div>
    )
}

export default Homepage