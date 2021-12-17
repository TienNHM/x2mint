import React, { useState } from 'react'
import AppContent from './AppContent/AppContent'
import AppSidebar from './AppSidebar/AppSidebar'
import './Admin.scss'
import AppNavbar from './AppNavbar/AppNavbar'

export default function Admin() {
    const [currentAction, setCurrentAction] = useState('Dashboard')

    return (
        <div className="dashboard d-flex row">
            <div className="col-2 sidebar-menu">
                <AppSidebar
                    setCurrentAction={setCurrentAction}
                />
            </div>

            <div className="col-10 main-container d-flex flex-column"
                id="main-container">
                <AppNavbar />

                <div className="header h2 d-flex align-items-center current-action">
                    {currentAction}
                </div>

                <div className="body flex-grow-1">
                    <AppContent currentAction={currentAction} />
                </div>

                <div className="footer bg-light">
                    Copyright &copy; X2M!INT
                </div>
            </div>
        </div>
    )
}