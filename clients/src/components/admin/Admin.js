import React from 'react'
import AppContent from './AppContent/AppContent'
import AppSidebar from './AppSidebar/AppSidebar'
import './Admin.scss'
import AppNavbar from './AppNavbar/AppNavbar'

export default function Admin() {
    return (
        <div className="dashboard d-flex">
            <AppSidebar className="sidebar" />
            <div className="main-container d-flex flex-column">
                <AppNavbar />
                <div className="header">Header</div>

                <div className="body flex-grow-1 px-3">
                    <AppContent />
                </div>

                <div className="footer bg-light">
                    Copyright &copy; X2M!INT
                </div>
            </div>
        </div>
    )
}