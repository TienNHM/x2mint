import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { getCurrentDatetime } from 'utils/timeUtils'
import { ExportBills } from './data'

export default function Revenue() {
    const [tableData, setTableData] = useState(null)
    const [bills, setBills] = useState(null)

    const {
        response,
        loading
    } = useAxios({
        method: 'GET',
        url: '/bills',
        headers: {
            Authorization: `Bearer ${Cookies.get(COOKIES.ACCESS_TOKEN)}`
        }
    })

    useEffect(() => {
        if (response) {
            console.log(response)
            const bills = response.bills
            setBills(bills)
            const data = ExportBills(bills)
            console.log(data)
            setTableData(data)
        }
    }, [response])

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
                            Danh sách
                        </div>

                        <div>
                            <ExportToExcel
                                apiData={cloneDeep(tableData.rows)}
                                fileName={'Thống kê doanh thu - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.BILL._USER,
                                    STATISTICS.BILL._STATUS
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