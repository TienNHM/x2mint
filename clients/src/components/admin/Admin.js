import React, { useState } from 'react'
import AppContent from './AppContent/AppContent'
import AppSidebar from './AppSidebar/AppSidebar'
import './Admin.scss'
import AppNavbar from './AppNavbar/AppNavbar'

export default function Admin() {
    const [currentAction, setCurrentAction] = useState('Dashboard')

    return (
        <div className="dashboard d-flex row">
            <div className="col-sm-2 sidebar-menu">
                <AppSidebar
                    setCurrentAction={setCurrentAction}
                />
            </div>

            <div className="col-sm-10 main-container d-flex flex-column"
                id="main-container">
                <AppNavbar />

                <div className="header h2 d-flex align-items-center current-action">
                    {currentAction}
                </div>

                <AppContent currentAction={currentAction} />
            </div>
        </div>
    )
}