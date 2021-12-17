import React from 'react'
import { CSidebar } from '@coreui/react'
import { Button, Accordion } from 'react-bootstrap'
// import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'
import './AppSidebar.scss'
import { ADMIN } from 'utils/constants'
import { useNavigate } from 'react-router'

export default function AppSidebar({ setCurrentAction }) {
    const navigate = useNavigate()

    const HideSidebar = () => {
        document.querySelector('#settings').hidden = true

        document
            .querySelector('#main-container')
            .className = 'main-container col-12 d-flex flex-column'
    }

    return (
        <div className="sidebar-settings">
            <div className="sidebar-main" id="settings">
                <CSidebar>
                    <div className="sidebar-title">
                        <Button className="w-100 button-title"
                            onClick={() => setCurrentAction(ADMIN.DASHBOARD)}>
                            <span className="sidebar-section" style={{ fontSize: '1.5rem' }}>
                                Dashboard
                            </span>
                        </Button>
                    </div>

                    <div className="settings">
                        <Accordion className="mt-2 mb-2" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-users me-3"></i>
                                            <span className="tooltiptext">
                                                Người dùng
                                            </span>
                                        </div>
                                        <span className="sidebar-section">Người dùng</span>
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-chart-line me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.ACCOUNT.STATISTICS}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.ACCOUNT.STATISTICS}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.MANAGE)}>
                                        <div className="tooltip-component">
                                            <i className="far fa-address-card me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.ACCOUNT.MANAGE}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.ACCOUNT.MANAGE}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.GRANT_PERMISSIONS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-award me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.ACCOUNT.GRANT_PERMISSIONS}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.ACCOUNT.GRANT_PERMISSIONS}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.REPORT)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-exclamation-triangle me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.ACCOUNT.REPORT}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.ACCOUNT.REPORT}
                                        </span>
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-chalkboard-teacher me-3"></i>
                                            <span className="tooltiptext">
                                                Quản lý cuộc thi
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            Quản lý cuộc thi
                                        </span>
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-chart-line me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.CONTEST.STATISTICS}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.CONTEST.STATISTICS}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => navigate('/contest')}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-book-open me-3"></i>
                                            <span className="tooltiptext">
                                                Tất cả cuộc thi
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            Tất cả cuộc thi
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.PARTICIPANT)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-user-alt me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.CONTEST.PARTICIPANT}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.CONTEST.PARTICIPANT}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.LEADERBOARD)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-trophy me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.CONTEST.LEADERBOARD}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.CONTEST.LEADERBOARD}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.TRAFFIC)}>
                                        <div className="tooltip-component">
                                            <i className="fa fa-bar-chart me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.CONTEST.TRAFFIC}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.CONTEST.TRAFFIC}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.ARCHIVE)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-archive me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.CONTEST.ARCHIVE}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.CONTEST.ARCHIVE}
                                        </span>
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-seedling me-3"></i>
                                            <span className="tooltiptext">
                                                Tài nguyên
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            Tài nguyên
                                        </span>
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-chart-line me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.RESOURCES.STATISTICS}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.RESOURCES.STATISTICS}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.SAMPLE_QUESTION)}>
                                        <div className="tooltip-component">
                                            <i className="fa fa-question-circle me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.RESOURCES.SAMPLE_QUESTION}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.RESOURCES.SAMPLE_QUESTION}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.IMAGE)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-images me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.RESOURCES.IMAGE}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.RESOURCES.IMAGE}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.VIDEO)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-play me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.RESOURCES.VIDEO}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.RESOURCES.VIDEO}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.MUSIC)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-music me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.RESOURCES.MUSIC}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.RESOURCES.MUSIC}
                                        </span>
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-cog me-3"></i>
                                            <span className="tooltiptext">
                                                Cài đặt
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            Cài đặt
                                        </span>
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-user-circle me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.SETTINGS.ACCOUNT}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.SETTINGS.ACCOUNT}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.THEME)}>
                                        <div className="tooltip-component">
                                            <i className="fas fa-palette me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.SETTINGS.THEME}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.SETTINGS.THEME}
                                        </span>
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.NOTIFICATION)}>
                                        <div className="tooltip-component">
                                            <i className="fas fas fa-bell me-3"></i>
                                            <span className="tooltiptext">
                                                {ADMIN.SETTINGS.NOTIFICATION}
                                            </span>
                                        </div>
                                        <span className="sidebar-section">
                                            {ADMIN.SETTINGS.NOTIFICATION}
                                        </span>
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="w-100">
                        <Button variant="secondary"
                            onClick={() => HideSidebar()}
                            className="btn-lg btn-block w-100"
                            style={{ borderRadius: '0px' }}>
                            <i className="fa fa-angle-double-left"></i>
                            <span className="ms-3 sidebar-section">Thu gọn</span>
                        </Button>
                    </div>
                </CSidebar>


            </div>
        </div>
    )
}