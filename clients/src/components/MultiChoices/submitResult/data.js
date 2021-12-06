import React from 'react'
import { MDBBtn } from 'mdbreact'
import SubmitResult from 'components/MultiChoices/submitResult/SubmitResult'
import { mapOrder } from 'utils/sorts'

export const COLUMNS = [
    {
        label: 'Câu',
        field: 'Câu',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Đáp án đã chọn',
        field: 'Đáp án đã chọn',
        sort: 'disabled',
        width: 200
    },
    {
        label: 'Đáp án đúng',
        field: 'Đáp án đúng',
        sort: 'disabled',
        width: 200
    },
    {
        label: 'Điểm tối đa',
        field: 'Điểm tối đa',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Điểm đạt được',
        field: 'Điểm đạt được',
        sort: 'asc',
        width: 100
    }
]

export default function exportData(data) {
    const rows = data.chooseAnswers.map((value, index) => {
        const item = {
            'Câu': index + 1,
            'Đáp án đã chọn': value.answers.map(x => x).join(', '),
            'Đáp án đúng': value.question.correctAnswers.map(x => x).join(', '),
            'Điểm tối đa': value.question.maxPoints,
            'Điểm đạt được': value.points | 0
        }
        return item
    })
    const result = {
        columns: [...COLUMNS],
        rows: rows
    }

    return result
}