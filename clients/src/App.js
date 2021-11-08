import React from 'react'
import './App.scss'
import Navbar from 'components/multi-choices/navbar/Navbar'
import Container from 'components/multi-choices/container/Container'

function App() {
    return (
        <div className="app">
            <div className="bootstrap-container">
                <Navbar />
                <Container />
            </div>
        </div>
    )
}

export default App
