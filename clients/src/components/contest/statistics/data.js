import React from 'react'
import { MDBBtn } from 'mdbreact'
import { initialTakeTest } from 'actions/initialData'

export const COLUMNS = [
    {
        label: 'Username',
        field: 'Username',
        sort: 'asc',
        width: 150
    },
    {
        label: 'Họ tên',
        field: 'Họ tên',
        sort: 'asc',
        width: 270
    },
    {
        label: 'Thời gian bắt đầu',
        field: 'Thời gian bắt đầu',
        sort: 'asc',
        width: 200
    },
    {
        label: 'Thời gian nộp bài',
        field: 'Thời gian nộp bài',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Số câu đúng',
        field: 'Số câu đúng',
        sort: 'asc',
        width: 150
    },
    {
        label: 'Điểm',
        field: 'Điểm',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Chi tiết',
        field: 'Chi tiết',
        sort: 'asc',
        width: 50
    }
]

export default function exportData(data, setIsShowSubmitPage) {
    const result = {
        columns: COLUMNS,
        rows: [
            {
                'Username': initialTakeTest.username,
                'Họ tên': initialTakeTest.fullname,
                'Thời gian bắt đầu': '//TODO',
                'Thời gian nộp bài': initialTakeTest.submitTime,
                'Số câu đúng': 100000000, //TODO
                'Điểm': initialTakeTest.points,
                'Chi tiết': <MDBBtn size="sm" onClick={() => setIsShowSubmitPage(true)}><i className="fa fa-info-circle"></i></MDBBtn>
            }
        ]
    }

    console.log('Result', result)
    return result
}