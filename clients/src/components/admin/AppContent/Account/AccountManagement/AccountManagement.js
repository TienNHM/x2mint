import React, { useEffect, useState } from 'react'
import './AccountManagement.scss'
import Chart from 'chart.js/auto'
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2'
import { useAxios } from 'actions/useAxios'
import { Card } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { COLOR } from 'utils/colors'
import { ExportDataUser } from '../data'

export default function AccountManagement() {
    const [tableData, setTableData] = useState(null)
    const [ckbSelectedUser, setCkbSelectedUser] = useState(null)

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

    const onClickUserStatus = (user, newStatus) => {
        console.log(user.username, newStatus)
    }

    useEffect(() => {
        if (response) {
            setTableData(ExportDataUser(response.data.users, onClickUserStatus))
        }
    }, [response])

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
                                fileName={Date.now().toString()}
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
                                materialSearch
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}