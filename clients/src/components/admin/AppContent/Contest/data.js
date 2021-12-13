import React from 'react'
import { Badge, Image } from 'react-bootstrap'
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
        [STATUS.PASSED] : 0,
        [STATUS.FAILED] : 0,
        [STATUS.NOT_SUBMITTED]: 0
    }

    takeTests.forEach(value => {
        count[value._status] +=1
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

export const COLUMNS = [
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
        width: 200
    },
    {
        label: STATISTICS.TAKE_TEST.IS_PASSED,
        field: STATISTICS.TAKE_TEST.IS_PASSED,
        sort: 'asc',
        width: 100
    }
]

export function ExportDataTakeTest(data) {
    const rows = data.map((value, index) => {
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

        const item = {
            [STATISTICS.TAKE_TEST.STT]: index + 1,
            [STATISTICS.TAKE_TEST.EXAMINEE]: user,
            [STATISTICS.TAKE_TEST.EXAMINEE_FULLNAME]: value.user.full_name,
            [STATISTICS.TAKE_TEST.EXAMINEE_USERNAME]: value.user.username,
            [STATISTICS.TAKE_TEST.SUBMIT_TIME]: submitTime.time + ' ngày ' + submitTime.date,
            [STATISTICS.TAKE_TEST.POINTS]: value.points,
            [STATISTICS.TAKE_TEST.IS_PASSED]: status,
            [STATISTICS.TAKE_TEST.STATUS]: value._status
        }
        return item
    })
    const result = {
        columns: [...COLUMNS],
        rows: rows
    }

    return result
}