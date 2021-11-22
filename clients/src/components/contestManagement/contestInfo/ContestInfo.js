import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
import ModalCreateContest from 'components/contestManagement/modalCreateContest/ModalCreateContest'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import MultiChoices from 'components/multi-choices/multichoices/MultiChoices'
import StatisticTest from 'components/contestManagement/statistic/StatisticTest'
import { emptyTest } from 'actions/initialData'
import { displayTimeDelta } from 'utils/timeUtils'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './ContestInfo.scss'

export default function ContestInfo({ setIsShowContestInfo, contest, updateContest, isCreator }) {
    const [isShowCreateContest, setIsShowCreateContest] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [isShowStatisticTest, setIsShowStatisticTest] = useState(false)
    const [confirmModalContent, setConfirmModalContent] = useState('')
    const [currentAction, setCurrentAction] = useState('')
    const [isShowTest, setIsShowTest] = useState(false)
    const [selectedTest, setSelectedTest] = useState(null)

    // Test information
    const [title, setTitle] = useState(contest.name)
    const [description, setDescription] = useState(contest.description)
    const [url, setUrl] = useState(contest.url)
    const [embededMedia, setEmbedMedia] = useState(contest.embeded_media)

    // Duraction
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')

    useEffect(() => {
        setTitle(contest.name)
        setDescription(contest.description)
        setUrl(contest.url)
        setEmbedMedia(contest.embeded_media)
        const start_time = contest.start_time.split(' ')
        const end_time = contest.end_time.split(' ')
        setStartDate(start_time.length === 2 ? start_time[0] : ' ')
        setStartTime(start_time.length === 2 ? start_time[1] : ' ')
        setEndDate(end_time.length === 2 ? end_time[0] : ' ')
        setEndTime(end_time.length === 2 ? end_time[1] : ' ')
        console.log(contest)
    }, [contest])

    const onAction = (isUpdate, action, title, description, url, embeded_media, start_time, end_time) => {

        if (action === MODAL_ACTION_CONFIRM) {
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

    const handleEditTest = (t) => {
        setSelectedTest(t)
        setIsShowTest(true)
    }

    const handleCreateTest = () => {
        setCurrentAction('CONFIRM_CREATE_TEST')
        setConfirmModalContent('Bạn muốn tạo một bài test mới?')
        setIsShowConfirmModal(true)
    }

    const handleStatisticsTest = (test) => {
        setSelectedTest(test)
        setIsShowStatisticTest(true)
    }

    const handleDeleteTest = (test) => {
        setSelectedTest({ ...test })
        setConfirmModalContent(`Bạn có muốn xóa bài test này khỏi cuộc thi ${title} không?`)
        setCurrentAction('CONFIRM_DELETE_TEST')
        setIsShowConfirmModal(true)
    }

    const handleTakeTest = (test) => {
        //TODO code phần làm bài test với isCreator=false
        console.log('Take a test:', test)
        setSelectedTest(test)
        setIsShowTest(true)
    }

    const onTestAction = (action) => {
        if (currentAction === 'CONFIRM_DELETE_TEST') {
            if (selectedTest && action === MODAL_ACTION_CONFIRM) {
                const newContest = { ...contest }
                const index = newContest.tests.findIndex(c => c.id === selectedTest.id)
                newContest.tests.splice(index, 1)
                updateContest(newContest)
            }
        }
        else if (currentAction === 'CONFIRM_CREATE_TEST') {
            if (action === MODAL_ACTION_CONFIRM) {
                const newContest = { ...contest }
                newContest.tests.push({
                    ...emptyTest,
                    id: 'test-' + (contest.tests.length + 1)
                })
                updateContest(newContest)
                const index = newContest.tests.length - 1
                setSelectedTest(newContest.tests[index])
                setIsShowTest(true)
            }
        }
        setIsShowConfirmModal(false)
    }

    const onShowStatistics = (action) => {
        setIsShowStatisticTest(false)
    }

    useEffect(() => {
        if (selectedTest) {
            const newContest = { ...contest }
            const index = newContest.tests.findIndex(t => t.id === selectedTest.id)
            newContest.tests[index] = selectedTest
            updateContest(newContest)
        }
    }, [selectedTest])

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
                                            <div className="duration">
                                                <div className="show-time">
                                                    <div className="fw-bolder">Thời gian bắt đầu</div>
                                                    <div className="d-flex">
                                                        <Form.Control
                                                            size="sm"
                                                            type="date"
                                                            value={startDate}
                                                            readOnly={true}
                                                        />
                                                        <Form.Control
                                                            size="sm"
                                                            type="time"
                                                            value={startTime}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="show-time">
                                                    <div className="fw-bolder">Thời gian kết thúc</div>
                                                    <div className="d-flex">
                                                        <Form.Control
                                                            size="sm"
                                                            type="date"
                                                            value={endDate}
                                                            readOnly={true}
                                                        />
                                                        <Form.Control
                                                            size="sm"
                                                            type="time"
                                                            value={endTime}
                                                            readOnly={true}
                                                        />
                                                    </div>
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
                                    {isCreator &&
                                        <div>
                                            <Button variant="primary" className="m-2 fw-bolder"
                                                onClick={() => setIsShowCreateContest(true)}>
                                                Chỉnh sửa
                                            </Button>
                                            <Button variant="success fw-bolder"
                                                onClick={handleCreateTest}
                                            >
                                                Tạo bài test
                                            </Button>{' '}
                                        </div>
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="list-tests">
                            <Card border="secondary">
                                <Card.Header className="row h5">
                                    <div className="">
                                        <div className="fw-bolder text-uppercase">Danh sách bài kiểm tra</div>
                                        <div className="text-primary h6">
                                            Số lượng: {contest ? contest.tests.length : 0}
                                        </div>
                                    </div>
                                </Card.Header>
                                <div className="show-all-tests">
                                    {contest.tests.map((test, index) =>
                                        <Card.Body key={index} className="row">
                                            <div className="card-test-preview">
                                                <div className="card-test-index col-md-1 col-sm-12">
                                                    <div className="test-index d-flex justify-content-center align-middle">{index + 1}</div>
                                                </div>
                                                <div className="card-test-info col-md-10 col-sm-12">
                                                    <div className="card-test-title h5">{test.name}</div>
                                                    <div className="card-test-description">{test.description}</div>
                                                    <div className="detail row">
                                                        <div className="start-time col-md-4 col-12">
                                                            <div className="fw-bolder">Thời gian bắt đầu: </div>
                                                            <div>{test.start_time}</div>
                                                        </div>
                                                        <div className="duration col-md-4 col-12">
                                                            <div className="fw-bolder">Thời lượng làm bài: </div>
                                                            <div>{displayTimeDelta(test.start_time, test.end_time)}</div>
                                                        </div>
                                                        <div className="card-test-quantity col-md-4 col-12">
                                                            <div className="fw-bolder">Số câu hỏi: </div>
                                                            <div>{test.questions.length}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-test-actions col-md-1 col-sm-12">
                                                    {isCreator &&
                                                        <>
                                                            <Button variant="warning" size="sm"
                                                                onClick={() => handleStatisticsTest(test)} >
                                                                <i className="fa fa-bar-chart"></i>
                                                            </Button>{' '}
                                                            <Button variant="primary" size="sm"
                                                                onClick={() => handleEditTest(test)} >
                                                                <i className="fa fa-edit"></i>
                                                            </Button>{' '}
                                                            <Button variant="danger" size="sm"
                                                                onClick={() => handleDeleteTest(test)} >
                                                                <i className="fa fa-remove"></i>
                                                            </Button>{' '}
                                                        </>
                                                    }

                                                    {!isCreator &&
                                                        <>
                                                            <Button variant={Date.parse(test.end_time) - Date.now() <= 0 ? 'secondary' : 'success'}
                                                                disabled={Date.parse(test.end_time) - Date.now() <= 0}
                                                                onClick={() => handleTakeTest(test)} >
                                                                Làm bài
                                                            </Button>
                                                        </>
                                                    }
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
                <MultiChoices
                    setIsShowTest={setIsShowTest}
                    test={selectedTest}
                    isCreator={isCreator}
                    updateTest={setSelectedTest}
                />
            }

            <ModalCreateContest
                isShow={isShowCreateContest}
                onAction={onAction}
                contest={contest}
                isUpdate={true}
            />

            <ConfirmModal
                content={confirmModalContent}
                isShow={isShowConfirmModal}
                onAction={onTestAction}
            />

            <StatisticTest
                isShow={isShowStatisticTest}
                onAction={onShowStatistics}
                test={selectedTest}
            />
        </>
    )
}