import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalCreateContest from '../modalCreateContest/ModalCreateContest'
import ContestInfo from 'components/contestManagement/contestInfo/ContestInfo'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './PanelContainer.scss'

function PanelContainer({ contests, setContests }) {
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

    const onAction = (isUpdate, action, title, description, url, embeded_media, start_time, end_time) => {
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
                console.log('index: ', index)
                contestsList.splice(index, 1, newContest)
            }
            else {
                newContest.id = 'contest-' + (contests.length + 1)
                contestsList.push(newContest)
            }
            setContests(contestsList)
            setSelectedContest(newContest)
        }
        else if (action === MODAL_ACTION_CLOSE) {
            //
        }
        console.log(contests)
        setIsShow(false)
    }

    const handleAction = (c, is_update) => {
        setSelectedContest({ ...c })
        setIsUpdate(is_update)
        setIsShow(true)
    }

    const handleViewContestDetail = (contest) => {
        setSelectedContest({ ...contest })
        setIsShowContestInfo(!isShowContestInfo)
    }

    return (
        <div>
            {!isShowContestInfo &&
                <div className="contest-management">
                    <div className="heading">
                        <div className="heading-contest h4">Các cuộc thi</div>
                        <div className="create-contest">
                            <Button variant="primary" onClick={() => handleAction(blankContest, false)}>Tạo cuộc thi</Button>{' '}
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
                </div>
            }

            {isShowContestInfo &&
                <div>
                    <ContestInfo
                        setIsShowContestInfo={setIsShowContestInfo}
                        contest={selectedContest}
                        updateContest={onAction}
                    />
                </div>
            }
        </div>
    )
}

export default PanelContainer