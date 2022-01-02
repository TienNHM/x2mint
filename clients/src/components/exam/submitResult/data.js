import React from 'react'

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
        label: 'Status',
        field: 'Status',
        sort: 'asc',
        width: 100
    }
]

export default function exportData(data) {

    const rows = data.chooseAnswers.map((value, index) => {
        const status = data.isCorrect[index] ?
            <img src={process.env.PUBLIC_URL + '/assets/icons/checkmark.png'} alt='T'/> :
            <img src={process.env.PUBLIC_URL + '/assets/icons/delete-sign.png'} alt='F'/>

        const statusText = data.isCorrect[index] ? 'Đúng' : 'Sai'

        const item = {
            'Câu': index + 1,
            'Đáp án đã chọn': value.answers.map(x => x).join(', '),
            'Đáp án đúng': value.question.correctAnswers.map(x => x).join(', '),
            'Đúng/Sai': statusText,
            'Status': status
        }
        return item
    })
    const result = {
        columns: [...COLUMNS],
        rows: rows
    }

    return result
}