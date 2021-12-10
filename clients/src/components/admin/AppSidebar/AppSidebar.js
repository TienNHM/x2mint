import React from 'react'
import { CSidebar } from '@coreui/react'
import { Button, Accordion } from 'react-bootstrap'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'
import './AppSidebar.scss'

export default function AppSidebar() {

    const HideSidebar = () => {
        document.querySelector('#settings').hidden = true
    }

    return (
        <div className="sidebar" id="settings">
            <CSidebar>
                <div className="sidebar-title text-uppercase h2 fw-bolder">
                    Dashboard
                </div>

                <div className="settings">
                    <Accordion className="mt-2 mb-2" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Quản lý người dùng</Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100">
                                    Đăng ký
                                </Button>
                                <Button className="w-100">
                                    Cấp quyền tài khoản
                                </Button>
                                <Button className="w-100">
                                    Tài khoản bị báo cáo
                                </Button>
                                <Button className="w-100">
                                    Thống kê
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Quản lý cuộc thi</Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100">
                                    Lượt dự thi
                                </Button>
                                <Button className="w-100">
                                    Bảng xếp hạng
                                </Button>
                                <Button className="w-100">
                                    Lưu lượng truy cập
                                </Button>
                                <Button className="w-100">
                                    Lưu trữ
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Quản lý tài nguyên</Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100">
                                    Câu hỏi mẫu
                                </Button>
                                <Button className="w-100">
                                    Hình ảnh
                                </Button>
                                <Button className="w-100">
                                    Video
                                </Button>
                                <Button className="w-100">
                                    Âm thanh
                                </Button>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Cài đặt</Accordion.Header>
                            <Accordion.Body>
                                <Button className="w-100">
                                    Tài khoản
                                </Button>
                                <Button className="w-100">
                                    Theme
                                </Button>
                                <Button className="w-100">
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
    )
}