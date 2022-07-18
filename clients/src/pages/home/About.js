import React from 'react'
import { Badge, Button, Image } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

AOS.init({
    duration: 500
})

export default function About() {
    const styleTop = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/background-1.svg)`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="about container-fluid" id="about"
            style={styleTop}>
            <div data-aos="fade-up" className="pb-3 mb-3">
                <Image src={process.env.PUBLIC_URL + '/assets/icons/plant-line.svg'}></Image>
                <h2 className='text-center'>
                    Thuận tiện - Nhanh chóng - Hiệu quả - Bảo mật
                </h2>
            </div>

            <div className="row container w-100 p-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-up"
                    style={{ textAlign: 'justify' }}>
                    <h5>
                        Chỉ cần đăng ký tài khoản, bạn đã có thể tham gia vào các cuộc thi do các đơn vị tổ chức trực tuyến trên nền tảng <Badge pill bg="success" className="mx-1">X2M!NT</Badge> một cách nhanh chóng!
                    </h5>
                    <h5>
                        Khi tham gia thi, người dự thi sẽ được làm bài trong thời gian quy định của bài thi. Đồng thời, trong suốt quá trình thi, mọi hoạt động của thí sinh trên hệ thống đều được ghi nhận lại.
                    </h5>
                    <h5>
                        Để đảm bảo tính an toàn, bảo mật và khách quan, hệ thống sẽ ngăn chặn cách hành vi <Badge pill bg="warning" className="mx-1">Chuyển tab</Badge>, <Badge pill bg="danger" className="mx-1">Thoát toàn màn hình</Badge> hoặc <Badge pill bg="danger" className="mx-1">Không phát hiện khuôn mặt trước camera</Badge>.
                        Thí sinh nếu vi phạm vượt quá số lần quy định thì bài thi sẽ được hệ thống đóng lại.
                    </h5>
                </div>

                <div className="col-12 col-md-6 con" data-aos="fade-up">
                    <Image className="w-50"
                        src={process.env.PUBLIC_URL + 'assets/images/contest.svg'} />
                    <p id="create">DỰ THI</p>
                </div>
            </div>

            <div className="row container w-100 p-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-up">
                    <Image className="w-50"
                        src={process.env.PUBLIC_URL + '/assets/images/create.svg'} />
                    <p id="create">TẠO BÀI KIỂM TRA</p>
                </div>

                <div className="col-12 col-md-6" data-aos="fade-up">
                    <h5 className="text-justify d-flex  flex-column">
                        Người tổ chức cuộc thi có thể tạo các cuộc thi với đa dạng các tính năng:
                        <div className="d-flex align-items-start flex-column">
                            <li className="my-1">
                                <span><Badge pill bg="success" className="mx-1">Chia sẻ</Badge> liên kết cuộc thi, bài thi</span>
                            </li>
                            <li className="my-1">
                                <span><Badge pill bg="success" className="mx-1">Tùy chỉnh thời gian</Badge> diễn ra cuộc thi</span>
                            </li>
                            <li className="my-1">
                                <span><Badge pill bg="success" className="mx-1">Kho ảnh minh họa</Badge> phong phú, đa dạng</span>
                            </li>
                            <li className="my-1">
                                <span><Badge pill bg="success" className="mx-1">Xem thống kê</Badge> chi tiết về cuộc thi</span>
                            </li>
                            <li className="my-1">
                                <span>
                                    <Badge pill bg="success" className="mx-1">Upload ảnh <i className='fa fa-star'></i></Badge> không giới hạn
                                </span>
                            </li>
                            <li className="my-1">
                                <span>
                                    <Badge pill bg="success" className="mx-1">Import đề thi <i className='fa fa-star'></i></Badge> từ file Excel
                                </span>
                            </li>
                            <li className="my-1">
                                <span>
                                    <Badge pill bg="success" className="mx-1">Xuất file Excel <i className='fa fa-star'></i></Badge> kết quả chi tiết
                                </span>
                            </li>
                            <li className="my-1">
                                <span>
                                    <Badge pill bg="success" className="mx-1">Giám sát <i className='fa fa-star'></i></Badge> quá trình làm bài thi của thí sinh thông qua
                                    <span className="mx-1 text-danger fw-bolder">camera</span> và
                                    <span className="mx-1 text-danger fw-bolder">toàn màn hình </span>
                                </span>
                            </li>
                        </div>
                    </h5>
                </div>
            </div>

            <div className='my-3 py-3'>
                <h2 className='text-center'>
                    Các chức năng nổi bật
                </h2>
            </div>

            <div className="row container w-100 p-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-up"
                    style={{ textAlign: 'justify' }}>
                    <h5>
                        Hỗ trợ thanh toán online qua <Badge pill bg="success" className="mx-1">VNPay</Badge> một cách nhanh chóng, tiện lợi, dễ dàng để nâng cấp lên tài khoản Pro. Từ đó, người dùng dễ dàng sử dụng những chức năng nâng cao ưu việt chỉ dành riêng cho <Badge pill bg="warning" className="mx-1">Pro-User</Badge>
                    </h5>
                </div>

                <div className="col-12 col-md-6 con" data-aos="fade-up">
                    <ReactPlayer url="https://fb.watch/ekF7nIHe0O" />
                    <p id="create">THANH TOÁN QUA VNPAY ĐỂ NÂNG CẤP LÊN PRO</p>
                </div>
            </div>

            <div className="row container w-100 p-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 pe-3" data-aos="fade-up">
                    <ReactPlayer url="https://fb.watch/ekF6FdfCGx" />
                    <p id="create">IMPORT ĐỀ THI TỪ FILE EXCEL</p>
                </div>

                <div className="col-12 col-md-6 ps-3" data-aos="fade-up"
                    style={{ textAlign: 'justify', paddingLeft: '30px !important' }}>
                    <h5 className='ps-3 '>
                        Bạn không cần mất quá nhiều thời gian cho việc tạo mới và nhập dữ liệu cho từng câu hỏi, từng đáp án một.
                    </h5>
                    <h5 className='ps-3 '>
                        Thay vào đó, với chức năng <Badge pill bg="success" className="mx-1">Import đề từ File Excel</Badge> này, sẽ giúp bạn tiết kiệm nhiều thời gian, hạn chế sai sót. Bên cạnh đó, giúp bạn có thể import một số lượng lớn câu hỏi cùng lúc nữa đó!
                    </h5>
                </div>
            </div>

            <div className="row container w-100 p-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-up"
                    style={{ textAlign: 'justify' }}>
                    <h5>
                        Bạn lo lắng thí sinh cùng mình <Badge pill bg="danger" className="mx-1">thoát khỏi trang</Badge> và <Badge pill bg="danger" className="mx-1">tra cứu tài liệu</Badge> bên ngoài khi làm bài thi?
                    </h5>
                    <h5>
                        Vậy thì hãy bật ngay tính năng <Badge pill bg="warning" className="mx-1">Giám sát Fullscreen</Badge> này ngay! Thí sinh sẽ không thể tiếp tục làm bài nếu thoát toàn màn hình. Đồng thời, <Badge pill bg="success" className="mx-1">3 lần liên tiếp</Badge> thoát toàn màn hình, bài thi sẽ bị nộp ngay tức thì!
                    </h5>
                </div>

                <div className="col-12 col-md-6 con" data-aos="fade-up">
                    <ReactPlayer url="https://fb.watch/ekFrX78ve7" />
                    <p id="create">GIÁM SÁT FULLSCREEN</p>
                </div>
            </div>

            <div className="row container w-100 p-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 pe-3" data-aos="fade-up">
                    <ReactPlayer url="https://fb.watch/ekFucaitsc" />
                    <p id="create">GIÁM SÁT CAMERA</p>
                </div>

                <div className="col-12 col-md-6 ps-3" data-aos="fade-up"
                    style={{ textAlign: 'justify', paddingLeft: '30px !important' }}>
                    <h5 className='ps-3 '>
                        Bên cạnh đó, sẽ đảm bảo hơn nữa nếu bật <Badge pill bg="success" className="mx-1">Giám sát Camera</Badge> lên nhé!
                    </h5>
                    <h5 className='ps-3 '>
                        Trong quá trình làm bài, thí sinh sẽ phải bật <Badge pill bg="success" className="mx-1">Camera</Badge>. Hệ thống sẽ thực hiện việc <Badge pill bg="warning" className="mx-1">phát hiện khuôn mặt</Badge> thí sinh trong camera, thông qua những thuật toán <Badge pill bg="warning" className="mx-1">Deep Learning</Badge> tiên tiến như <Badge pill bg="success" className="mx-1">Tiny Face Detector</Badge> và <Badge pill bg="success" className="mx-1">Face Landmarks 68</Badge>.
                    </h5>
                    <h5 className='ps-3 '>
                        Nếu thí sinh vi phạm <Badge pill bg="danger" className="mx-1">3 lần liên tiếp</Badge> không xuất hiện trước camera, bài thi sẽ được nộp ngay tức thì.
                    </h5>
                </div>
            </div>

            <br />
            <div className="row w-50 mt-3 p-3 d-flex justify-content-center align-items-center">
                <h2 className='text-center'>
                    Còn chần chừ gì mà không tham gia ngay nào!
                </h2>
                <div className='w-50'>
                    <Image src={process.env.PUBLIC_URL + '/assets/images/login.svg'} />
                </div>
                <Link to="/login">
                    <Button variant="success" size="lg" className="fw-bolder">
                        <i className="fa fa-graduation-cap pe-1"></i>
                        Đăng ký
                    </Button>
                </Link>
            </div>
        </div>
    )
}