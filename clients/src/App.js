import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import Contest from 'components/contestManagement/contest/Contest'


function App() {
    return (
        <>
            <div className="app">
                <div className="bootstrap-container">
                    <Navbar />

                    <Routes>
                        <Route exact path="/" element={<Contest />} />
                        <Route path="/login" element={<Contest />} />
                        <Route path="/profile" element={<Contest />} />
                        <Route path="/contest" element={<Contest />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
