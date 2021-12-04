import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalCreateContest from 'components/contest/modalCreateContest/ModalCreateContest'
import ContestInfo from 'components/contest/contestInfo/ContestInfo'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import { useGetAllContestsByCreatorId } from 'actions/api/ContestAPI'
import Share from 'components/common/share/Share'
import './Contest.scss'
import { initialContest, blankContest } from 'actions/initialData'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import {
    MODAL_ACTION_CONFIRM,
    MODAL_ACTION_CLOSE,
    MODAL_ACTION_RETRY,
    USER_ID, ACCESS_TOKEN
} from 'utils/constants'

function Contest({ isCreator }) {
    const { response, loading, error } = useAxios({
        method: 'GET',
        url: `/contests/creator/${Cookies.get(USER_ID)}`,
        headers: {
            Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })

    const [contests, setContests] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const [isShowShareModal, setIsShowShareModal] = useState(false)
    const [shareContent, setShareContent] = useState({})
    const [selectedContest, setSelectedContest] = useState(null)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isShowContestInfo, setIsShowContestInfo] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)

    useEffect(() => {
        if (response) {
            setContests(response.contests)
        }
    }, [response])

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

    //#region Handle
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

    const handleShareContent = (id, title = '', content = '', hashtags = [], source = '') => {
        const url = `${process.env.REACT_APP_DOMAIN}/contest/${id}`
        
        console.log(url)
        const obj = {
            url: url,
            title: title,
            content: content,
            hashtags: hashtags,
            source: source
        }
        setShareContent(obj)
        setIsShowShareModal(true)
    }

    //#endregion

    /**
     * 
     * @param {*} c contest object
     * @param {*} index used as key for contest
     * @returns Contest card UI
     */
    const RenderContest = (c, index) => {
        return (
            <>
                <Card key={index}>
                    <div className="d-flex justify-content-center embeded-media">
                        <Image className="embeded-img" src={c.embededMedia || 'https://sites.udel.edu/machineshop/wp-content/themes/oria/images/placeholder.png'} />
                    </div>
                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <hr style={
                            {
                                width: '90%',
                                height: '1px',
                                margin: '15px auto',
                                borderColor: 'black'
                            }
                        } />
                        <div className="contest-action">
                            <Button
                                variant="secondary" size="sm"
                                href={`/contest/${c.id}`}
                            // onClick={() => handleViewContestDetail(c)}
                            >
                                <i className="fa fa-info-circle"></i>
                            </Button>

                            {isCreator &&
                                <Button
                                    variant="primary" size="sm"
                                    onClick={() => handleAction(c, true)}
                                >
                                    <i className="fa fa-edit"></i>
                                </Button>
                            }

                            <Button
                                variant="info" size="sm"
                                onClick={() => handleShareContent(
                                    c.id,
                                    c.name,
                                    c.description,
                                    ['X2MINT', 'ITUTE'])
                                }
                            >
                                <i className="fa fa-share"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <>
            <div>
                {!isShowContestInfo &&
                    <div className="contest-management">
                        <div className="heading row d-flex justify-content-between">
                            <div className="create-contest col-2 col-sm-3 d-flex justify-content-start">
                            </div>
                            <div className="heading-contest h4 col-8 col-sm-6">Các cuộc thi</div>
                            <div className="create-contest col-2 col-sm-3 d-flex justify-content-end">
                                {isCreator &&
                                    <Button variant="success" size="sm"
                                        onClick={() => setIsShowConfirmModal(true)}>
                                        <i className="fa fa-plus"> </i>
                                        <span className="m-2">Tạo mới</span>
                                    </Button>
                                }
                            </div>
                        </div>

                        <div className="list-contests d-flex justify-content-center align-items-center">
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                error ? (
                                    <p>{error.message}</p>
                                ) : contests.map((c, index) => RenderContest(c, index))
                            )
                            }
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
                        <Share
                            isShow={isShowShareModal}
                            handleIsShow={setIsShowShareModal}
                            shareContent={shareContent}
                        />
                    </div>
                }

                {isShowContestInfo &&
                    <div>
                        <ContestInfo
                            setIsShowContestInfo={setIsShowContestInfo}
                            contest={selectedContest}
                            updateContest={setSelectedContest}
                            isCreator={isCreator}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Contest