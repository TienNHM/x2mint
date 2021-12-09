import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalCreateContest from 'components/contest/modalCreateContest/ModalCreateContest'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import Share from 'components/common/share/Share'
import { blankContest } from 'actions/initialData'
import { useAxios } from 'actions/useAxios'
import { createContest, updateContest } from 'actions/api/ContestAPI'
import Cookies from 'js-cookie'
import {
    MODAL_ACTION_CONFIRM,
    MODAL_ACTION_CLOSE,
    MODAL_ACTION_RETRY,
    USER_ID, ACCESS_TOKEN, ROLE_CREATOR
} from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './Contest.scss'

export default function Contest() {
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()

    //#region Get all contests created by CreatorID
    const urlRequest = user.role === ROLE_CREATOR ?
        `/contests/creator/${Cookies.get(USER_ID)}` :
        '/contests'

    const { response, loading, error } = useAxios({
        method: 'GET',
        url: urlRequest,
        headers: {
            Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN)}`
        }
    })
    //#endregion

    //#region States
    const [contests, setContests] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const [isShowShareModal, setIsShowShareModal] = useState(false)
    const [shareContent, setShareContent] = useState({})
    const [selectedContest, setSelectedContest] = useState(null)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    //#endregion

    useEffect(() => {
        if (response) {
            setContests(response.contests)
            console.log(response)
        }
    }, [response])

    const onActionModalCreateContest = async (
        isUpdate, action, title = '', description = '',
        url = '', embededMedia = '', startTime = '', endTime = ''
    ) => {
        if (action === MODAL_ACTION_CONFIRM) {
            let data = null
            if (isUpdate) {
                const newContest = {
                    ...selectedContest,
                    name: title,
                    description: description,
                    url: url,
                    embededMedia: embededMedia,
                    startTime: startTime,
                    endTime: endTime,
                    creatorId: user.id
                }

                // Update lại hiển thị trên trang Quản lý các cuộc thi
                const index = contests.findIndex(c => c.id === selectedContest.id)
                let tmpContests = [...contests]
                tmpContests[index] = newContest
                setContests(tmpContests)
                setIsShow(false)

                // Update lại Database
                data = await updateContest(newContest)
                console.log(data)
            }
            else {
                const newContest = {
                    tests: [],
                    name: title,
                    description: description,
                    url: url,
                    embededMedia: embededMedia,
                    startTime: startTime,
                    endTime: endTime,
                    creatorId: user.id
                }
                data = await createContest(newContest)
                console.log(data)
                setSelectedContest(null)
                setIsShow(false)
                navigate(`/contest/${data.contest.id}`)
            }
        }
        else if (action === MODAL_ACTION_CLOSE) {
            setIsShow(false)
        }
        else if (action === MODAL_ACTION_RETRY) {
            // Do nothing
        }
    }

    //#region Handle
    const handleEditContest = (_contest, is_update) => {
        setSelectedContest({ ..._contest })
        setIsUpdate(is_update)
        setIsShow(true)
    }

    const handleConfirmModalAction = (action) => {
        setIsShowConfirmModal(false)
        if (action === MODAL_ACTION_CONFIRM) {
            handleEditContest(blankContest, false)
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
            <Card key={index}>
                <div className="d-flex justify-content-center embeded-media">
                    <Image className="embeded-img"
                        src={c.embededMedia || 'assets/placeholder.png'}
                    />
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
                            onClick={() => navigate(`/contest/${c.id}`)}
                        >
                            <i className="fa fa-info-circle"></i>
                        </Button>

                        {user.role === ROLE_CREATOR &&
                            <Button
                                variant="primary" size="sm"
                                onClick={() => handleEditContest(c, true)}
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
        )
    }

    return (
        <div className="contest-management">
            <div className="heading row d-flex justify-content-between">
                <div className="create-contest col-2 col-sm-3"></div>

                <div className="heading-contest h4 col-8 col-sm-6">Các cuộc thi</div>

                <div className="create-contest col-2 col-sm-3 d-flex justify-content-end">
                    {user.role === ROLE_CREATOR &&
                        <Button variant="success" size="sm"
                            onClick={() => setIsShowConfirmModal(true)}>
                            <i className="fa fa-plus"> </i>
                            <span className="m-2">Tạo mới</span>
                        </Button>
                    }
                </div>
            </div>

            <div className="list-contests d-flex justify-content-center align-items-center">
                {loading && (
                    <div className='sweet-loading'>
                        <HashLoader color={'#7ED321'} loading={loading} />
                    </div>
                )}

                {!loading && (
                    <>
                        {error && <p>{error.message}</p>}

                        {contests.map(
                            (c, index) =>
                                <div key={index}>{RenderContest(c, index)}</div>
                        )}
                    </>
                )}
            </div>

            <ModalCreateContest
                isShow={isShow}
                onAction={onActionModalCreateContest}
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
    )
}