import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalCreateContest from '../modalCreateContest/ModalCreateContest'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './PanelContainer.scss'

function PanelContainer({ contests, setContests }) {
    const [isShow, setIsShow] = useState(false)

    const onAction = (action, title, description, url, embeded_media, start_time, end_time) => {
        if (action === MODAL_ACTION_CONFIRM) {
            const newContest = {
                id: 'contest-' + (contests.length + 1),
                creator_id: 'user-1',
                tests: [],
                name: title,
                description: description,
                url: url,
                embeded_media: embeded_media,
                start_time: start_time,
                end_time: end_time,
                status: ''
            }
            const contestsList = [...contests]
            contestsList.push(newContest)
            setContests(contestsList)
        }
        else if (action === MODAL_ACTION_CLOSE) {
            //
        }
        setIsShow(false)
    }

    return (
        <>
            <div className="heading">
                <div className="heading-contest h4">Các cuộc thi</div>
                <div className="create-contest">
                    <Button variant="primary" onClick={() => setIsShow(true)}>Tạo cuộc thi</Button>{' '}
                </div>
            </div>
            <ModalCreateContest
                isShow={isShow}
                onAction={onAction}
            />
        </>
    )
}

export default PanelContainer