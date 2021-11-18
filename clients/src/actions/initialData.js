export const initialTest = {
    id: 'test-1',
    title: 'Science',
    creator_id: 'user-1',
    status: 'DRAFT',
    start_time: '2021-11-13 08:00',
    end_time: '2021-11-14 23:59',
    questions: [
        {
            id: 'question-1',
            type: 'MULTICHOICE',
            content: 'Thuật toán sắp xếp nào là nhanh nhất trong số các thuật toán được liệt kê?',
            embeded_media: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
            embeded_media: 'https://huynhvanson.vn/wp-content/uploads/2019/03/hoc-cach-song-nhu-nuoc.jpg',
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
            embeded_media: 'https://tiengviet24h.com/wp-content/uploads/How-to-count-numbers-in-Vietnamese.jpg',
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
            embeded_media: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
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
            embeded_media: 'https://doctors24h.vn/uploads/news/04_2019/bong-hoa-chat1.jpg',
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
            embeded_media: 'https://zelvitamin.com/wp-content/uploads/2019/09/y-nghia-7-mau-sac-cau-vong.jpg',
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
            embeded_media: 'https://www.vha.ca/wp-content/uploads/2019/12/placeholder-png-2.png',
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
    questions_order: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
}

export const initialContest = [{
    id: 'contest-1',
    name: 'beCod3r',
    creator_id: 'user-1',
    description: 'Cuộc thi học thuật trực tuyến',
    tests: [
        {
            id: 'test-1',
            title: 'Science',
            description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
            creator_id: 'user-1',
            status: 'DRAFT',
            start_time: '2021-11-13 00:00',
            end_time: '2021-11-15 23:59',
            questions: [
                {
                    id: 'question-1',
                    type: 'MULTICHOICE',
                    content: 'Thuật toán sắp xếp nào là nhanh nhất trong số các thuật toán được liệt kê?',
                    embeded_media: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                    embeded_media: 'https://huynhvanson.vn/wp-content/uploads/2019/03/hoc-cach-song-nhu-nuoc.jpg',
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
                    embeded_media: 'https://tiengviet24h.com/wp-content/uploads/How-to-count-numbers-in-Vietnamese.jpg',
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
                    embeded_media: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
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
                    embeded_media: 'https://doctors24h.vn/uploads/news/04_2019/bong-hoa-chat1.jpg',
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
                    embeded_media: 'https://zelvitamin.com/wp-content/uploads/2019/09/y-nghia-7-mau-sac-cau-vong.jpg',
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
                    embeded_media: 'https://www.vha.ca/wp-content/uploads/2019/12/placeholder-png-2.png',
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
            questions_order: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
        },
        {
            id: 'test-2',
            title: 'Math',
            description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
            creator_id: 'user-1',
            status: 'DRAFT',
            start_time: '2021-11-13 08:00',
            end_time: '2021-11-13 23:59',
            questions: [
                {
                    id: 'question-1',
                    type: 'MULTICHOICE',
                    content: 'Đâu là số nguyên tố?',
                    embeded_media: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
                    answers: [
                        {
                            id: '1',
                            name: 'A',
                            content: '1'
                        },
                        {
                            id: '2',
                            name: 'B',
                            content: '2'
                        },
                        {
                            id: '3',
                            name: 'C',
                            content: '3'
                        },
                        {
                            id: '4',
                            name: 'D',
                            content: '4'
                        }
                    ],
                    correct_answers: ['2'],
                    choose_answers: ['2', '3']
                },
                {
                    id: 'question-2',
                    type: 'MULTICHOICE',
                    content: 'Số nguyên tố là gì?',
                    embeded_media: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
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
                }
            ],
            questions_order: ['question-1', 'question-2']
        },
        {
            id: 'test-3',
            title: 'Math',
            description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
            creator_id: 'user-1',
            status: 'DRAFT',
            start_time: '2021-11-13 08:00',
            end_time: '2021-11-13 23:59',
            questions: [
                {
                    id: 'question-1',
                    type: 'MULTICHOICE',
                    content: 'Đâu là số nguyên tố?',
                    embeded_media: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
                    answers: [
                        {
                            id: '1',
                            name: 'A',
                            content: '1'
                        },
                        {
                            id: '2',
                            name: 'B',
                            content: '2'
                        },
                        {
                            id: '3',
                            name: 'C',
                            content: '3'
                        },
                        {
                            id: '4',
                            name: 'D',
                            content: '4'
                        }
                    ],
                    correct_answers: ['2'],
                    choose_answers: ['2', '3']
                },
                {
                    id: 'question-2',
                    type: 'MULTICHOICE',
                    content: 'Số nguyên tố là gì?',
                    embeded_media: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
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
                }
            ],
            questions_order: ['question-1', 'question-2']
        },
        {
            id: 'test-4',
            title: 'Math',
            description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
            creator_id: 'user-1',
            status: 'DRAFT',
            start_time: '2021-11-13 08:00',
            end_time: '2021-11-13 23:59',
            questions: [
                {
                    id: 'question-1',
                    type: 'MULTICHOICE',
                    content: 'Đâu là số nguyên tố?',
                    embeded_media: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
                    answers: [
                        {
                            id: '1',
                            name: 'A',
                            content: '1'
                        },
                        {
                            id: '2',
                            name: 'B',
                            content: '2'
                        },
                        {
                            id: '3',
                            name: 'C',
                            content: '3'
                        },
                        {
                            id: '4',
                            name: 'D',
                            content: '4'
                        }
                    ],
                    correct_answers: ['2'],
                    choose_answers: ['2', '3']
                },
                {
                    id: 'question-2',
                    type: 'MULTICHOICE',
                    content: 'Số nguyên tố là gì?',
                    embeded_media: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
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
                }
            ],
            questions_order: ['question-1', 'question-2']
        },
        {
            id: 'test-5',
            title: 'Math',
            description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
            creator_id: 'user-1',
            status: 'DRAFT',
            start_time: '2021-11-13 08:00',
            end_time: '2021-11-13 23:59',
            questions: [
                {
                    id: 'question-1',
                    type: 'MULTICHOICE',
                    content: 'Đâu là số nguyên tố?',
                    embeded_media: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
                    answers: [
                        {
                            id: '1',
                            name: 'A',
                            content: '1'
                        },
                        {
                            id: '2',
                            name: 'B',
                            content: '2'
                        },
                        {
                            id: '3',
                            name: 'C',
                            content: '3'
                        },
                        {
                            id: '4',
                            name: 'D',
                            content: '4'
                        }
                    ],
                    correct_answers: ['2'],
                    choose_answers: ['2', '3']
                },
                {
                    id: 'question-2',
                    type: 'MULTICHOICE',
                    content: 'Số nguyên tố là gì?',
                    embeded_media: 'https://data.voh.com.vn/voh/thumbnail/2020/11/27/thumb-so-nguyen-to.jpg',
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
                }
            ],
            questions_order: ['question-1', 'question-2']
        }],
    start_time: '2021-11-16 00:00',
    end_time: '2021-11-17 23:59',
    url: 'https://www.facebook.com/',
    embeded_media: 'https://i.pinimg.com/564x/84/c0/46/84c046c4135434214128c7dfec4f6f12.jpg',
    status: ''
},
{
    id: 'contest-2',
    name: 'Hackathon',
    creator_id: 'user-1',
    description: 'Cuộc thi học thuật truyền thống',
    tests: [],
    start_time: '2021-11-16 00:00',
    end_time: '2021-11-18 17:00',
    url: 'https://www.google.com/',
    embeded_media: 'https://memehay.com/meme/20211010/meo-cam-bong-hoa-nao-tang-ban.jpg',
    status: ''
}]

export const emptyTest = {
    id: '',
    title: '',
    creator_id: 'user-1',
    status: 'DRAFT',
    start_time: '',
    end_time: '',
    questions: [
        {
            id: 'question-1',
            type: 'MULTICHOICE',
            content: '',
            embeded_media: '',
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
            correct_answers: ['1'],
            choose_answers: ['2', '3']
        }
    ],
    questions_order: ['question-1']
}

export const emptyQuestion = {
    id: '',
    type: 'MULTICHOICE',
    content: '',
    embeded_media: '',
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
    correct_answer: '1'
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