import React from 'react'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import MultiChoices from 'components/multi-choices/multichoices/MultiChoices'
import Contest from 'components/contestManagement/contest/Contest'

function App() {
    return (
        <div className="app">
            <div className="bootstrap-container">
                {/* <Navbar />
                <MultiChoices /> */}
                <Contest />
            </div>
        </div>
    )
}

export default App
