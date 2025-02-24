import React, { useEffect, useState } from 'react'
import './AccountGrantPermissions.scss'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS, STATUS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { ExportDataUserPermissions } from '../data'
import { updateUserInfo } from 'actions/api/UserAPI'
import { getCurrentDatetime } from 'utils/timeUtils'

export default function AccountGrantPermissions() {
    const [tableData, setTableData] = useState(null)
    const [users, setUsers] = useState(null)

    const [pendingTableData, setPendingTableData] = useState(null)
    const [pendingUsers, setPendingUsers] = useState(null)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: '/statistics',
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    const onClickUserPermissions = async (index, user, newRole, table) => {
        const _user = {
            ...user,
            _id: user.id,
            role: newRole
        }

        await updateUserInfo(_user)

        // Update lại table
        if (table === 'users') {
            const newUsers = [...users]
            newUsers[index] = _user
            setUsers(newUsers)
        }
        else {
            const newUsers = [...pendingUsers]
            newUsers[index] = _user
            setPendingUsers(newUsers)
        }

        toast.success('🎉 Update thành công!')
    }

    const onClickUserStatus = async (index, user, newStatus, table) => {
        const _user = {
            ...user,
            _id: user.id,
            _status: newStatus
        }

        await updateUserInfo(_user)

        // Update lại table
        if (table === 'users') {
            const newUsers = [...users]
            newUsers[index] = _user
            setUsers(newUsers)
        }
        else {
            const newUsers = [...pendingUsers]
            newUsers[index] = _user
            setPendingUsers(newUsers)
        }

        toast.success('🎉 Update thành công!')
    }

    useEffect(() => {
        if (response) {
            const users = cloneDeep(response.data.users)
            setUsers(users)
            const data = ExportDataUserPermissions(
                users,
                onClickUserPermissions,
                onClickUserStatus,
                'users'
            )
            setTableData(data)

            const pending = []
            for (var user of users) {
                if (user._status === STATUS.UPGRADE_PENDING) {
                    pending.push(user)
                }
            }
            setPendingUsers(pending)
            // console.log(pending)
            const pendingData = ExportDataUserPermissions(
                pending,
                onClickUserPermissions,
                onClickUserStatus,
                'pendingUsers'
            )
            setPendingTableData(pendingData)
        }
    }, [response])

    useEffect(() => {
        if (users) {
            const data = ExportDataUserPermissions(
                users,
                onClickUserPermissions,
                onClickUserStatus
            )
            setTableData(data)
        }
    }, [users])

    return (
        <div className="account-permissions">
            {loading &&
                <div
                    className='sweet-loading d-flex justify-content-center align-items-center'
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 100
                    }}>
                    <HashLoader color={'#7ED321'} loading={loading} />
                </div>
            }

            {!loading &&
                <>
                    <div id="table-data">
                        <div className="section-header m-3 h4 d-flex">
                            <i className="fa fa-list me-3"></i>
                            Danh sách các tài khoản chờ nâng cấp lên Creator
                        </div>

                        <div>
                            <ExportToExcel
                                apiData={cloneDeep(pendingTableData.rows)}
                                fileName={'Danh sách phân quyền người dùng - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.ACCOUNT._AVATAR,
                                    STATISTICS.ACCOUNT._STATUS
                                ]}
                            />
                        </div>

                        <div className="p-3">
                            <MDBDataTableV5
                                hover striped bordered
                                entriesOptions={[10, 25, 50, 100]}
                                entries={10}
                                pagesAmount={4}
                                data={pendingTableData}
                                materialSearch scrollX
                            />
                        </div>
                    </div>

                    <div id="table-data">
                        <div className="section-header m-3 h4 d-flex">
                            <i className="fa fa-list me-3"></i>
                            Danh sách thành viên
                        </div>

                        <div>
                            <ExportToExcel
                                apiData={cloneDeep(tableData.rows)}
                                fileName={'Danh sách phân quyền người dùng - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.ACCOUNT._AVATAR,
                                    STATISTICS.ACCOUNT._STATUS
                                ]}
                            />
                        </div>

                        <div className="p-3">
                            <MDBDataTableV5
                                hover striped bordered
                                entriesOptions={[10, 25, 50, 100]}
                                entries={10}
                                pagesAmount={4}
                                data={tableData}
                                materialSearch scrollX
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}