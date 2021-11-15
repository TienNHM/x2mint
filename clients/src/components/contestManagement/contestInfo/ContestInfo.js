import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ModalCreateContest from 'components/contestManagement/modalCreateContest/ModalCreateContest'
import './ContestInfo.scss'

export default function ContestInfo({ setIsShowContestInfo, contest, updateContest }) {
    const [isShow, setIsShow] = useState(false)
    const [title, setTitle] = useState(' ')
    const [description, setDescription] = useState(' ')
    const [url, setUrl] = useState(' ')
    const [embededMedia, setEmbedMedia] = useState(' ')

    useEffect(() => {
        setTitle(contest.name)
        setDescription(contest.description)
        setUrl(contest.url)
        setEmbedMedia(contest.embeded_media)
    }, [contest])

    const onAction = (isUpdate, action, title, description, url, embeded_media, start_time, end_time) => {
        updateContest(isUpdate, action, title, description, url, embeded_media, start_time, end_time)
        setIsShow(false)
    }

    return (
        <>
            <div className="contest-information">
                <div className="nav-top">
                    <div className="back">
                        <Button variant="primary"
                            onClick={() => setIsShowContestInfo(false)}
                        >
                            Trở về
                        </Button>{' '}
                    </div>
                    <div className="heading h4">Cuộc thi</div>
                </div>
                <div className="container-section">
                    <div className="contest-show-info">
                        <Card className="text-center">
                            <Card.Img variant="top" src={embededMedia} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <Button variant="primary" onClick={() => setIsShow(true)}>Chỉnh sửa</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="list-tests">Hi</div>
                </div>
            </div>
            <ModalCreateContest
                isShow={isShow}
                onAction={onAction}
                contest={contest}
                isUpdate={true}
            />
        </>
    )
}