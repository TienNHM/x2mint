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
                            <span style={{ fontSize: '1.5rem' }}>Dashboard</span>
                        </Button>
                    </div>

                    <div className="settings">
                        <Accordion className="mt-2 mb-2" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                        Người dùng
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                        {ADMIN.ACCOUNT.STATISTICS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.MANAGE)}>
                                        {ADMIN.ACCOUNT.MANAGE}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.GRANT_PERMISSIONS)}>
                                        {ADMIN.ACCOUNT.GRANT_PERMISSIONS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.REPORT)}>
                                        {ADMIN.ACCOUNT.REPORT}
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                        Quản lý cuộc thi
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                        {ADMIN.CONTEST.STATISTICS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => navigate('/contest')}>
                                        Tất cả cuộc thi
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.PARTICIPANT)}>
                                        {ADMIN.CONTEST.PARTICIPANT}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.LEADERBOARD)}>
                                        {ADMIN.CONTEST.LEADERBOARD}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.TRAFFIC)}>
                                        {ADMIN.CONTEST.TRAFFIC}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.ARCHIVE)}>
                                        {ADMIN.CONTEST.ARCHIVE}
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                        Tài nguyên
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                        {ADMIN.RESOURCES.STATISTICS}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.SAMPLE_QUESTION)}>
                                        {ADMIN.RESOURCES.SAMPLE_QUESTION}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.IMAGE)}>
                                        {ADMIN.RESOURCES.IMAGE}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.VIDEO)}>
                                        {ADMIN.RESOURCES.VIDEO}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCES.MUSIC)}>
                                        {ADMIN.RESOURCES.MUSIC}
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <Button className="w-100 button-title"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        Cài đặt
                                    </Button>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        {ADMIN.SETTINGS.ACCOUNT}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.THEME)}>
                                        {ADMIN.SETTINGS.THEME}
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.NOTIFICATION)}>
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