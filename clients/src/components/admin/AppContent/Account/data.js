import React from 'react'
import { Image, Badge, DropdownButton, Dropdown } from 'react-bootstrap'
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

//#region User info

export const USER_INFO_COLUMNS = [
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
        width: 150
    },
    {
        label: STATISTICS.ACCOUNT.FULLNAME,
        field: STATISTICS.ACCOUNT.FULLNAME,
        width: 320
    },
    {
        label: STATISTICS.ACCOUNT.DOB,
        field: STATISTICS.ACCOUNT.DOB,
        width: 120
    },
    {
        label: STATISTICS.ACCOUNT.EMAIL,
        field: STATISTICS.ACCOUNT.EMAIL,
        sort: 'asc',
        width: 250
    },
    {
        label: STATISTICS.ACCOUNT.PHONE,
        field: STATISTICS.ACCOUNT.PHONE,
        sort: 'asc',
        width: 150
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
        width: 80
    },
    {
        label: STATISTICS.ACCOUNT._STATUS,
        field: STATISTICS.ACCOUNT._STATUS,
        sort: 'asc',
        width: 150
    }
]

export function GetUserStatusComponent(index, user, onClickUserStatus) {
    let variant = 'secondary'

    if (user._status === STATUS.OK) {
        variant = 'primary'
    }
    else if (user._status === STATUS.DEACTIVE) {
        variant = 'warning'
    }
    else if (user._status=== STATUS.DELETED) {
        variant = 'danger'
    }

    const status = (
        <DropdownButton id="dropdown-basic-button"
            title={user._status}
            variant={variant} size="sm">
            <div className="text-center fw-bolder">Trạng thái tài khoản</div>
            <Dropdown.Divider/>
            <Dropdown.Item
                onClick={() => onClickUserStatus(index, user, STATUS.OK)}>
                <Badge pill bg="primary">{STATUS.OK}</Badge>
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => onClickUserStatus(index, user, STATUS.DEACTIVE)}>
                <Badge pill bg="warning">{STATUS.DEACTIVE}</Badge>
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => onClickUserStatus(index, user, STATUS.DELETED)}>
                <Badge pill bg="danger">{STATUS.DELETED}</Badge>
            </Dropdown.Item>
        </DropdownButton>
    )

    return status
}

export function ExportDataUser(data, onClickUserStatus) {
    const rows = data.map((value, index) => {
        const avatar = value.avatar ?
            <Image roundedCircle src={value.avatar} width="32px" height="32px" alt="avatar" /> :
            <Image roundedCircle src={process.env.PUBLIC_URL + '/assets/male-user.png'} width="32px" height="32px" alt="avatar" />

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
            [STATISTICS.ACCOUNT._STATUS]: GetUserStatusComponent(index, value, onClickUserStatus)
        }
        return item
    })
    const result = {
        columns: [...USER_INFO_COLUMNS],
        rows: rows
    }

    return result
}

//#endregion

//#region User permissions
export const USER_PERMISSIONS_COLUMNS = [
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
        width: 150
    },
    {
        label: STATISTICS.ACCOUNT.EMAIL,
        field: STATISTICS.ACCOUNT.EMAIL,
        sort: 'asc',
        width: 300
    },
    {
        label: STATISTICS.ACCOUNT.PHONE,
        field: STATISTICS.ACCOUNT.PHONE,
        sort: 'asc',
        width: 150
    },
    {
        label: STATISTICS.ACCOUNT._AVATAR,
        field: STATISTICS.ACCOUNT._AVATAR,
        sort: 'disabled',
        width: 100
    },
    {
        label: STATISTICS.ACCOUNT._ROLE,
        field: STATISTICS.ACCOUNT._ROLE,
        sort: 'disabled',
        width: 160
    },
    {
        label: STATISTICS.ACCOUNT._STATUS,
        field: STATISTICS.ACCOUNT._STATUS,
        sort: 'asc',
        width: 150
    }
]

export function GetUserPermissionsComponent(index, user, onClickUserPermissions) {
    let variant = 'secondary'

    if (user.role === ROLE.USER) {
        variant = 'primary'
    }
    else if (user.role === ROLE.CREATOR) {
        variant = 'warning'
    }
    else if (user.role === ROLE.ADMIN) {
        variant = 'danger'
    }

    const role = (
        <DropdownButton id="dropdown-basic-button"
            title={user.role}
            variant={variant} size="sm">
            <div className="text-center fw-bolder">Quyền tài khoản</div>
            <Dropdown.Divider/>
            <Dropdown.Item
                onClick={() => onClickUserPermissions(index, user, ROLE.USER)}>
                <Badge pill bg="primary">{ROLE.USER}</Badge>
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => onClickUserPermissions(index, user, ROLE.CREATOR)}>
                <Badge pill bg="warning">{ROLE.CREATOR}</Badge>
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => onClickUserPermissions(index, user, ROLE.ADMIN)}>
                <Badge pill bg="danger">{ROLE.ADMIN}</Badge>
            </Dropdown.Item>
        </DropdownButton>
    )

    return role
}

export function ExportDataUserPermissions(data, onClickUserPermissions, onClickUserStatus) {
    const rows = data.map((value, index) => {
        const avatar = value.avatar ?
            <Image roundedCircle src={value.avatar} width="32px" height="32px" alt="avatar" /> :
            <Image roundedCircle src={process.env.PUBLIC_URL + '/assets/male-user.png'} width="32px" height="32px" alt="avatar" />

        const item = {
            [STATISTICS.ACCOUNT.STT]: index + 1,
            [STATISTICS.ACCOUNT.USERNAME]: value.username,
            [STATISTICS.ACCOUNT.EMAIL]: value.email,
            [STATISTICS.ACCOUNT.PHONE]: value.phone,
            [STATISTICS.ACCOUNT.AVATAR]: value.avatar,
            [STATISTICS.ACCOUNT.ROLE]: value.role,
            [STATISTICS.ACCOUNT.STATUS]: value._status,
            [STATISTICS.ACCOUNT._AVATAR]: avatar,
            [STATISTICS.ACCOUNT._ROLE]: GetUserPermissionsComponent(index, value, onClickUserPermissions),
            [STATISTICS.ACCOUNT._STATUS]: GetUserStatusComponent(index, value, onClickUserStatus)
        }
        return item
    })
    const result = {
        columns: [...USER_PERMISSIONS_COLUMNS],
        rows: rows
    }

    return result
}

//#endregion