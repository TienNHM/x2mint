import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalCreateContest from 'components/contestManagement/modalCreateContest/ModalCreateContest'
import ContestInfo from 'components/contestManagement/contestInfo/ContestInfo'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { getAllContestsByCreator } from 'actions/api/ContestAPI'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE, MODAL_ACTION_RETRY } from 'utils/constants'
import './Contest.scss'
import { initialContest } from 'actions/initialData'

function Contest() {
    const [contests, setContests] = useState(initialContest)
    const [isShow, setIsShow] = useState(false)
    const blankContest = {
        id: '',
        creator_id: 'user-1',
        tests: [],
        name: '',
        description: '',
        url: '',
        embededMedia: '',
        startTime: '',
        endTime: '',
        status: ''
    }
    const [selectedContest, setSelectedContest] = useState(blankContest)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isShowContestInfo, setIsShowContestInfo] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    useEffect(() => {
        // getAllContestsByCreator(
        //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJpZnlBY2NvdW50Ijp7ImlkIjoiNjE4ZGNlYThhNjExZjQzNDAyOTYzMjhjIiwiaXNIaWRkZW4iOmZhbHNlLCJ1c2VybmFtZSI6Im1pbmhob2FuZzEiLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM3Njc5NTY3fQ.CPcIsCvLKejqGFm-VZSha-A4PdOjTE8XRKkUAeoFSes',
        //     '618dcea8a611f4340296328c')
        //     .then(data => {
        //         setContests(data.contests)
        //     })
        //     .catch(err => console.log(err))
    }, [])

    const onAction = (isUpdate, action, title = '', description = '', url = '', embededMedia = '', startTime = '', endTime = '') => {
        if (action === MODAL_ACTION_CONFIRM) {
            const newContest = {
                ...blankContest,
                name: title,
                description: description,
                url: url,
                embededMedia: embededMedia,
                startTime: startTime,
                endTime: endTime
            }
            const contestsList = [...contests]
            if (isUpdate) {
                newContest.id = selectedContest.id
                const index = contestsList.findIndex(c => c.id === newContest.id)
                contestsList.splice(index, 1, newContest)
            }
            else {
                newContest.id = 'contest-' + (contests.length + 1)
                contestsList.push(newContest)
            }
            setContests(contestsList)
            setSelectedContest(newContest)
            setIsShow(false)
        }
        else if (action === MODAL_ACTION_CLOSE) {
            setIsShow(false)
        }
        else if (action === MODAL_ACTION_RETRY) {
            // Do nothing
        }
    }

    const handleAction = (c, is_update) => {
        //TODO xác nhận tạo bài thi mới
        setSelectedContest({ ...c })
        setIsUpdate(is_update)
        setIsShow(true)
    }

    const handleViewContestDetail = (contest) => {
        setSelectedContest({ ...contest })
        setIsShowContestInfo(!isShowContestInfo)
    }

    const handleConfirmModalAction = (action) => {
        setIsShowConfirmModal(false)
        if (action === MODAL_ACTION_CONFIRM) {
            handleAction(blankContest, false)
        }
    }

    return (
        <>
            <div>
                {!isShowContestInfo &&
                    <div className="contest-management">
                        <div className="heading row">
                            <div className="create-contest col-2">
                                <Button variant="primary">
                                    Trở về
                                </Button>{' '}
                            </div>
                            <div className="heading-contest h4 col-8">Các cuộc thi</div>
                            <div className="create-contest col-2">
                                <Button variant="primary"
                                    onClick={() => setIsShowConfirmModal(true)}>
                                    Tạo cuộc thi
                                </Button>{' '}
                            </div>
                        </div>

                        <div className="list-contests d-flex justify-content-center">
                            {contests && contests.map((c, index) => (
                                <Card key={index}>
                                    <div className="d-flex justify-content-center">
                                        <Image className="embeded-media" src={c.embededMedia || 'https://sites.udel.edu/machineshop/wp-content/themes/oria/images/placeholder.png'} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{c.name}</Card.Title>
                                        <div className="contest-action">
                                            <Button
                                                variant="primary" size="sm"
                                                onClick={() => handleViewContestDetail(c)}
                                            >
                                                Chi tiết
                                            </Button>
                                            <Button
                                                variant="warning" size="sm"
                                                onClick={() => handleAction(c, true)}
                                            >
                                                Chỉnh sửa
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                        <ModalCreateContest
                            isShow={isShow}
                            onAction={onAction}
                            contest={selectedContest}
                            setContests={setSelectedContest}
                            isUpdate={isUpdate}
                        />
                        <ConfirmModal
                            content="Bạn muốn tạo cuộc thi mới?"
                            isShow={isShowConfirmModal}
                            onAction={handleConfirmModalAction}
                        />
                    </div>
                }

                {isShowContestInfo &&
                    <div>
                        <ContestInfo
                            setIsShowContestInfo={setIsShowContestInfo}
                            contest={selectedContest}
                            updateContest={setSelectedContest}
                            isCreator={false}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Contest