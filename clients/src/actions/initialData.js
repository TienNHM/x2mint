export const blankContest = {
    tests: [],
    name: '',
    description: '',
    url: '',
    embededMedia: '',
    startTime: '',
    endTime: '',
    status: ''
}

export const emptyTakeTest = {
    status: '',
    submitTime: '',
    chooseAnswers: [],
    questionsOrder: [],
    test: null,
    user: null
}

export const initialTest = {
    id: 'test-1',
    name: 'Science',
    creator_id: 'user-1',
    status: 'DRAFT',
    startTime: '2021-11-13 08:00',
    endTime: '2021-11-14 23:59',
    questions: [
        {
            id: 'question-1',
            type: 'MULTICHOICE',
            content: 'Thuật toán sắp xếp nào là nhanh nhất trong số các thuật toán được liệt kê?',
            embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: 'Quick Sort'
                },
                {
                    id: '2',
                    name: 'B',
                    content: 'Interchange Sort'
                },
                {
                    id: '3',
                    name: 'C',
                    content: 'Bubble Sort'
                },
                {
                    id: '4',
                    name: 'D',
                    content: 'Shaker Sort'
                }
            ],
            correct_answers: ['1'],
            choose_answers: ['2', '3']
        },
        {
            id: 'question-2',
            type: 'MULTICHOICE',
            content: 'Công thức hóa học của nước là gì?',
            embededMedia: 'https://huynhvanson.vn/wp-content/uploads/2019/03/hoc-cach-song-nhu-nuoc.jpg',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: 'NaCl'
                },
                {
                    id: '2',
                    name: 'B',
                    content: 'MgO'
                },
                {
                    id: '3',
                    name: 'C',
                    content: 'O2'
                },
                {
                    id: '4',
                    name: 'D',
                    content: 'H20'
                }
            ],
            correct_answers: ['4'],
            choose_answers: ['3']
        },
        {
            id: 'question-3',
            type: 'MULTICHOICE',
            content: 'Đâu là một khẳng định đúng?',
            embededMedia: 'https://tiengviet24h.com/wp-content/uploads/How-to-count-numbers-in-Vietnamese.jpg',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: '1+1=2'
                },
                {
                    id: '2',
                    name: 'B',
                    content: '1>2'
                },
                {
                    id: '3',
                    name: 'C',
                    content: '1 là số nguyên tố'
                },
                {
                    id: '4',
                    name: 'D',
                    content: '5 chia hết cho 2'
                }
            ],
            correct_answers: ['1'],
            choose_answers: ['4', '1']
        },
        {
            id: 'question-4',
            type: 'MULTICHOICE',
            content: 'Số nguyên tố là gì?',
            embededMedia: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: 'Số nguyên tố là số chia hết cho 2.'
                },
                {
                    id: '2',
                    name: 'B',
                    content: 'Số nguyên tố không chia hết cho 2.'
                },
                {
                    id: '3',
                    name: 'C',
                    content: 'Số nguyên tố là số chia hết cho 2, 3, 5, 7.'
                },
                {
                    id: '4',
                    name: 'D',
                    content: 'Số nguyên tố là số tự nhiên chỉ có 2 ước số.'
                }
            ],
            correct_answers: ['4'],
            choose_answers: ['1']
        },
        {
            id: 'question-5',
            type: 'MULTICHOICE',
            content: 'Axit nào mạnh nhất?',
            embededMedia: 'https://doctors24h.vn/uploads/news/04_2019/bong-hoa-chat1.jpg',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: 'CaCl2'
                },
                {
                    id: '2',
                    name: 'B',
                    content: 'H2SO4'
                },
                {
                    id: '3',
                    name: 'C',
                    content: 'H2CO3'
                },
                {
                    id: '4',
                    name: 'D',
                    content: 'H2O'
                }
            ],
            correct_answers: ['2'],
            choose_answers: ['1']
        },
        {
            id: 'question-6',
            type: 'MULTICHOICE',
            content: 'Cầu vồng có mấy màu?',
            embededMedia: 'https://zelvitamin.com/wp-content/uploads/2019/09/y-nghia-7-mau-sac-cau-vong.jpg',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: '7 màu'
                },
                {
                    id: '2',
                    name: 'B',
                    content: '6 màu'
                },
                {
                    id: '3',
                    name: 'C',
                    content: '3 màu'
                },
                {
                    id: '4',
                    name: 'D',
                    content: 'Vô số màu'
                }
            ],
            correct_answers: ['4'],
            choose_answers: ['1']
        },
        {
            id: 'question-7',
            type: 'MULTICHOICE',
            content: 'Nội dung câu hỏi',
            embededMedia: 'https://www.vha.ca/wp-content/uploads/2019/12/placeholder-png-2.png',
            answers: [
                {
                    id: '1',
                    name: 'A',
                    content: 'Câu trả lời A'
                },
                {
                    id: '2',
                    name: 'B',
                    content: 'Câu trả lời B'
                },
                {
                    id: '3',
                    name: 'C',
                    content: 'Câu trả lời C'
                },
                {
                    id: '4',
                    name: 'D',
                    content: 'Câu trả lời D'
                }
            ],
            correct_answers: ['4'],
            choose_answers: ['1']
        }
    ],
    questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
}

export const emptyTest = {
    name: '',
    status: '',
    // startTime: '',
    // endTime: '',
    questions: [],
    questionsOrder: []
}

export const emptyQuestion = {
    type: 'MULTICHOICE',
    content: '',
    embededMedia: '',
    answers: [
        {
            id: '1',
            name: 'A',
            content: ''
        },
        {
            id: '2',
            name: 'B',
            content: ''
        },
        {
            id: '3',
            name: 'C',
            content: ''
        },
        {
            id: '4',
            name: 'D',
            content: ''
        }
    ],
    correct_answers: []
}

export const questionTypes = {
    name: 'type',
    options: [
        {
            value: '1',
            label: 'Type 1',
            selected: true
        },
        {
            value: '2',
            label: 'Type 2',
            selected: false
        },
        {
            value: '3',
            label: 'Type 3',
            selected: false
        }
    ]
}

export const timeLimits = {
    name: 'time-limit',
    options: [
        {
            value: '10',
            label: '10 giây',
            selected: true
        },
        {
            value: '15',
            label: '15 giây',
            selected: false
        },
        {
            value: '30',
            label: '30 giây',
            selected: false
        },
        {
            value: '60',
            label: '60 giây',
            selected: false
        },
        {
            value: '90',
            label: '90 giây',
            selected: false
        },
        {
            value: '120',
            label: '120 giây',
            selected: false
        }
    ]
}

export const points = {
    name: 'points',
    options: [
        {
            value: '10',
            label: '10',
            selected: true
        },
        {
            value: '20',
            label: '20',
            selected: false
        },
        {
            value: '30',
            label: '30',
            selected: false
        }
    ]
}

export const musics = {
    name: 'music',
    options: [
        {
            value: 'Music 1',
            label: 'Music 1',
            selected: true
        },
        {
            value: 'Music 2',
            label: 'Music 2',
            selected: false
        },
        {
            value: 'Music 3',
            label: 'Music 3',
            selected: false
        }
    ]
}

export const answerOptions = {
    name: 'music',
    options: [
        {
            value: 'Option 1',
            label: 'Option 1',
            selected: true
        },
        {
            value: 'Option 2',
            label: 'Option 2',
            selected: false
        },
        {
            value: 'Option 3',
            label: 'Option 3',
            selected: false
        }
    ]
}