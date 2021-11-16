import React, { useEffect, useState } from 'react'
import PanelContainer from 'components/contestManagement/panelContainer/PanelContainer'
import Navbar from 'components/common/navbar/Navbar'
import { initialContest } from 'actions/initialData'
import './ContestManagement.scss'

function Contest() {

    const [contests, setContests] = useState(initialContest)

    useEffect(() => {
    }, [contests])

    return (
        <>
            <Navbar />
            <PanelContainer contests={contests} setContests={setContests} />
        </>
    )
}

export default Contest