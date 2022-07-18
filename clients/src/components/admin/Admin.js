import React, { useState } from 'react'
import AppContent from './AppContent/AppContent'
import AppSidebar from './AppSidebar/AppSidebar'
import './Admin.scss'
import { stopWebcam } from 'utils/faceDetection'

export default function Admin() {
    stopWebcam(null)

    const [currentAction, setCurrentAction] = useState('Dashboard')

    return (
        <div className="dashboard">
            <div className="w-25 sidebar-menu">
                <AppSidebar
                    setCurrentAction={setCurrentAction}
                />
            </div>

            <div className="w-100 main-container d-flex flex-column"
                id="main-container">
                {/* <AppNavbar /> */}

                <div className="header h2 d-flex align-items-center current-action">
                    {currentAction}
                </div>

                <AppContent currentAction={currentAction} />
            </div>
        </div>
    )
}