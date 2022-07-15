import React, { useEffect, useState } from 'react'
import { Button, Card, FormControl } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ModalCreateContest from 'components/contest/modalCreateContest/ModalCreateContest'
import ConfirmModal from 'components/common/confirmModal/ConfirmModal'
import Share from 'components/common/share/Share'
import { blankContest } from 'actions/initialData'
import { useAxios } from 'actions/useAxios'
import { createContest, updateContest } from 'actions/api/ContestAPI'
import Cookies from 'js-cookie'
import { MODAL_ACTION, COOKIES, ROLE } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Contest.scss'
import { cloneDeep } from 'lodash'
import { toast } from 'react-toastify'
import slug from 'vietnamese-slug'
import { stopWebcam } from 'utils/faceDetection'

export default function Contest() {
    stopWebcam(null)

    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()

    //#region Get contests
    let urlRequest = '/contests'

    if (user && user.role === ROLE.CREATOR) {
        urlRequest = `/contests/creator/${Cookies.get(COOKIES.USER_ID)}`
    }
    else if (user && user.role === ROLE.ADMIN) {
        urlRequest = '/contests/all'
    }

    const { response, loading, error } = useAxios({
        method: 'GET',
        url: urlRequest,
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })
    //#endregion

    //#region States
    const [data, setData] = useState(null) // DS tất cả contests
    const [contests, setContests] = useState(null) // Contests hiện ra kết quả tìm kiếm
    const [isShow, setIsShow] = useState(false)
    const [isShowShareModal, setIsShowShareModal] = useState(false)
    const [shareContent, setShareContent] = useState({})
    const [selectedContest, setSelectedContest] = useState(null)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    //#endregion

    useEffect(() => {
        if (response) {
            setContests(cloneDeep(response.contests))
            setData(cloneDeep(response.contests))
        }
    }, [response])

    const onActionModalCreateContest = async (
        isUpdate, action, title = '', description = '',
        url = '', newUrl = '', embededMedia = '', startTime = '', endTime = ''
    ) => {
        if (action === MODAL_ACTION.CONFIRM) {
            let data = null
            if (isUpdate) {
                const newContest = {
                    ...selectedContest,
                    name: title,
                    description: description,
                    url: newUrl ? newUrl : null,
                    embededMedia: embededMedia,
                    startTime: startTime,
                    endTime: endTime,
                    creatorId: user.id
                }

                // Update lại Database
                data = await updateContest(newContest)
                toast.success('🎉 Đã lưu thành công!')

                // Update lại hiển thị trên trang Quản lý các cuộc thi
                if (newUrl) {
                    newContest.url = `/contests/${slug(newUrl.trim())}`
                }
                const index = contests.findIndex(c => c.id === selectedContest.id)
                let tmpContests = [...contests]
                tmpContests[index] = newContest
                setContests(tmpContests)
                setIsShow(false)
            }
            else {
                if (new Date(startTime) < Date.now()) {
                    toast.error('💢Thời gian bắt đầu cuộc thi không hợp lệ. Vui lòng chọn lại!')
                    return
                }
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
                toast.success('🎉 Đã tạo cuộc thi thành công, vui lòng bổ sung thông tin đầy đủ cho cuộc thi!')
                setSelectedContest(null)
                setIsShow(false)
                navigate(`${data.contest.url}`)
            }
        }
        else if (action === MODAL_ACTION.CLOSE) {
            setIsShow(false)
            toast.warning('💢 Đã hủy bỏ thao tác trên!')
        }
        else if (action === MODAL_ACTION.RETRY) {
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
        if (action === MODAL_ACTION.CONFIRM) {
            handleEditContest(blankContest, false)
        }
    }

    const handleShareContent = (url, title = '', content = '', hashtags = [], source = ''
    ) => {
        const obj = {
            url: `${process.env.REACT_APP_WEBSITE}${url}`,
            title: title,
            content: content,
            hashtags: hashtags,
            source: source
        }
        setShareContent(obj)
        setIsShowShareModal(true)
    }

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase()
        if (data) {
            const result = []
            for (const c of data) {
                if (c.name.toLowerCase().includes(query)) {
                    result.push(c)
                }
            }
            setContests(result)
        }
    }

    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            handleSearch()
        }
        else {
            setContests(cloneDeep(data))
        }
    }, [searchQuery])

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
                        src={c.embededMedia || 'assets/images/placeholder.png'}
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
                            onClick={() => navigate(`${c.url}`)}
                        >
                            <i className="fa fa-info-circle"></i>
                        </Button>

                        {user.role !== ROLE.USER &&
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
                                c.url,
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
                <div className="create-contest col-2">
                    {user && user.role !== ROLE.USER &&
                        <Button variant="success" size="sm"
                            onClick={() => setIsShowConfirmModal(true)}>
                            <i className="fa fa-plus"> </i>
                            <span className="m-2 btn-label">Tạo mới</span>
                        </Button>
                    }
                </div>

                <div className="search-contest col-8">
                    <FormControl type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}>
                    </FormControl>
                </div>

                <div className="heading-contest col-2 d-flex justify-content-start">
                    <Button variant="primary" size="sm"
                        onClick={() => handleSearch()}>
                        <i className="fa fa-search"></i>
                        <span className="m-2 btn-label fw-bolder">Tìm</span>
                    </Button>
                </div>
            </div>

            <div className="list-contests d-flex align-items-center">
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

                        {contests.length === 0 &&
                            <Card.Body className="row d-flex justify-content-center align-items-center">
                                <Image src={process.env.PUBLIC_URL + '/assets/images/nothing.svg'} style={{ width: '50%' }} />
                            </Card.Body>
                        }
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