import React, { useEffect, useState } from 'react'
import './ContestArchived.scss'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useAxios } from 'actions/useAxios'
import Cookies from 'js-cookie'
import { COOKIES, STATISTICS } from 'utils/constants'
import { HashLoader } from 'react-spinners'
import { MDBDataTableV5 } from 'mdbreact'
import { ExportToExcel } from 'utils/ExportToExcel'
import { cloneDeep } from 'lodash'
import { ExportDataArchiveContest } from '../data'
import { getCurrentDatetime } from 'utils/timeUtils'
import { updateContest } from 'actions/api/ContestAPI'

export default function ContestArchived() {
    const [tableData, setTableData] = useState(null)
    const [contests, setContests] = useState(null)

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

    const onClickContestStatus = async (index, contest, newStatus) => {
        const _contest = {
            ...contest,
            // _id: contest.id,
            _status: newStatus
        }

        await updateContest(_contest)

        // Update lại table
        const newContests = [...contests]
        newContests[index] = _contest
        setContests(newContests)

        toast.success('🎉 Update thành công!')
    }

    useEffect(() => {
        if (response) {
            setContests(response.data.contests)
            setTableData(ExportDataArchiveContest(response.data.contests, onClickContestStatus))
        }
    }, [response])

    useEffect(() => {
        if (contests) {
            const data = ExportDataArchiveContest(contests, onClickContestStatus)
            setTableData(data)
        }
    }, [contests])

    return (
        <div className="contest-archive">
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
                                fileName={'Danh sách cuộc thi - ' + getCurrentDatetime()}
                                fieldsToBeRemoved={[
                                    STATISTICS.CONTEST._CREATOR,
                                    STATISTICS.CONTEST._URL,
                                    STATISTICS.CONTEST._STATUS
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