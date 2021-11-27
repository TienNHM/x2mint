import React from 'react'
import { MDBBtn } from 'mdbreact'

export const SAMPLE_DATA = {
    columns: [
        {
            label: 'Username',
            field: 'username',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Họ tên',
            field: 'fullname',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Thời gian bắt đầu',
            field: 'startTime',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Thời gian nộp bài',
            field: 'endTime',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Số câu đúng',
            field: 'total',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Điểm',
            field: 'point',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Chi tiết',
            field: 'detail',
            sort: 'asc',
            width: 50
        }
    ],
    rows: [
        {
            username: 'tiger',
            fullname: 'Tiger Nixon',
            startTime: '2021/11/21 12:00:00',
            endTime: '2021/11/21 13:00:00',
            total: 10,
            point: 5,
            detail:  <MDBBtn size="sm" onClick={() => alert('hi')}><i className="fa fa-info-circle"></i></MDBBtn>
        },
        {
            username: 'tiger',
            fullname: 'Tiger Nixon',
            startTime: '2021/11/21 12:00:00',
            endTime: '2021/11/21 13:00:00',
            total: 10,
            point: 5,
            detail: <MDBBtn size="sm" onClick={() => alert('hi')}><i className="fa fa-info-circle"></i></MDBBtn>
        }
    ]
}