import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import Contest from 'components/contestManagement/contest/Contest'
import SubmitResult from 'components/multi-choices/submitResult/SubmitResult'
import Homepage from 'components/common/home/Homepage'

function App() {
    return (
        <>
            <div className="app">
                <div className="bootstrap-container">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/contest" element={<Contest />} />
                        <Route path="/submit-test" element={<SubmitResult />} />
                        {/* <Route path="/create_contest" element={<Create_Contest />}/> */}
                        {/* <Route path="/login" element={<Login />} /> */}
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
