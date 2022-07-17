import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import { Button, Card, ListGroup, ListGroupItem, Form, Image, FormControl } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import ModalCreateContest from 'components/contest/modalCreateContest/ModalCreateContest'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import Share from 'components/common/share/Share'
import { useAxios } from 'actions/useAxios'
import { createTest, deleteTest } from 'actions/api/TestAPI'
import { blankTest } from 'actions/initialData'
import { displayTime, displayTimeDelta, splitTime } from 'utils/timeUtils'
import { archiveContest, updateContest, updateTestsInContest } from 'actions/api/ContestAPI'
import { getAllTakeTestByUser } from 'actions/api/TakeTestAPI'
import { MODAL_ACTION, COOKIES, ROLE, STATUS, ACCOUNT_TYPES } from 'utils/constants'
import './ContestInfo.scss'
import { cloneDeep } from 'lodash'
import { toast } from 'react-toastify'
import { ImportTestData } from 'utils/ImportTestData'

export default function ContestInfo() {
    const navigate = useNavigate()

    // Load Contest information
    let { contestIdOrUrl } = useParams()
    const {
        response: contestResponse,
        loading: contestIsLoading
    } = useAxios({
        method: 'GET',
        url: `/contests/${contestIdOrUrl}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const CURRENT_ACTION = {
        DELETE_TEST: 'delete-test',
        CREATE_TEST: 'create-test',
        ARCHIVE_CONTEST: 'delete-contest',
        REOPEN_CONTEST: 'reopen-contest'
    }

    const user = useSelector((state) => state.auth.user)

    //#region States
    const [data, setData] = useState(null) // Tests hiện ra kết quả tìm kiếm
    const [contest, setContest] = useState(null) // Data từ API
    const [isShowImportTest, setIsShowImportTest] = useState(false)
    const [isShowCreateContest, setIsShowCreateContest] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [isShowShareModal, setIsShowShareModal] = useState(false)
    const [shareContent, setShareContent] = useState({})
    const [confirmModalContent, setConfirmModalContent] = useState('')
    const [currentAction, setCurrentAction] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTest, setSelectedTest] = useState(null)

    // Test information
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    //const [url, setUrl] = useState('')
    const [embededMedia, setEmbedMedia] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')

    // TakeTest
    const [takeTestStatus, setTakeTestStatus] = useState(user.role === ROLE.USER ? null : true)
    //#endregion

    const getTakeTestByUserData = async (tests) => {
        const data = await getAllTakeTestByUser(user.id)

        var status = {}
        for (const test of tests) {
            var count = 0
            data.takeTests.map(value => {
                if (value.test._id === test._id)
                    count += 1
            })
            status[test._id] = count
        }

        setTakeTestStatus(status)
    }

    useEffect(() => {
        if (contestResponse) {
            const _contest = cloneDeep(contestResponse.data)
            setContest(_contest)
            setData(_contest.tests)

            if (user.role === ROLE.USER) {
                getTakeTestByUserData(_contest.tests)
            }
        }
    }, [contestResponse])

    useEffect(() => {
        if (contest) {
            setTitle(contest.name)
            setDescription(contest.description)
            //setUrl(contest.url)
            setEmbedMedia(contest.embededMedia)
            const start_time = splitTime(contest.startTime)
            const end_time = splitTime(contest.endTime)
            setStartDate(start_time.date)
            setStartTime(start_time.time)
            setEndDate(end_time.date)
            setEndTime(end_time.time)
        }
    }, [contest])

    const onAction = async (
        isUpdate, action, title, description,
        url, newUrl, embededMedia, startTime, endTime
    ) => {
        if (action === MODAL_ACTION.CONFIRM) {
            const newContest = {
                ...contest,
                name: title,
                description: description,
                url: newUrl ? newUrl : null,
                embededMedia: embededMedia,
                startTime: startTime,
                endTime: endTime
            }
            const data = await updateContest(newContest)

            setContest(data.contest)

            toast.success('🎉 Đã lưu thành công!')
        }
        else if (action === MODAL_ACTION.CLOSE) {
            toast.warning(`💢 Đã hủy chỉnh sửa đối với cuộc thi ${contest.name}!`)
        }
        setIsShowCreateContest(false)
    }

    const handleArchiveContest = () => {
        setConfirmModalContent('Bạn có thật sự muốn lưu trữ cuộc thi này?')
        setCurrentAction(CURRENT_ACTION.ARCHIVE_CONTEST)
        setIsShowConfirmModal(true)
    }

    const handleReopenContest = () => {
        setConfirmModalContent('Bạn có thật sự muốn mở lại cuộc thi này?')
        setCurrentAction(CURRENT_ACTION.REOPEN_CONTEST)
        setIsShowConfirmModal(true)
    }

    const handleCreateTest = () => {
        setCurrentAction(CURRENT_ACTION.CREATE_TEST)
        setConfirmModalContent('Bạn muốn tạo một bài test mới?')
        setIsShowConfirmModal(true)
    }

    const handleDeleteTest = (test) => {
        setSelectedTest({ ...test })
        setConfirmModalContent(`Bạn có muốn xóa bài test ${test.name} khỏi cuộc thi ${title} không?`)
        setCurrentAction(CURRENT_ACTION.DELETE_TEST)
        setIsShowConfirmModal(true)
    }

    const handleShareContent = (url = '', title = '', content = '', hashtags = [], source = ''
    ) => {
        const obj = {
            url: process.env.REACT_APP_WEBSITE + url,
            title: title + ' ',
            content: content + ' ',
            hashtags: hashtags,
            source: source + ' '
        }
        setShareContent(obj)
        setIsShowShareModal(true)
    }

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase()
        if (contest) {
            const result = []
            for (const c of contest.tests) {
                if (c.name.toLowerCase().includes(query)) {
                    result.push(c)
                }
            }
            setData(result)
        }
    }

    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            handleSearch()
        }
        else {
            if (contest)
                setData(cloneDeep(contest.tests))
        }
    }, [searchQuery])
    //#endregion

    const onTestAction = async (action) => {
        if (currentAction === CURRENT_ACTION.DELETE_TEST) {
            if (selectedTest && action === MODAL_ACTION.CONFIRM) {
                const newContest = { ...contest, url: null }
                const index = newContest.tests.findIndex(c => c._id === selectedTest._id)
                newContest.tests.splice(index, 1)

                // Xóa selected test trong CSDL
                await deleteTest(selectedTest._id)

                // Cập nhật lại contest
                const re = await updateContest(newContest)
                setContest(cloneDeep(re.contest))
                setData(cloneDeep(re.contest.tests))

                toast.success(`🎉 Đã xóa bài test ${selectedTest.name} ra khỏi cuộc thi ${contest.name} thành công!`)
            }
        }
        else if (currentAction === CURRENT_ACTION.CREATE_TEST) {
            if (action === MODAL_ACTION.CONFIRM) {
                const newTest = {
                    ...blankTest,
                    creatorId: user.id,
                    startTime: new Date(),
                    endTime: new Date()
                }

                // Tạo mới test, lưu vào CSDL
                const newTestRes = await createTest(newTest)

                // Cập nhật lại contest hiện tại
                const listTestId = contest.tests.map(t => t._id)
                listTestId.push(newTestRes.test.id)

                const contestRes = await updateTestsInContest(contest.id, listTestId)

                setContest(contestRes.contest)
                navigate(`/test/${newTestRes.test.id}`)

                toast.success('🎉 Đã bài bài test thành công, vui lòng bổ sung đầy đủ thông tin!')
            }
        }
        else if (currentAction === CURRENT_ACTION.ARCHIVE_CONTEST) {
            if (action === MODAL_ACTION.CONFIRM) {
                const newContest = { ...contest, url: null }
                const data = await archiveContest(newContest)

                setContest({
                    ...data.contest
                })

                toast.success('🎉 Đã lưu trữ cuộc thi thành công!')
            }
            else {
                toast.warning('💢 Đã hủy bỏ thay đổi!')
            }
        }
        else if (currentAction === CURRENT_ACTION.REOPEN_CONTEST) {
            const newContest = { ...contest, _status: STATUS.OK, url: null }
            await updateContest(newContest)

            setContest(newContest)

            toast.success(`🎉 Cuộc thi ${contest.name} đã được mở công khai!`)
        }
        setIsShowConfirmModal(false)
    }

    const renderContestInfo = () => {
        return (
            <Card className="text-center">
                <div className="d-flex justify-content-center">
                    <Image fluid={true} variant="top"
                        src={embededMedia ?
                            embededMedia :
                            process.env.PUBLIC_URL + '/assets/images/placeholder.png'
                        }
                        className="p-3 contest-image"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="fw-bolder text-success text-uppercase">
                        {title}
                    </Card.Title>

                    <Badge pill bg="warning" text="dark"
                        hidden={contest._status !== STATUS.ARCHIVED}>
                        Đã lưu trữ
                    </Badge>

                    <Card.Text className="mx-2 mt-2 p-1 d-flex align-items-center justify-content-center">
                        {description}
                    </Card.Text>

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

                    {user.role !== ROLE.USER &&
                        <div>
                            <Button variant="primary" className="m-2 fw-bolder text-light" size="sm"
                                onClick={() => setIsShowCreateContest(true)}>
                                <i className="fa fa-edit"></i>
                            </Button>

                            <Button variant="success" className="m-2 fw-bolder text-light" size="sm"
                                onClick={handleCreateTest}>
                                <i className="fa fa-plus"></i>
                            </Button>

                            <Button variant="info" className="m-2 fw-bolder text-light" size="sm"
                                onClick={() => handleShareContent(`${contest.url}`, title, description, ['X2MINT', 'ITUTE'])}>
                                <i className="fa fa-share"></i>
                            </Button>

                            {contest._status !== STATUS.ARCHIVED &&
                                <Button variant="danger" className="m-2 fw-bolder text-light" size="sm"
                                    onClick={handleArchiveContest}>
                                    <i className="fa fa-archive"></i>
                                </Button>
                            }

                            {contest._status === STATUS.ARCHIVED &&
                                <Button variant="primary" className="m-2 fw-bolder text-light" size="sm"
                                    onClick={handleReopenContest}>
                                    <i className="fa fa-folder-open"></i>
                                </Button>
                            }

                            <Button variant="warning" className="m-2 fw-bolder text-light" size="sm"
                                onClick={() => navigate(`/statistics/contest/${contest.id}/taketests`)}>
                                <i className="fa fa-bar-chart"></i>
                            </Button>
                        </div>
                    }

                    {user.role === ROLE.USER &&
                        <Button variant="info" className="m-2 fw-bolder text-light" size="sm"
                            onClick={() => handleShareContent(`${contest.url}`, title, description, ['X2MINT', 'ITUTE'])}
                        >
                            <i className="fa fa-share"></i>
                            <span className="m-3">Chia sẻ</span>
                        </Button>
                    }
                </Card.Body>
            </Card>
        )
    }

    const renderTest = (test, index) => {
        return (
            <Card.Body className="row">
                <div className="card-test-preview">
                    <div className="card-test-index col-12 col-lg-1">
                        <div className="test-index d-flex justify-content-center align-middle">
                            {index + 1}
                        </div>
                    </div>

                    <div className="card-test-info col-12 col-lg-10 pt-3 pb-3">
                        <div className="card-test-title h4 fw-bolder text-success">
                            {test.name}
                        </div>

                        <div className="card-test-description m-3">
                            {test.description}
                        </div>

                        <hr style={{ width: '50%', height: '1px', margin: '12px auto' }} />

                        <div className="detail row">
                            <div className="start-time col ps-3 pe-3">
                                <div className="fw-bolder">Thời gian bắt đầu: </div>
                                <div>{displayTime(test.startTime)}</div>
                            </div>

                            <div className="duration col ps-3 pe-3">
                                <div className="fw-bolder">Thời lượng làm bài: </div>
                                <div>{displayTimeDelta(test.startTime, test.endTime)}</div>
                            </div>

                            <div className="card-test-quantity col ps-3 pe-3">
                                <div className="fw-bolder">Số câu hỏi: </div>
                                <div>{test.questions.length}</div>
                            </div>

                            <div className="card-test-quantity col ps-3 pe-3">
                                <div className="fw-bolder">Số lượt làm bài: </div>
                                <div>{test.maxTimes > 0 ? test.maxTimes : 'Không giới hạn'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="card-test-actions col-12 col-lg-1 pt-3 pb-3">
                        <div className="row">
                            <Button variant="info" size="sm"
                                onClick={() => handleShareContent(`/test/${test._id}`, test.name, test.description)}
                                className="fw-bolder text-light col"
                            >
                                <i className="fa fa-share"></i>
                            </Button>

                            {user.role !== ROLE.USER &&
                                <>
                                    <Button variant="warning" size="sm"
                                        className="col"
                                        onClick={() => navigate(`/statistics/take-test/${test._id}`)} >
                                        <i className="fa fa-bar-chart"></i>
                                    </Button>
                                    <Button variant="primary" size="sm"
                                        className="col"
                                        onClick={() => navigate(`/test/${test._id}`)}>
                                        <i className="fa fa-edit"></i>
                                    </Button>
                                    <Button variant="danger" size="sm"
                                        className="col"
                                        onClick={() => handleDeleteTest(test)} >
                                        <i className="fa fa-remove"></i>
                                    </Button>
                                </>
                            }

                            {user.role === ROLE.USER &&
                                <>
                                    <Button variant={Date.parse(test.endTime) - Date.now() <= 0 ? 'secondary' : 'success'}
                                        disabled={
                                            (Date.parse(test.endTime) - Date.now() <= 0) ||
                                            ((takeTestStatus[test._id] >= test.maxTimes) && (test.maxTimes > 0))
                                        }
                                        onClick={() => navigate(`/test/${test._id}`)}
                                        size="sm"
                                        className="col"
                                    >
                                        <i className="fas fa-pen"></i>
                                        {test.maxTimes > 0 &&
                                            <span className="px-1">{test.maxTimes - takeTestStatus[test._id]}</span>
                                        }
                                    </Button>
                                    <Button variant="warning"
                                        onClick={() => navigate(`/statistics/take-test/${test._id}`)}
                                        size="sm"
                                        className="col"
                                    >
                                        <i className="fa fa-bar-chart"></i>
                                    </Button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </Card.Body>
        )
    }

    return (
        <>
            <div className="contest-information">
                {/* <!-- Title of Contest Info page ---> */}
                {/* <div className="contest-title">
                    <div className="heading h2 fw-bolder">{title}</div>
                </div> */}

                {/* <!-- ContestInfo container --> */}
                {(contestIsLoading || !takeTestStatus) &&
                    <div className='loading d-flex align-items-center justify-content-center'>
                        <HashLoader
                            color={'#7ED321'}
                            loading={contestIsLoading}
                        />
                    </div>
                }

                {!contestIsLoading && takeTestStatus &&
                    <div className="container-section row">
                        <div className="contest-show-info col-xl-3 col-lg-4 col-md-5 col-sm-12">
                            {renderContestInfo()}
                        </div>

                        <div className="list-tests col-xl-9 col-lg-8 col-md-7 col-sm-12">
                            <Card>
                                <Card.Header className="row search-section d-flex justify-content-center">
                                    {user.role !== ROLE.USER && (
                                        <div className="import-test-area col-6 col-lg-3 d-flex justify-content-center align-items-center">
                                            <Button onClick={() => setIsShowImportTest(true)}
                                                disabled={user && user.type !== ACCOUNT_TYPES.PRO}>
                                                <i className="fa fa-upload"></i>
                                                <span className="px-2 import-test">Import</span>
                                                <Badge bg="warning" pill>Pro</Badge>
                                            </Button>
                                            <ImportTestData
                                                contest={contest}
                                                isShow={isShowImportTest}
                                                onCloseAction={() => setIsShowImportTest(false)}
                                            />
                                        </div>
                                    )}
                                    <div className="form-search-area col-6 col-lg-9 d-flex align-items-center justify-content-between">
                                        <FormControl
                                            type="search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            style={{ boxShadow: 'none' }}>
                                        </FormControl>
                                        <div className="p-1 d-flex justify-content-center">
                                            <Button variant="primary" className="ms-1"
                                                onClick={() => handleSearch()}>
                                                <i className="fa fa-search"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Header>

                                <div className="show-all-tests">
                                    {data.map((test, index) =>
                                        <div key={index}>{renderTest(test, index)}</div>
                                    )}

                                    {data.length == 0 &&
                                        <Card.Body className="row d-flex justify-content-center align-items-center">
                                            <Image src={process.env.PUBLIC_URL + '/assets/images/nothing.svg'} style={{ width: '70%' }} />
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

            <Share
                isShow={isShowShareModal}
                handleIsShow={setIsShowShareModal}
                shareContent={shareContent}
            />
        </>
    )
}