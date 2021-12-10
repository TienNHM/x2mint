import React from 'react'
import AppContent from './AppContent/AppContent'
import AppFooter from './AppFooter/AppFooter'
import AppHeader from './AppHeader/AppHeader'
import AppSidebar from './AppSidebar/AppSidebar'
import './Admin.scss'

export default function Admin() {
    return (
        <div className="dashboard d-flex">
            <AppSidebar className="sidebar" />
            <div className="main-container d-flex flex-column">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>
    )
}