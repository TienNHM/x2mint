import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import Contest from 'components/contestManagement/contest/Contest'
import SubmitResult from 'components/multi-choices/submitResult/SubmitResult'

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 2000,
    offset: '30px',
    transition: transitions.FADE,
    containerStyle: {
        zIndex: 100
    }
}

function App() {
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <div className="app">
                <div className="bootstrap-container">
                    <Navbar />

                    <Routes>
                        <Route exact path="/" element={<Contest />} />
                        <Route path="/login" element={<Contest />} />
                        <Route path="/profile" element={<Contest />} />
                        <Route path="/contest" element={<Contest />} />
                        <Route path="/submit-test" element={<SubmitResult />} />
                    </Routes>
                </div>
            </div>
        </AlertProvider>
    )
}

export default App
