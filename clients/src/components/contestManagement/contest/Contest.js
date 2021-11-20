import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalCreateContest from 'components/contestManagement/modalCreateContest/ModalCreateContest'
import Navbar from 'components/common/navbar/Navbar'
import ContestInfo from 'components/contestManagement/contestInfo/ContestInfo'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { initialContest } from 'actions/initialData'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE, MODAL_ACTION_RETRY } from 'utils/constants'
import './Contest.scss'

function Contest(props) {
    const [contests, setContests] = useState(initialContest)
    const [isShow, setIsShow] = useState(false)
    const blankContest = {
        id: '',
        creator_id: 'user-1',
        tests: [],
        name: '',
        description: '',
        url: '',
        embeded_media: '',
        start_time: '',
        end_time: '',
        status: ''
    }
    const [selectedContest, setSelectedContest] = useState(blankContest)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isShowContestInfo, setIsShowContestInfo] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    const onAction = (isUpdate, action, title = '', description = '', url = '', embeded_media = '', start_time = '', end_time = '') => {
        if (action === MODAL_ACTION_CONFIRM) {
            const newContest = {
                ...blankContest,
                name: title,
                description: description,
                url: url,
                embeded_media: embeded_media,
                start_time: start_time,
                end_time: end_time
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
                            {contests.map((c, index) => (
                                <Card key={index}>
                                    <div className="d-flex justify-content-center">
                                        <Image className="embeded-media" src={c.embeded_media || 'https://sites.udel.edu/machineshop/wp-content/themes/oria/images/placeholder.png'} />
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
                            isCreator={true}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Contest