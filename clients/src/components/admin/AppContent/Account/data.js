import React from 'react'
import { Image, Button, Badge, DropdownButton, Dropdown } from 'react-bootstrap'
import { COLOR } from 'utils/colors'
import { ROLE, STATISTICS, STATUS } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

export function StatisticAccountSignUp(users) {

    let datasets = [{
        label: 'Thời gian',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    let datetime = users.map(x => x.createdAt)
    datetime.sort((a, b) => new Date(a) - new Date(b))
    let labels = datetime.map(x => splitTime(x).date)
    labels = [...new Set(labels)]

    labels.map(date => {
        var count = 0
        for (var i = 0; i < users.length; i++) {
            const d = splitTime(users[i].createdAt)
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

export function StatisticAccountOverview(users) {
    let res = {
        [ROLE.ADMIN]: 0,
        [ROLE.CREATOR]: 0,
        [ROLE.USER]: 0
    }

    users.map(u => {
        res[u.role] += 1
    })

    return res
}

export const COLUMNS = [
    {
        label: STATISTICS.ACCOUNT.STT,
        field: STATISTICS.ACCOUNT.STT,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.ACCOUNT.USERNAME,
        field: STATISTICS.ACCOUNT.USERNAME,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.ACCOUNT.FULLNAME,
        field: STATISTICS.ACCOUNT.FULLNAME,
        width: 300
    },
    {
        label: STATISTICS.ACCOUNT.DOB,
        field: STATISTICS.ACCOUNT.DOB,
        width: 100
    },
    {
        label: STATISTICS.ACCOUNT.EMAIL,
        field: STATISTICS.ACCOUNT.EMAIL,
        sort: 'asc',
        width: 200
    },
    {
        label: STATISTICS.ACCOUNT.PHONE,
        field: STATISTICS.ACCOUNT.PHONE,
        sort: 'asc',
        width: 100
    },
    {
        label: STATISTICS.ACCOUNT.ADDRESS,
        field: STATISTICS.ACCOUNT.ADDRESS,
        sort: 'disabled',
        width: 400
    },
    {
        label: STATISTICS.ACCOUNT._AVATAR,
        field: STATISTICS.ACCOUNT._AVATAR,
        sort: 'disabled',
        width: 200
    },
    {
        label: STATISTICS.ACCOUNT._STATUS,
        field: STATISTICS.ACCOUNT._STATUS,
        sort: 'asc',
        width: 200
    }
]

export function ExportDataUser(data, onClickUserStatus) {
    const rows = data.map((value, index) => {
        const avatar = value.avatar ?
            <Image roundedCircle src={value.avatar} width="32px" height="32px" alt="avatar" /> :
            <Image roundedCircle src={process.env.PUBLIC_URL + '/assets/male-user.png'} width="32px" height="32px" alt="avatar" />

        //#region Status
        let variant = 'secondary'

        if (value._status === STATUS.OK) {
            variant = 'primary'
        }
        else if (value._status === STATUS.DEACTIVE) {
            variant = 'warning'
        }
        else if (value._status === STATUS.DELETED) {
            variant = 'danger'
        }

        const status = (
            <DropdownButton id="dropdown-basic-button"
                title={value._status}
                variant={variant} size="sm">
                <Dropdown.Item
                    onClick={() => onClickUserStatus(value, STATUS.OK)}>
                    <Badge pill bg="primary">{STATUS.OK}</Badge>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => onClickUserStatus(value, STATUS.DEACTIVE)}>
                    <Badge pill bg="warning">{STATUS.DEACTIVE}</Badge>
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => onClickUserStatus(value, STATUS.DELETED)}>
                    <Badge pill bg="danger">{STATUS.DELETED}</Badge>
                </Dropdown.Item>
            </DropdownButton>
        )
        //#endregion

        const item = {
            [STATISTICS.ACCOUNT.STT]: index + 1,
            [STATISTICS.ACCOUNT._AVATAR]: avatar,
            [STATISTICS.ACCOUNT.USERNAME]: value.username,
            [STATISTICS.ACCOUNT.FULLNAME]: value.full_name,
            [STATISTICS.ACCOUNT.DOB]: value.dob,
            [STATISTICS.ACCOUNT.EMAIL]: value.email,
            [STATISTICS.ACCOUNT.PHONE]: value.phone,
            [STATISTICS.ACCOUNT.ADDRESS]: value.address,
            [STATISTICS.ACCOUNT.AVATAR]: value.avatar,
            [STATISTICS.ACCOUNT.STATUS]: value._status,
            [STATISTICS.ACCOUNT._STATUS]: status
        }
        return item
    })
    const result = {
        columns: [...COLUMNS],
        rows: rows
    }

    return result
}