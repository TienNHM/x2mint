import { Button } from '@material-ui/core'
import React from 'react'
import { Badge, Dropdown, DropdownButton, Image } from 'react-bootstrap'
import { COLOR } from 'utils/colors'
import { STATISTICS, STATUS } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

export function StatisticTakeTest(takeTests) {
    let labels = []
    let datasets = [{
        label: 'Số lượng',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    takeTests.map(x => {
        if (!labels.includes(x.points)) {
            labels.push(x.points)
        }
    })

    // Sắp xếp lại theo thứ tự tăng dần
    labels.sort((a, b) => a - b)

    labels.map(point => {
        var count = 0
        for (var i = 0; i < takeTests.length; i++) {
            if (takeTests[i].points === point) {
                count += 1
            }
        }
        datasets[0].data.push(count)
    })

    return {
        labels: labels,
        datasets: datasets
    }
}

export function StatisticSubmitTime(takeTests) {
    let datasets = [{
        label: 'Thời gian',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    let datetime = takeTests.map(x => x.submitTime)
    datetime.sort((a, b) => new Date(a) - new Date(b))
    let labels = datetime.map(x => splitTime(x).date)

    labels = [...new Set(labels)]

    labels.map(date => {
        var count = 0
        for (var i = 0; i < takeTests.length; i++) {
            const d = splitTime(takeTests[i].submitTime)
            if (d.date === date) {
                count += 1
            }
        }
        datasets[0].data.push({ x: date, y: count })
    })

    return {
        datasets: datasets
    }
}

export function StatisticTakeTestStatus(takeTests) {
    let count = {
        [STATUS.PASSED]: 0,
        [STATUS.FAILED]: 0,
        [STATUS.NOT_SUBMITTED]: 0
    }

    takeTests.forEach(value => {
        count[value._status] += 1
    })

    const data = {
        labels: [STATUS.PASSED, STATUS.FAILED, STATUS.NOT_SUBMITTED],
        datasets: [
            {
                label: 'Tỉ lệ (%)',
                data: [
                    count[STATUS.PASSED],
                    count[STATUS.FAILED],
                    count[STATUS.NOT_SUBMITTED]
                ].map(x => x * 100 / takeTests.length),
                backgroundColor: COLOR.BREWER.YELLOW_GREEN_BLUE.YlGnBu3,
                borderWidth: 1,
                hoverBorderColor: COLOR.BREWER.YELLOW_GREEN_BLUE.YlGnBu3
            }
        ]
    }

    return data
}

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
        console.log(value)
        const avatar = value.user.avatar ?
            value.user.avatar :
            process.env.PUBLIC_URL + '/assets/male-user.png'

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
            [STATISTICS.TAKE_TEST.TEST_NAME]: value.test.name,
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
            process.env.PUBLIC_URL + '/assets/male-user.png'

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