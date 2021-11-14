import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalCreateContest from '../modalCreateContest/ModalCreateContest'
import {MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE} from 'utils/constants'
import './PanelContainer.scss'

function PanelContainer(props) {
    const [isShow, setIsShow] = useState(false)
    const onAction = (action) => {
        if (action === MODAL_ACTION_CONFIRM) {
            //
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