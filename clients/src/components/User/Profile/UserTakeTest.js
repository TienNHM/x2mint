import { Button } from '@material-ui/core'
import React from 'react'
import { Badge, Dropdown, DropdownButton, Image } from 'react-bootstrap'
import { STATISTICS, STATUS } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

//#region Take test
export const TAKETEST_COLUMNS = [
    {
        label: STATISTICS.TAKE_TEST.STT,
        field: STATISTICS.TAKE_TEST.STT,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.TAKE_TEST.TEST_NAME,
        field: STATISTICS.TAKE_TEST.TEST_NAME,
        sort: 'asc',
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
        width: 150
    }
]

export function ExportDataUserTakeTest(data) {
    const rows = data.map((value, index) => {

        const submitTime = splitTime(value.submitTime)

        const status = value._status === STATUS.PASSED ?
            <Badge pill bg="success">{value._status}</Badge> :
            value._status === STATUS.FAILED ?
                <Badge pill bg="danger">{value._status}</Badge> :
                <Badge pill bg="warning">{value._status}</Badge>

        const item = {
            [STATISTICS.TAKE_TEST.STT]: index + 1,
            [STATISTICS.TAKE_TEST.TEST_NAME]: value.test.name,
            [STATISTICS.TAKE_TEST.SUBMIT_TIME]: submitTime.time + ' ngày ' + submitTime.date,
            [STATISTICS.TAKE_TEST.POINTS]: value.points,
            [STATISTICS.TAKE_TEST.IS_PASSED]: status,
            [STATISTICS.TAKE_TEST.STATUS]: value._status
        }
        return item
    })
    const result = {
        columns: [...TAKETEST_COLUMNS],
        rows: rows
    }

    return result
}
//#endregion

//#region Archive
export const ARCHIVE_CONTEST_COLUMNS = [
    {
        label: STATISTICS.CONTEST.STT,
        field: STATISTICS.CONTEST.STT,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.CONTEST.NAME,
        field: STATISTICS.CONTEST.NAME,
        width: 300
    },
    {
        label: STATISTICS.CONTEST.START_TIME,
        field: STATISTICS.CONTEST.START_TIME,
        sort: 'asc',
        width: 200
    },
    {
        label: STATISTICS.CONTEST.END_TIME,
        field: STATISTICS.CONTEST.END_TIME,
        sort: 'asc',
        width: 200
    },
    {
        label: STATISTICS.CONTEST._CREATOR,
        field: STATISTICS.CONTEST._CREATOR,
        sort: 'asc',
        width: 300
    },
    {
        label: STATISTICS.CONTEST._URL,
        field: STATISTICS.CONTEST._URL,
        sort: 'disabled',
        width: 80
    },
    {
        label: STATISTICS.CONTEST._STATUS,
        field: STATISTICS.CONTEST._STATUS,
        sort: 'asc',
        width: 100
    }
]

export function GetContestStatusComponent(index, contest, onClickContestStatus) {
    let variant = 'secondary'

    if (contest._status === STATUS.OK) {
        variant = 'primary'
    }
    else if (contest._status === STATUS.ARCHIVED) {
        variant = 'warning'
    }

    const status = (
        <DropdownButton id="dropdown-basic-button"
            title={contest._status}
            variant={variant} size="sm">
            <div className="text-center fw-bolder">Trạng thái cuộc thi</div>
            <Dropdown.Divider />
            <Dropdown.Item
                onClick={() => onClickContestStatus(index, contest, STATUS.OK)}>
                <Badge pill bg="primary">{STATUS.OK}</Badge>
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => onClickContestStatus(index, contest, STATUS.ARCHIVED)}>
                <Badge pill bg="warning">{STATUS.ARCHIVED}</Badge>
            </Dropdown.Item>
        </DropdownButton>
    )

    return status
}


export function ExportDataArchiveContest(data, onClickContestStatus) {
    console.log(data)
    const rows = data.map((value, index) => {
        const avatar = value.creatorId.avatar ?
            value.creatorId.avatar :
            process.env.PUBLIC_URL + '/assets/images/male-user.png'

        const user = (
            <div className="row">
                <div className="col-2 ps-3">
                    <Image roundedCircle src={avatar} width="48px" height="48px" alt='M' />
                </div>
                <div className="col-10 text-start ps-3 pe-3">
                    <div className="fw-bolder">{value.creatorId.full_name}</div>
                    <div>
                        <Badge pill bg="info">@{value.creatorId.username}</Badge>
                    </div>
                </div>
            </div>
        )

        const url = (
            <Button variant="success"
                href={value.url}
                size="sm"
                target="_blank">
                <i className="fa fa-link text-primary"></i>
            </Button>
        )

        const startTime = splitTime(value.startTime)
        const endTime = splitTime(value.endTime)

        const item = {
            [STATISTICS.CONTEST.STT]: index + 1,
            [STATISTICS.CONTEST.NAME]: value.name,
            [STATISTICS.CONTEST.START_TIME]: startTime.time + ' ngày ' + startTime.date,
            [STATISTICS.CONTEST.END_TIME]: endTime.time + ' ngày ' + endTime.date,
            [STATISTICS.CONTEST.CREATOR]: value.creatorId.username,
            [STATISTICS.CONTEST._CREATOR]: user,
            [STATISTICS.CONTEST.URL]: value.url,
            [STATISTICS.CONTEST._URL]: url,
            [STATISTICS.CONTEST.STATUS]: value._status,
            [STATISTICS.CONTEST._STATUS]: GetContestStatusComponent(index, value, onClickContestStatus)
        }
        return item
    })
    const result = {
        columns: [...ARCHIVE_CONTEST_COLUMNS],
        rows: rows
    }

    return result
}
//#endregion