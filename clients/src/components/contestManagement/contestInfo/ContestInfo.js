import React, { useEffect, useState, useRef } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Countdown from 'react-countdown'
import ModalCreateContest from 'components/contestManagement/modalCreateContest/ModalCreateContest'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import MultiChoices from 'components/multi-choices/multichoices/MultiChoices'
import { displayTimeDelta } from 'utils/timeUtils'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './ContestInfo.scss'

export default function ContestInfo({ setIsShowContestInfo, contest, updateContest }) {
    const [isShowCreateContest, setIsShowCreateContest] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [isShowTest, setIsShowTest] = useState(false)
    const [selectedTest, setSelectedTest] = useState(null)
    const [title, setTitle] = useState(contest.name)
    const [description, setDescription] = useState(contest.description)
    const [url, setUrl] = useState(contest.url)
    const [embededMedia, setEmbedMedia] = useState(contest.embeded_media)
    const [startTime, setStartTime] = useState(contest.start_time)
    const [endTime, setEndTime] = useState(contest.end_time)
    // const timeRemainRef = useRef(null)

    useEffect(() => {
        console.log('******', contest)
        setTitle(contest.name)
        setDescription(contest.description)
        setUrl(contest.url)
        setEmbedMedia(contest.embeded_media)
        setStartTime(contest.start_time)
        setEndTime(contest.end_time)
    }, [contest])

    const onAction = (isUpdate, action, title, description, url, embeded_media, start_time, end_time) => {

        if (action === MODAL_ACTION_CONFIRM) {
            // timeRemainRef.current.stop()
            const newContest = {
                ...contest,
                name: title,
                description: description,
                url: url,
                embeded_media: embeded_media,
                start_time: start_time,
                end_time: end_time
            }
            updateContest(newContest)
        }
        else if (action === MODAL_ACTION_CLOSE) {
            //
        }
        setIsShowCreateContest(false)
    }

    //TODO: bugs re-render infinite
    // const Completionist = () => <div>Hết giờ</div>

    // const renderer = ({ hours, minutes, seconds, completed }) => {
    //     const m = ('' + minutes).length < 2 ? ('0' + minutes) : ('' + minutes)
    //     const s = ('' + seconds).length < 2 ? ('0' + seconds) : ('' + seconds)
    //     if (completed) {
    //         // Render a completed state
    //         return <Completionist />
    //     } else {
    //         // Render a countdown
    //         return <span className="time-countdown">
    //             {hours} : {m} : {s}
    //         </span>
    //     }
    // }

    const handleEditTest = () => {
        setIsShowTest(true)
    }

    const handleDeleteTest = (test) => {
        setIsShowConfirmModal(true)
        setSelectedTest({ ...test })
    }

    const onDeleteTestAciton = (action) => {
        if (selectedTest && action === MODAL_ACTION_CONFIRM) {
            const newContest = { ...contest }
            const index = newContest.tests.findIndex(c => c.id === selectedTest.id)
            newContest.tests.splice(index, 1)
            updateContest(newContest)
        }
        setIsShowConfirmModal(false)
    }

    return (
        <>
            {!isShowTest &&
                <div className="contest-information">
                    <div className="nav-top">
                        <div className="back">
                            <Button variant="primary"
                                onClick={() => setIsShowContestInfo(false)}
                            >
                                Trở về
                            </Button>{' '}
                        </div>
                        <div className="heading h2 fw-bolder">{title}</div>
                    </div>
                    <div className="container-section">
                        <div className="contest-show-info">
                            <Card className="text-center">
                                <Card.Img variant="top" src={embededMedia} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{description}</Card.Text>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <div className="time-remain">
                                                {/* <div className="section-title h5">Thời gian còn lại</div> */}
                                                <div className="time-remain-show h3 fw-bolder text-danger">
                                                    {/* <Countdown
                                                    date={Date.parse(endTime)}
                                                    renderer={renderer}
                                                    ref={timeRemainRef}
                                                >
                                                    <Completionist />
                                                </Countdown> */}
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <span className="h6 fw-bold">Link</span>
                                            <Card.Text>
                                                <a href={url}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="text-primary"
                                                >
                                                    {url}
                                                </a>
                                            </Card.Text>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <Button variant="primary"
                                        onClick={() => setIsShowCreateContest(true)}>
                                        Chỉnh sửa
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="list-tests">
                            <Card border="secondary">
                                <Card.Header className="row h5">
                                    <div className="col-10">
                                        <div className="fw-bolder text-uppercase">Danh sách bài kiểm tra</div>
                                        <div className="text-primary h6">
                                            Số lượng: {contest ? contest.tests.length : 0}
                                        </div>
                                    </div>
                                    <div className="col-2 create-test">
                                        <Button variant="primary fw-bolder"
                                            onClick={() => setIsShowTest(true)}
                                        >
                                            Tạo bài test
                                        </Button>{' '}
                                    </div>
                                </Card.Header>
                                <div className="show-all-tests">
                                    {contest.tests.map((test, index) =>
                                        <Card.Body key={index} className="row">
                                            <div className="card-test-preview">
                                                <div className="card-test-info col-11">
                                                    <div className="card-test-title h5">{test.title}</div>
                                                    <div className="card-test-description">{test.description}</div>
                                                    <div className="detail row">
                                                        <div className="start-time col-4">
                                                            <div className="fw-bolder">Thời gian bắt đầu: </div>
                                                            <div>{test.start_time}</div>
                                                        </div>
                                                        <div className="duration col-4">
                                                            <div className="fw-bolder">Thời lượng làm bài: </div>
                                                            <div>{displayTimeDelta(test.start_time, test.end_time)}</div>
                                                        </div>
                                                        <div className="card-test-quantity col-4">
                                                            <div className="fw-bolder">Số câu hỏi: </div>
                                                            <div>{test.questions.length}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-test-actions col-1">
                                                    <Button variant="primary" size="sm"
                                                        onClick={() => handleEditTest()}
                                                    >
                                                        Chỉnh sửa
                                                    </Button>{' '}
                                                    <Button variant="danger" size="sm"
                                                        onClick={() => handleDeleteTest(test)}
                                                    >Xóa</Button>{' '}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    )}

                                    {contest.tests.length == 0 &&
                                        <Card.Body className="row no-test">
                                            Chưa có bài test nào!
                                        </Card.Body>
                                    }
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            }

            {isShowTest &&
                <MultiChoices setIsShowTest={setIsShowTest} />
            }

            <ModalCreateContest
                isShow={isShowCreateContest}
                onAction={onAction}
                contest={contest}
                isUpdate={true}
            />
            <ConfirmModal
                content={`Bạn có muốn xóa bài test này khỏi cuộc thi ${title} không?`}
                isShow={isShowConfirmModal}
                onAction={onDeleteTestAciton}
            />
        </>
    )
}