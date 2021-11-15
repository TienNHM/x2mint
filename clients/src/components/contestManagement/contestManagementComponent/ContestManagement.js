import React, { useEffect, useState } from 'react'
import PanelContainer from 'components/contestManagement/panelContainer/PanelContainer'
import Navbar from 'components/common/navbar/Navbar'

function Contest(props) {
    const contestsDB = [{
        id: 'contest-1',
        name: 'beCod3r',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [],
        start_time: new Date(),
        end_time: new Date() + 50000,
        url: 'https://www.hackerrank.com/beCod3r',
        embeded_media: 'https://image.lag.vn/upload/news/20/09/09/8ed_TJQY.jpg',
        status: ''
    },
    {
        id: 'contest-2',
        name: 'Hackathon',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật truyền thống',
        tests: [],
        start_time: new Date() + 50000,
        end_time: new Date() + 1500000,
        url: 'https://www.google.com/',
        embeded_media: 'https://memehay.com/meme/20211010/meo-cam-bong-hoa-nao-tang-ban.jpg',
        status: ''
    }]

    const [contests, setContests] = useState(contestsDB)
    useEffect(() => console.log('Contests: ', contests), [contests])

    return (
        <>
            <Navbar />
            <PanelContainer contests={contests} setContests={setContests} />
        </>
    )
}

export default Contest