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
                        <Button className="w-100"
                            onClick={() => setCurrentAction(ADMIN.DASHBOARD)}>
                            Dashboard
                        </Button>
                    </div>

                    <div className="settings">
                        <Accordion className="mt-2 mb-2" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Quản lý người dùng</Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.REGISTER)}>
                                        Đăng ký
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.GRANT_PERMISSIONS)}>
                                        Cấp quyền tài khoản
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.REPORT)}>
                                        Tài khoản bị báo cáo
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.ACCOUNT.STATISTICS)}>
                                        Thống kê
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Quản lý cuộc thi</Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => navigate('/contest')}>
                                        Tất cả cuộc thi
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.PARTICIPANT)}>
                                        Lượt dự thi
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.LEADERBOARD)}>
                                        Bảng xếp hạng
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.TRAFFIC)}>
                                        Lưu lượng truy cập
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.CONTEST.ARCHIVE)}>
                                        Lưu trữ
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Quản lý tài nguyên</Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCE.SAMPLE_QUESTION)}>
                                        Câu hỏi mẫu
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCE.IMAGE)}>
                                        Hình ảnh
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCE.VIDEO)}>
                                        Video
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.RESOURCE.MUSIC)}>
                                        Âm thanh
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Cài đặt</Accordion.Header>
                                <Accordion.Body>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.ACCOUNT)}>
                                        Tài khoản
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.THEME)}>
                                        Theme
                                    </Button>
                                    <Button className="w-100"
                                        onClick={() => setCurrentAction(ADMIN.SETTINGS.NOTIFICATION)}>
                                        Thông báo
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="w-100">
                        <Button variant="primary"
                            onClick={() => HideSidebar()}
                            className="btn-lg btn-block w-100"
                            style={{ borderRadius: '0px' }}>
                            Thu gọn
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