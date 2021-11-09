import React from 'react'
import './App.scss'
import Navbar from 'components/multi-choices/navbar/Navbar'
import AppContainer from 'components/multi-choices/appContainer/AppContainer'

function App() {
    return (
        <div className="app">
            <div className="bootstrap-container">
                <Navbar />
                <AppContainer />
            </div>
        </div>
    )
}

export default App
