import React from 'react'
import { CSidebar } from '@coreui/react'
import { Button, Accordion } from 'react-bootstrap'
// import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'
import './AppSidebar.scss'
import { ADMIN } from 'utils/constants'
import { useNavigate } from 'react-router'

export default function AppSidebar({ currentAction, setCurrentAction }) {
    const navigate = useNavigate()

    const HideSidebar = () => {
        document.querySelector('#settings').hidden = true
    }

    // const mainButtonStyles = {
    //     bottom: '0px',
    //     left: '0px',
    //     backgroundColor: '#6adf5f',
    //     borderTopLeftRadius: '0px',
    //     borderTopRightRadius: '10px',
    //     borderBottomLeftRadius: '0px',
    //     borderBottomRightRadius: '10px'
    // }

    return (
        <div className="sidebar-settings">
            <div className="sidebar" id="settings">
                <CSidebar>
                    <div className="sidebar-title">
                        <Button className="w-100 button-title"
                            onClick={() => setCurrentAction(ADMIN.DASHBOARD)}>
                            <span style={{ fontSize: '1.5rem' }}>
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
                                        <i className="fas fa-users me-3"></i>
                                        Người dùng
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                        <i className="fas fa-chart-line me-3"></i>
                                        {ADMIN.ACCOUNT.STATISTICS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.MANAGE)}>
                                        <i className="far fa-address-card me-3"></i>
                                        {ADMIN.ACCOUNT.MANAGE}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.GRANT_PERMISSIONS)}>
                                        <i className="fas fa-award me-3"></i>
                                        {ADMIN.ACCOUNT.GRANT_PERMISSIONS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.REPORT)}>
                                        <i className="fas fa-exclamation-triangle me-3"></i>
                                        {ADMIN.ACCOUNT.REPORT}
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                        <i className="fas fa-chalkboard-teacher me-3"></i>
                                        Quản lý cuộc thi
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                        <i className="fas fa-chart-line me-3"></i>
                                        {ADMIN.CONTEST.STATISTICS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => navigate('/contest')}>
                                        <i className="fas fa-book-open me-3"></i>
                                        Tất cả cuộc thi
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.PARTICIPANT)}>
                                        <i className="fas fa-user-alt me-3"></i>
                                        {ADMIN.CONTEST.PARTICIPANT}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.LEADERBOARD)}>
                                        <i className="fas fa-trophy me-3"></i>
                                        {ADMIN.CONTEST.LEADERBOARD}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.TRAFFIC)}>
                                        <i className="fa fa-bar-chart me-3"></i>
                                        {ADMIN.CONTEST.TRAFFIC}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.ARCHIVE)}>
                                        <i className="fas fa-archive me-3"></i>
                                        {ADMIN.CONTEST.ARCHIVE}
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                        <i className="fas fa-seedling me-3"></i>
                                        Tài nguyên
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                        <i className="fas fa-chart-line me-3"></i>
                                        {ADMIN.RESOURCES.STATISTICS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.SAMPLE_QUESTION)}>
                                        <i className="fa fa-question-circle me-3"></i>
                                        {ADMIN.RESOURCES.SAMPLE_QUESTION}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.IMAGE)}>
                                        <i className="fas fa-images me-3"></i>
                                        {ADMIN.RESOURCES.IMAGE}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.VIDEO)}>
                                        <i className="fas fa-play me-3"></i>
                                        {ADMIN.RESOURCES.VIDEO}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.MUSIC)}>
                                        <i className="fas fa-music me-3"></i>
                                        {ADMIN.RESOURCES.MUSIC}
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        <i className="fas fa-cog me-3"></i>
                                        Cài đặt
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        <i className="fas fa-user-circle me-3"></i>
                                        {ADMIN.SETTINGS.ACCOUNT}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.THEME)}>
                                        <i className="fas fa-palette me-3"></i>
                                        {ADMIN.SETTINGS.THEME}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.NOTIFICATION)}>
                                        <i className="fas fas fa-bell me-3"></i>
                                        {ADMIN.SETTINGS.NOTIFICATION}
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
                            <span className="ms-3">Thu gọn</span>
                        </Button>
                    </div>
                </CSidebar>


            </div>
            {/* <Fab hidden
                id="open-settings"
                mainButtonStyles={mainButtonStyles}
                // actionButtonStyles={actionButtonStyles}
                style={{ bottom: '24px', left: '24px' }}
                icon={<i className="fa fa fa-plus-circle"></i>}
                alwaysShowTitle={true}
                onClick={() => OpenSidebar()}
            ></Fab> */}
        </div>
    )
}