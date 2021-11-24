import React from 'react'
import { MDBBtn } from 'mdbreact'
import SubmitResult from 'components/multi-choices/submitResult/SubmitResult'
import { mapOrder } from 'utils/sorts'

export const COLUMNS = [
    {
        label: 'Câu',
        field: 'index',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Đáp án đã chọn',
        field: 'choose',
        sort: 'disabled',
        width: 200
    },
    {
        label: 'Đáp án đúng',
        field: 'correct',
        sort: 'disabled',
        width: 200
    },
    {
        label: 'Điểm tối đa',
        field: 'maxPoints',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Điểm đạt được',
        field: 'points',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Chi tiết',
        field: 'details',
        sort: 'disabled',
        width: 100
    }
]

export function calcPoints(chooseAnswers, correctAnswers, maxPoints) {
    const num = chooseAnswers.filter(c => correctAnswers.includes(c)).length

    // Cách tính 1
    // const correct = num / correctAnswers.length
    // const fail = (chooseAnswers.length - num) / correctAnswers.length
    // return maxPoints * (correct - fail)

    // Cách tính 2: Chỉ tính nếu các đáp án đã chọn trùng khớp hoàn toàn với đáp án đúng
    return num * 2 === (correctAnswers.length + chooseAnswers.length) ? maxPoints : 0
}

export default function exportData(data) {
    const chooseAnswers = mapOrder(data.chooseAnswers, data.questionsOrder, 'questionId')
    const rows = chooseAnswers.map((value, index) => {
        const item = {
            index: index + 1,
            choose: value.answers,
            correct: value.correctAnswers,
            maxPoints: value.maxPoints,
            points: calcPoints(value.answers, value.correctAnswers, value.maxPoints),
            details: <MDBBtn size="sm" onClick={() => alert(value.questionId)}><i className="fa fa-info-circle"></i></MDBBtn>
        }
        return item
    })
    const result = {
        columns: [...COLUMNS],
        rows: rows
    }

    console.log('Result', result)
    return result
}