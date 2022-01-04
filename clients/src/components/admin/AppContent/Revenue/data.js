import React from 'react'
import { Image, Badge, DropdownButton, Dropdown } from 'react-bootstrap'
import { COLOR } from 'utils/colors'
import { ACCOUNT_TYPES, ROLE, STATISTICS, STATUS } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

export const BILL_INFO_COLUMNS = [
    {
        label: STATISTICS.BILL.STT,
        field: STATISTICS.BILL.STT,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.BILL._USER,
        field: STATISTICS.BILL._USER,
        sort: 'asc',
        width: 150
    },
    {
        label: STATISTICS.BILL.USERNAME,
        field: STATISTICS.BILL.USERNAME,
        sort: 'asc',
        width: 150
    },
    {
        label: STATISTICS.BILL.USER,
        field: STATISTICS.BILL.USER,
        sort: 'asc',
        width: 300
    },
    {
        label: STATISTICS.BILL.AMOUNT,
        field: STATISTICS.BILL.AMOUNT,
        width: 150
    },
    {
        label: STATISTICS.BILL.TIME,
        field: STATISTICS.BILL.TIME,
        width: 200
    },
    {
        label: STATISTICS.BILL._STATUS,
        field: STATISTICS.BILL._STATUS,
        sort: 'asc',
        width: 150
    }
]

export const ExportBills = (data) => {
    const rows = data.map((value, index) => {
        const avatar = value.avatar ?
            <Image roundedCircle src={value.avatar} width="32px" height="32px" alt="avatar" /> :
            <Image roundedCircle src={process.env.PUBLIC_URL + '/assets/images/male-user.png'} width="32px" height="32px" alt="avatar" />

        const status = value._status === STATUS.SUCCESS ? (
            <Badge bg="success" pill>Thành công</Badge>
        ) : (
            <Badge bg="danger" pill>Thất bại</Badge>
        )

        const createdAt = splitTime(value.createdAt)

        const item = {
            [STATISTICS.BILL.STT]: index + 1,
            [STATISTICS.BILL.USER]: value.user.full_name,
            [STATISTICS.BILL._USER]: avatar,
            [STATISTICS.BILL.USERNAME]: value.user.username,
            [STATISTICS.BILL.TIME]: createdAt.time + ' ngày ' + createdAt.date,
            [STATISTICS.BILL.AMOUNT]: value.amount,
            [STATISTICS.BILL.STATUS]: value._status,
            [STATISTICS.BILL._STATUS]: status
        }
        return item
    })
    const result = {
        columns: [...BILL_INFO_COLUMNS],
        rows: rows
    }

    return result
}

export function StatisticBills(data) {

    let datasets = [{
        label: 'Thời gian',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    let datetime = data.map(x => x.createdAt)
    datetime.sort((a, b) => new Date(a) - new Date(b))
    let labels = datetime.map(x => splitTime(x).date)
    labels = [...new Set(labels)]

    labels.map(date => {
        var count = 0
        for (var i = 0; i < data.length; i++) {
            const d = splitTime(data[i].createdAt)
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