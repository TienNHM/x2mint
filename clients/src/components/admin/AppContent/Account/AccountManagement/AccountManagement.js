import React, { useEffect, useState } from 'react'
import './AccountManagement.scss'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { ExportDataUser } from '../data'
import { updateUserInfo } from 'actions/api/UserAPI'
import { getCurrentDatetime } from 'utils/timeUtils'

export default function AccountManagement() {
    const [tableData, setTableData] = useState(null)
    const [users, setUsers] = useState(null)

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

    const onClickUserStatus = async (index, user, newStatus) => {
        const _user = {
            ...user,
            _id: user.id,
            _status: newStatus
        }

        await updateUserInfo(_user)

        // Update lại table
        const newUsers = [...users]
        newUsers[index] = _user
        setUsers(newUsers)

        toast.success('🎉 Update thành công!')
    }

    useEffect(() => {
        if (response) {
            setUsers(response.data.users)
            setTableData(ExportDataUser(response.data.users, onClickUserStatus))
        }
    }, [response])

    useEffect(() => {
        if (users) {
            const data = ExportDataUser(users, onClickUserStatus)
            setTableData(data)
        }
    }, [users])

    return (
        <div className="account-management">
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
                            Danh sách
                        </div>

                        <div>
                            <ExportToExcel
                                apiData={cloneDeep(tableData.rows)}
                                fileName={'Danh sách người dùng - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.ACCOUNT._AVATAR,
                                    STATISTICS.ACCOUNT._STATUS,
                                    STATISTICS.ACCOUNT._TYPE
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
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}