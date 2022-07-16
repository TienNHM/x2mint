import React from 'react'
import { Button, Accordion } from 'react-bootstrap'
import 'react-tiny-fab/dist/styles.css'
import './AppSidebar.scss'
import { ADMIN } from 'utils/constants'
import { useNavigate } from 'react-router-dom'

export default function AppSidebar({ setCurrentAction }) {
    const navigate = useNavigate()

    const HideSidebar = () => {
        document.querySelector('#settings').hidden = true

        document
            .querySelector('#main-container')
            .className = 'main-container col-12 d-flex flex-column'
    }

    return (
        <div className="sidebar-settings" id="settings">
            <div className="sidebar-main">
                <div className="sidebar-title">
                    <Button className="w-100 button-title"
                        onClick={() => setCurrentAction(ADMIN.DASHBOARD)}>
                        <span className="sidebar-section" style={{ fontSize: '2rem' }}>
                            MENU
                        </span>
                    </Button>
                </div>

                <div className="settings">
                    <Accordion className="mt-2 mb-2" flush defaultActiveKey={['0']} alwaysOpen>
                        {/* Người dùng */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="w-100 button-title"
                                onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                {/* <div className="tooltip-component">
                                    <i className="fas fa-users mx-2"></i>
                                    <span className="tooltiptext">
                                        Người dùng
                                    </span>
                                </div> */}
                                <i className="fas fa-users mx-2"></i>
                                <span className="sidebar-section">Người dùng</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-chart-line mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.ACCOUNT.STATISTICS}
                                        </span>
                                    </div> */}
                                    <i className="fas fa-chart-line mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.ACCOUNT.STATISTICS}
                                    </span>
                                </Button>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.ACCOUNT.MANAGE)}>
                                    {/* <div className="tooltip-component">
                                        <i className="far fa-address-card mx-2"></i>
                                        <span className="tooltiptext">
                                        {ADMIN.ACCOUNT.MANAGE}
                                        </span>
                                    </div> */}
                                    <i className="far fa-address-card mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.ACCOUNT.MANAGE}
                                    </span>
                                </Button>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.ACCOUNT.GRANT_PERMISSIONS)}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-award mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.ACCOUNT.GRANT_PERMISSIONS}
                                        </span>
                                    </div> */}
                                    <i className="fas fa-award mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.ACCOUNT.GRANT_PERMISSIONS}
                                    </span>
                                </Button>
                                <>{/* <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.ACCOUNT.REPORT)}>
                                    <div className="tooltip-component">
                                        <i className="fas fa-exclamation-triangle mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.ACCOUNT.REPORT}
                                        </span>
                                    </div>
                                    <span className="sidebar-section">
                                        {ADMIN.ACCOUNT.REPORT}
                                    </span>
                                </Button> */}
                                </>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Cuộc thi */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="w-100 button-title"
                                onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                {/* <div className="tooltip-component">
                                    <i className="fas fa-chalkboard-teacher mx-2"></i>
                                    <span className="tooltiptext">
                                        Quản lý cuộc thi
                                    </span>
                                </div> */}
                                <i className="fas fa-chalkboard-teacher mx-2"></i>
                                <span className="sidebar-section">
                                    Quản lý cuộc thi
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.CONTEST.STATISTICS)}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-chart-line mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.CONTEST.STATISTICS}
                                        </span>
                                    </div> */}
                                    <i className="fas fa-chart-line mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.CONTEST.STATISTICS}
                                    </span>
                                </Button>
                                <Button className="w-100"
                                    onClick={() => navigate('/contests')}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-book-open mx-2"></i>
                                        <span className="tooltiptext">
                                            Tất cả cuộc thi
                                        </span>
                                    </div> */}
                                    <i className="fas fa-book-open mx-2"></i>
                                    <span className="sidebar-section">
                                        Tất cả cuộc thi
                                    </span>
                                </Button>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.CONTEST.PARTICIPANT)}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-user-alt mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.CONTEST.PARTICIPANT}
                                        </span>
                                    </div> */}
                                    <i className="fas fa-user-alt mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.CONTEST.PARTICIPANT}
                                    </span>
                                </Button>
                                <>{/*<Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.CONTEST.LEADERBOARD)}>
                                    <div className="tooltip-component">
                                        <i className="fas fa-trophy mx-2"></i>
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
                                        <i className="fa fa-bar-chart mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.CONTEST.TRAFFIC}
                                        </span>
                                    </div>
                                    <span className="sidebar-section">
                                        {ADMIN.CONTEST.TRAFFIC}
                                    </span>
                                </Button> */}
                                </>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.CONTEST.ARCHIVE)}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-archive mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.CONTEST.ARCHIVE}
                                        </span>
                                    </div> */}
                                    <i className="fas fa-archive mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.CONTEST.ARCHIVE}
                                    </span>
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>

                        <>{/* <Accordion.Item eventKey="2">
                            <Accordion.Header className="w-100 button-title"
                                onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                <div className="tooltip-component">
                                    <i className="fas fa-seedling mx-2"></i>
                                    <span className="tooltiptext">
                                        Tài nguyên
                                    </span>
                                </div>
                                <span className="sidebar-section">
                                    Tài nguyên
                                </span>

                            </Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.RESOURCES.STATISTICS)}>
                                    <div className="tooltip-component">
                                        <i className="fas fa-chart-line mx-2"></i>
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
                                        <i className="fa fa-question-circle mx-2"></i>
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
                                        <i className="fas fa-images mx-2"></i>
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
                                        <i className="fas fa-play mx-2"></i>
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
                                        <i className="fas fa-music mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.RESOURCES.MUSIC}
                                        </span>
                                    </div>
                                    <span className="sidebar-section">
                                        {ADMIN.RESOURCES.MUSIC}
                                    </span>
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item> */}
                        </>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="w-100 button-title"
                                onClick={() => setCurrentAction(ADMIN.REVENUE)}>
                                {/* <div className="tooltip-component">
                                    <i className="fas fa-cog mx-2"></i>
                                    <span className="tooltiptext">
                                        Doanh thu
                                    </span>
                                </div> */}
                                <i className="fas fa-cog mx-2"></i>
                                <span className="sidebar-section">
                                    Doanh thu
                                </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100"
                                    onClick={() => setCurrentAction(ADMIN.REVENUE)}>
                                    {/* <div className="tooltip-component">
                                        <i className="fas fa-user-circle mx-2"></i>
                                        <span className="tooltiptext">
                                            {ADMIN.REVENUE}
                                        </span>
                                    </div> */}
                                    <i className="fas fa-user-circle mx-2"></i>
                                    <span className="sidebar-section">
                                        {ADMIN.REVENUE}
                                    </span>
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                {/* <div className="w-100">
                    <Button variant="secondary"
                        onClick={() => HideSidebar()}
                        className="btn-lg btn-block w-100"
                        style={{ borderRadius: '0px' }}>
                        <i className="fa fa-angle-double-left"></i>
                        <span className="ms-3 sidebar-section">Thu gọn</span>
                    </Button>
                </div> */}
            </div>
        </div>
    )
}