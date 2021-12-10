import React, { useState } from 'react'
import AppContent from './AppContent/AppContent'
import AppSidebar from './AppSidebar/AppSidebar'
import './Admin.scss'
import AppNavbar from './AppNavbar/AppNavbar'

export default function Admin() {
    const [currentAction, setCurrentAction] = useState('Dashboard')

    return (
        <div className="dashboard d-flex">
            <AppSidebar className="sidebar"
                setCurrentAction={setCurrentAction}
            />
            <div className="main-container d-flex flex-column">
                <AppNavbar />

                <div className="header h2 d-flex align-items-center current-action">
                    {currentAction}
                </div>

                <div className="body flex-grow-1 px-3">
                    <AppContent currentAction={currentAction}/>
                </div>

                <div className="footer bg-light">
                    Copyright &copy; X2M!INT
                </div>
            </div>
        </div>
    )
}