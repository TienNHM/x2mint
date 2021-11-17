import React from 'react'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import MultiChoices from 'components/multi-choices/multichoices/MultiChoices'
import ContestManagement from 'components/contestManagement/contestManagementComponent/ContestManagement'

function App() {
    return (
        <div className="app">
            <div className="bootstrap-container">
                {/* <Navbar />
                <MultiChoices /> */}
                <ContestManagement />
            </div>
        </div>
    )
}

export default App
