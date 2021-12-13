import React from 'react'
import { Badge } from 'react-bootstrap'
import { COLOR } from 'utils/colors'
import { STATISTICS } from 'utils/constants'
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

    console.log('datasets', datasets)

    return {
        datasets: datasets
    }
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
        label: STATISTICS.TAKE_TEST.STATUS,
        field: STATISTICS.TAKE_TEST.STATUS,
        sort: 'asc',
        width: 100
    }
]

export function ExportDataTakeTest(data) {
    const rows = data.map((value, index) => {
        const user = (
            <div className="row">
                <div className="col-1">
                    <img src={process.env.PUBLIC_URL + '/assets/male-user.png'} width="32px" alt='M' />
                </div>
                <div className="col-11 text-start ps-3 pe-3">
                    <div className="fw-bolder">{value.user.full_name}</div>
                    <div>
                        <Badge pill bg="info">@{value.user.username}</Badge>
                    </div>
                </div>
            </div>
        )

        const item = {
            [STATISTICS.TAKE_TEST.STT]: index + 1,
            [STATISTICS.TAKE_TEST.EXAMINEE]: user,
            [STATISTICS.TAKE_TEST.EXAMINEE_FULLNAME]: value.user.full_name,
            [STATISTICS.TAKE_TEST.EXAMINEE_USERNAME]: value.user.username,
            [STATISTICS.TAKE_TEST.SUBMIT_TIME]: value.submitTime,
            [STATISTICS.TAKE_TEST.POINTS]: value.points,
            [STATISTICS.TAKE_TEST.STATUS]: ''
        }
        return item
    })
    const result = {
        columns: [...COLUMNS],
        rows: rows
    }

    console.log('*Result*', result)
    return result
}