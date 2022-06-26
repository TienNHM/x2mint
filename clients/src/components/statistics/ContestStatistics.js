import React from 'react'
import { Badge, Button, Image } from 'react-bootstrap'
import { STATISTICS, STATUS } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

export const TAKETEST_COLUMNS = [
    {
        label: STATISTICS.TAKE_TEST.STT,
        field: STATISTICS.TAKE_TEST.STT,
        sort: 'asc',
        width: 80
    },
    {
        label: STATISTICS.TAKE_TEST.TEST_NAME,
        field: STATISTICS.TAKE_TEST.TEST_NAME,
        sort: 'asc',
        width: 220
    },
    {
        label: STATISTICS.TAKE_TEST._TEST_URL,
        field: STATISTICS.TAKE_TEST._TEST_URL,
        sort: 'disabled',
        width: 80
    },
    {
        label: STATISTICS.TAKE_TEST.EXAMINEE,
        field: STATISTICS.TAKE_TEST.EXAMINEE,
        sort: 'disabled',
        width: 300
    },
    {
        label: STATISTICS.TAKE_TEST.SUBMIT_TIME,
        field: STATISTICS.TAKE_TEST.SUBMIT_TIME,
        sort: 'asc',
        width: 150
    },
    {
        label: STATISTICS.TAKE_TEST.POINTS,
        field: STATISTICS.TAKE_TEST.POINTS,
        sort: 'asc',
        width: 80
    },
    {
        label: STATISTICS.TAKE_TEST.IS_PASSED,
        field: STATISTICS.TAKE_TEST.IS_PASSED,
        sort: 'disabled',
        width: 120
    },
    {
        label: STATISTICS.TAKE_TEST._DETAIL,
        field: STATISTICS.TAKE_TEST._DETAIL,
        sort: 'disabled',
        width: 80
    }
]

export function StatisticTakeTestsInContest(data) {
    console.log(data)
    const rows = data.map((value, index) => {
        const avatar = value.user.avatar ?
            value.user.avatar :
            process.env.PUBLIC_URL + '/assets/images/male-user.png'

        const user = (
            <div className="row">
                <div className="col-2">
                    <Image roundedCircle src={avatar} width="48px" height="48px" alt='M' />
                </div>
                <div className="col-10 text-start">
                    <div className="fw-bold">{value.user.full_name}</div>
                    <div>
                        <Badge pill bg="info">
                            <a href={process.env.REACT_APP_WEBSITE + '/404'}
                                className="text-light">
                                @{value.user.username}
                            </a>
                        </Badge>
                    </div>
                </div>
            </div>
        )

        const submitTime = splitTime(value.submitTime)

        const status = value._status === STATUS.PASSED ?
            <Badge pill bg="success">{value._status}</Badge> :
            value._status === STATUS.FAILED ?
                <Badge pill bg="danger">{value._status}</Badge> :
                <Badge pill bg="warning">{value._status}</Badge>

        const url = value.test.url ?
            value.test.url :
            `${process.env.REACT_APP_WEBSITE}/404`

        const linkTest = (
            <Button size="sm" href={url} target="_self"
                style={{ backgroundColor: 'transparent', border: 'none' }}>
                <i className="fa fa-link text-primary"></i>
            </Button>
        )

        const detail = (
            <Button size="sm"
                href={`/takeTest/${value.id}`} target="_self"
                style={{ backgroundColor: 'transparent', border: 'none' }}>
                <i className="fa fa-info-circle text-primary"></i>
            </Button>
        )

        const item = {
            [STATISTICS.TAKE_TEST.STT]: index + 1,
            [STATISTICS.TAKE_TEST.TEST_NAME]: value.test.name,
            [STATISTICS.TAKE_TEST.TEST_URL]: value.test.url,
            [STATISTICS.TAKE_TEST._TEST_URL]: linkTest,
            [STATISTICS.TAKE_TEST.EXAMINEE]: user,
            [STATISTICS.TAKE_TEST.EXAMINEE_FULLNAME]: value.user.full_name,
            [STATISTICS.TAKE_TEST.EXAMINEE_USERNAME]: value.user.username,
            [STATISTICS.TAKE_TEST.SUBMIT_TIME]: submitTime.time + ' ngày ' + submitTime.date,
            [STATISTICS.TAKE_TEST.POINTS]: value.points,
            [STATISTICS.TAKE_TEST.IS_PASSED]: status,
            [STATISTICS.TAKE_TEST.STATUS]: value._status,
            [STATISTICS.TAKE_TEST._DETAIL]: detail
        }
        return item
    })
    const result = {
        columns: [...TAKETEST_COLUMNS],
        rows: rows
    }

    return result
}