import React from 'react'
import './App.scss'
import Navbar from 'components/common/navbar/Navbar'
import AppContainer from 'components/multi-choices/appContainer/AppContainer'
import ContestManagement from 'components/contestManagement/contestManagementComponent/ContestManagement'

function App() {
    return (
        <div className="app">
            <div className="bootstrap-container">
                {/* <Navbar />
                <AppContainer /> */}
                <ContestManagement />
            </div>
        </div>
    )
}

export default App
