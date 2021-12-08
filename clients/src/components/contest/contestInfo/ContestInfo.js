import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Form, Image } from 'react-bootstrap'
import ModalCreateContest from 'components/contest/modalCreateContest/ModalCreateContest'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import StatisticTest from 'components/contest/statistics/StatisticTest'
import { blankTest } from 'actions/initialData'
import { displayTimeDelta, splitTime } from 'utils/timeUtils'
import Share from 'components/common/share/Share'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE, ACCESS_TOKEN, ROLE_CREATOR, ROLE_USER } from 'utils/constants'
import './ContestInfo.scss'
import Cookies from 'js-cookie'
import { useAxios } from 'actions/useAxios'
import { useNavigate, useParams } from 'react-router'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import { createTest, deleteTest } from 'actions/api/TestAPI'
import { updateContest, updateTestsInContest } from 'actions/api/ContestAPI'

export default function ContestInfo() {
    const navigate = useNavigate()

    // Load Contest information
    let { contestId } = useParams()
    const {
        response: contestResponse,
        loading: contestIsLoading,
        error: contestIsError
    } = useAxios({
        method: 'GET',
        url: `/contests/${contestId}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    const user = useSelector((state) => state.auth.user)

    const [contest, setContest] = useState(null)
    const [isShowCreateContest, setIsShowCreateContest] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [isShowStatisticTest, setIsShowStatisticTest] = useState(false)
    const [isShowShareModal, setIsShowShareModal] = useState(false)
    const [shareContent, setShareContent] = useState({})
    const [confirmModalContent, setConfirmModalContent] = useState('')
    const [currentAction, setCurrentAction] = useState('')
    const [selectedTest, setSelectedTest] = useState(null) //TODO chuyển selectedTest sang lưu trữ selectedTest.id

    // Test information
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [embededMedia, setEmbedMedia] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')

    useEffect(() => {
        if (contestResponse) {
            console.log('response', contestResponse)
            const c = contestResponse.data
            setContest(c)
            setTitle(c.name)
            setDescription(c.description)
            setUrl(c.url)
            setEmbedMedia(c.embededMedia)
            const start_time = splitTime(c.startTime)
            const end_time = splitTime(c.endTime)
            setStartDate(start_time.date)
            setStartTime(start_time.time)
            setEndDate(end_time.date)
            setEndTime(end_time.time)
        }
    }, [contestResponse])

    const onAction = (isUpdate, action, title, description, url, embededMedia, startTime, endTime) => {

        if (action === MODAL_ACTION_CONFIRM) {
            const newContest = {
                ...contest,
                name: title,
                description: description,
                url: url,
                embededMedia: embededMedia,
                startTime: startTime,
                endTime: endTime
            }
            //TODO updateContest(newContest)
        }
        else if (action === MODAL_ACTION_CLOSE) {
            //
        }
        setIsShowCreateContest(false)
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

    const handleShareContent = (url = '',
        title = '', content = '', hashtags = [], source = ''
    ) => {
        const obj = {
            url: url | process.env.REACT_APP_DOMAIN,
            title: title | '',
            content: content | '',
            hashtags: hashtags | '',
            source: source | ''
        }
        setShareContent(obj)
        setIsShowShareModal(true)
    }

    //#endregion

    const onTestAction = async (action) => {
        if (currentAction === 'CONFIRM_DELETE_TEST') {
            if (selectedTest && action === MODAL_ACTION_CONFIRM) {
                const newContest = { ...contest }
                const index = newContest.tests.findIndex(c => c.id === selectedTest.id)
                newContest.tests.splice(index, 1)

                // Xóa selected test trong CSDL
                const data = await deleteTest(selectedTest._id)
                console.log(data)

                // Cập nhật lại contest
                const tmp = await updateContest(newContest)
                console.log(tmp)
            }
        }
        else if (currentAction === 'CONFIRM_CREATE_TEST') {
            if (action === MODAL_ACTION_CONFIRM) {
                const newTest = {
                    ...blankTest,
                    creatorId: user.id,
                    startTime: new Date().toISOString(),
                    endTime: new Date().toISOString()
                }

                // Tạo mới test, lưu vào CSDL
                const newTestRes = await createTest(newTest)

                // Cập nhật lại contest hiện tại
                const listTestId = contest.tests.map(t => t._id)
                listTestId.push(newTestRes.test.id)
                console.log(listTestId)
                const contestRes = await updateTestsInContest(contest.id, listTestId)
                console.log(contestRes)
                setContest(contestRes.contest)
                navigate(`/test/${newTestRes.test.id}`)
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
            //TODO updateContest(newContest)
        }
    }, [selectedTest])

    return (
        <>
            <div className="contest-information">
                {/* <!-- Title of Contest Info page ---> */}
                <div className="contest-title">
                    <div className="heading h2 fw-bolder">{title}</div>
                </div>

                {/* <!-- ContestInfo container --> */}
                {contestIsLoading &&
                    <div className='loading d-flex align-items-center justify-content-center'>
                        <HashLoader
                            color={'#7ED321'}
                            loading={contestIsLoading}
                        />
                    </div>
                }

                {!contestIsLoading &&
                    <div className="container-section">
                        <div className="contest-show-info">
                            <Card className="text-center">
                                <Image fluid={true} variant="top"
                                    src={embededMedia}
                                    className="p-3 contest-image"
                                />
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
                                                            type="text"
                                                            value={startDate}
                                                            readOnly={true}
                                                        />
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
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
                                                            type="text"
                                                            value={endDate}
                                                            readOnly={true}
                                                        />
                                                        <Form.Control
                                                            size="sm"
                                                            type="text"
                                                            value={endTime}
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>

                                    {user.role === ROLE_CREATOR &&
                                        <div>
                                            <Button variant="primary" className="m-2 fw-bolder text-light" size="sm"
                                                onClick={() => setIsShowCreateContest(true)}>
                                                <i className="fa fa-edit"></i>
                                            </Button>
                                            <Button variant="success" className="m-2 fw-bolder text-light" size="sm"
                                                onClick={handleCreateTest}
                                            >
                                                <i className="fa fa-plus"></i>
                                            </Button>
                                            <Button variant="info" className="m-2 fw-bolder text-light" size="sm"
                                                onClick={() => handleShareContent(url, title, description, ['X2MINT', 'ITUTE'])}>
                                                <i className="fa fa-share"></i>
                                            </Button>
                                        </div>
                                    }

                                    {user.role === ROLE_USER &&
                                        <Button variant="info" className="m-2 fw-bolder text-light" size="sm"
                                            onClick={() => handleShareContent(url, title, description, ['X2MINT', 'ITUTE'])}
                                        >
                                            <i className="fa fa-share"></i>
                                            <span className="m-3">Chia sẻ</span>
                                        </Button>
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
                                <hr />

                                <div className="show-all-tests">
                                    {contest.tests.map((test, index) =>
                                        <Card.Body key={index} className="row">
                                            <div className="card-test-preview">
                                                <div className="card-test-index col-md-1 col-sm-12">
                                                    <div className="test-index d-flex justify-content-center align-middle">{index + 1}</div>
                                                </div>

                                                <div className="card-test-info col-md-10 col-sm-12 pt-3 pb-3">
                                                    <div className="card-test-title h5">{test.name}</div>
                                                    <div className="card-test-description m-3">{test.description}</div>

                                                    <hr style={
                                                        {
                                                            width: '50%',
                                                            height: '1px',
                                                            margin: '12px auto'
                                                        }
                                                    } />

                                                    <div className="detail row">
                                                        <div className="start-time col-md-4 col-12">
                                                            <div className="fw-bolder">Thời gian bắt đầu: </div>
                                                            <div>{test.startTime}</div>
                                                        </div>

                                                        <div className="duration col-md-4 col-12">
                                                            <div className="fw-bolder">Thời lượng làm bài: </div>
                                                            <div>{displayTimeDelta(test.startTime, test.endTime)}</div>
                                                        </div>
                                                        <div className="card-test-quantity col-md-4 col-12">
                                                            <div className="fw-bolder">Số câu hỏi: </div>
                                                            <div>{test.questions.length}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-test-actions col-md-1 col-sm-12  pt-3 pb-3">
                                                    <Button variant="info" size="sm"
                                                        onClick={() => handleShareContent(test.url, test.name, test.description)}
                                                        className="fw-bolder text-light"
                                                    >
                                                        <i className="fa fa-share"></i>
                                                    </Button>

                                                    {user.role === ROLE_CREATOR &&
                                                        <>
                                                            <Button variant="warning" size="sm"
                                                                onClick={() => handleStatisticsTest(test)} >
                                                                <i className="fa fa-bar-chart"></i>
                                                            </Button>
                                                            <Button variant="primary" size="sm"
                                                                onClick={() => navigate(`/test/${test._id}`)}>
                                                                <i className="fa fa-edit"></i>
                                                            </Button>
                                                            <Button variant="danger" size="sm"
                                                                onClick={() => handleDeleteTest(test)} >
                                                                <i className="fa fa-remove"></i>
                                                            </Button>
                                                        </>
                                                    }

                                                    {user.role === ROLE_USER &&
                                                        <>
                                                            <Button variant={Date.parse(test.endTime) - Date.now() <= 0 ? 'secondary' : 'success'}
                                                                disabled={Date.parse(test.endTime) - Date.now() <= 0}
                                                                onClick={() => navigate(`/test/${test._id | test.id}`)}
                                                                size="sm"
                                                            >
                                                                <i className="fas fa-pen"></i>
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
                }
            </div>

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

            <Share
                isShow={isShowShareModal}
                handleIsShow={setIsShowShareModal}
                shareContent={shareContent}
            />
        </>
    )
}