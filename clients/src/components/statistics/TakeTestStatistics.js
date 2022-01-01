import React from 'react'
import { Badge, Button, Image } from 'react-bootstrap'
import { STATISTICS, STATUS } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

export const TAKETEST_COLUMNS = [
    {
        label: STATISTICS.TAKE_TEST.STT,
        field: STATISTICS.TAKE_TEST.STT,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.TAKE_TEST.EXAMINEE,
        field: STATISTICS.TAKE_TEST.EXAMINEE,
        width: 300
    },
    {
        label: STATISTICS.TAKE_TEST.SUBMIT_TIME,
        field: STATISTICS.TAKE_TEST.SUBMIT_TIME,
        sort: 'asc',
        width: 200
    },
    {
        label: STATISTICS.TAKE_TEST.POINTS,
        field: STATISTICS.TAKE_TEST.POINTS,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.TAKE_TEST.IS_PASSED,
        field: STATISTICS.TAKE_TEST.IS_PASSED,
        sort: 'asc',
        width: 120
    },
    {
        label: STATISTICS.TAKE_TEST._DETAIL,
        field: STATISTICS.TAKE_TEST._DETAIL,
        sort: 'disabled',
        width: 80
    }
]

export function ExportDataTakeTest(data) {
    const rows = data.map((value, index) => {
        const avatar = value.user.avatar ?
            value.user.avatar :
            process.env.PUBLIC_URL + '/assets/images/male-user.png'

        const user = (
            <div className="row">
                <div className="col-2 ps-3">
                    <Image roundedCircle src={avatar} width="48px" height="48px" alt='M' />
                </div>
                <div className="col-10 text-start pe-3">
                    <div className="fw-bolder">{value.user.full_name}</div>
                    <div>
                        <Badge pill bg="info">@{value.user.username}</Badge>
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

        const detail = (
            <Button size="sm"
                href={`/takeTest/${value.id}`} target="_self"
                style={{ backgroundColor: 'transparent', border: 'none' }}>
                <i className="fa fa-info-circle text-primary"></i>
            </Button>
        )

        const item = {
            [STATISTICS.TAKE_TEST.STT]: index + 1,
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