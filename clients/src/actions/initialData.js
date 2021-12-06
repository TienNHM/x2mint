// Ok

export const initialContest = [
    {
        id: 'contest-1',
        name: 'beCod3r',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/f6/9b/34/f69b34664600b002caec9d453d687353.jpg',
        status: ''
    },
    {
        id: 'contest-2',
        name: 'Hackathon',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật truyền thống',
        tests: [],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-18 17:00',
        url: 'https://www.google.com/',
        embededMedia: 'https://i.pinimg.com/564x/f5/5d/70/f55d7031f86c87baaa2f436be3a53fa2.jpg',
        status: ''
    },
    {
        id: 'contest-3',
        name: 'Mastering IT',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg',
        status: ''
    },
    {
        id: 'contest-4',
        name: 'HackerRank',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/736x/2e/b0/9a/2eb09aedac644002c5103bcefa4ce1fd.jpg',
        status: ''
    },
    {
        id: 'contest-5',
        name: 'DoIt',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/73/91/ad/7391ad515adc720efaedcc503bace566.jpg',
        status: ''
    },
    {
        id: 'contest-1',
        name: 'OOP',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/a9/39/ee/a939ee6dc01d18f252639e59e609a4f7.jpg',
        status: ''
    },
    {
        id: 'contest-7',
        name: 'ICPC',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/11/b4/42/11b442d7aec2d7798a387cbf016429c7.jpg',
        status: ''
    },
    {
        id: 'contest-8',
        name: 'Animal',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/b6/2a/6c/b62a6cd76abc74602ef54c1697c740f1.jpg',
        status: ''
    },
    {
        id: 'contest-9',
        name: 'Coding',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/e9/63/b8/e963b82b23a8c2253a154c75c41bdc54.jpg',
        status: ''
    },
    {
        id: 'contest-10',
        name: 'BK',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-11-17 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/ec/77/1f/ec771fde141fc0888833590143eca28a.jpg',
        status: ''
    },
    {
        id: 'contest-1',
        name: 'HKC',
        creator_id: 'user-1',
        description: 'Cuộc thi học thuật trực tuyến',
        tests: [
            {
                id: 'test-1',
                name: 'Science',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về các chủ đề khoa học tự nhiên, khoa học xã hội.',
                creator_id: 'user-1',
                url: 'https://www.google.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 11:30',
                maxPoints: 70,
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
                                content: 'Quick Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'Interchange Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'Bubble Sort',
                                question_id: 'question-1',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'Shaker Sort',
                                question_id: 'question-1',
                                status: ''
                            }
                        ],
                        correct_answers: ['A'],
                        maxPoints: 10,
                        status: ''
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
                                content: 'NaCl',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '2',
                                name: 'B',
                                content: 'MgO',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '3',
                                name: 'C',
                                content: 'O2',
                                question_id: 'question-2',
                                status: ''
                            },
                            {
                                id: '4',
                                name: 'D',
                                content: 'H20',
                                question_id: 'question-2',
                                status: ''
                            }
                        ],
                        correct_answers: ['D'],
                        maxPoints: 10,
                        status: ''
                    }
                ],
                questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
            },
            {
                id: 'test-2',
                name: 'Math',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến về toán học.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-3',
                name: 'OOP',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-04 08:00',
                endTime: '2021-12-04 20:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-4',
                name: 'English',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-5',
                name: 'C/C++',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-6',
                name: 'History',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-12-03 08:00',
                endTime: '2021-12-05 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-7',
                name: 'DBMS',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            },
            {
                id: 'test-8',
                name: 'Physics',
                description: 'Bài kiểm tra trắc nghiệm trực tuyến.',
                creator_id: 'user-1',
                url: 'http://github.com',
                status: 'DRAFT',
                startTime: '2021-11-29 08:00',
                endTime: '2021-11-29 10:00',
                maxPoints: 20,
                questions: [
                    {
                        id: 'question-1',
                        type: 'MULTICHOICE',
                        content: 'Đâu là số nguyên tố?',
                        maxPoints: 10,
                        embededMedia: 'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg',
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
                        correct_answers: ['B']
                    },
                    {
                        id: 'question-2',
                        type: 'MULTICHOICE',
                        content: 'Số nguyên tố là gì?',
                        maxPoints: 10,
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
                        correct_answers: ['D']
                    }
                ],
                questionsOrder: ['question-1', 'question-2']
            }

        ],
        startTime: '2021-11-16 00:00',
        endTime: '2021-12-31 23:59',
        url: 'https://github.com/x2mint/',
        embededMedia: 'https://i.pinimg.com/564x/71/b7/36/71b7367a8ae1be02cc9b12cee13dafa4.jpg',
        status: ''
    }
]

export const initialTakeTest = {
    id: 'take-test-1',
    testId: 'test-1',
    testName: 'Science',
    testUrl: 'https://fb.com',
    userId: 'user-1',
    username: 'tiennhm',
    fullname: 'Nguyễn Huỳnh Minh Tiến',
    status: 'DRAFT',
    points: 20, // số điểm đạt được của bài test
    submitTime: '2021-11-13 00:00',
    chooseAnswers: [
        {
            questionId: 'question-1',
            answers: ['A', 'D'],
            correctAnswers: ['D'],
            maxPoints: 10 // Điểm tối đa của câu hỏi question-1
        },
        {
            questionId: 'question-2',
            answers: ['A'],
            correctAnswers: ['A'],
            maxPoints: 10
        },
        {
            questionId: 'question-3',
            answers: ['C'],
            correctAnswers: ['B'],
            maxPoints: 10
        },
        {
            questionId: 'question-4',
            answers: ['A', 'C'],
            correctAnswers: ['C', 'A'],
            maxPoints: 10
        }
    ],
    questionsOrder: ['question-1', 'question-2', 'question-3', 'question-4']
}

export const blankContest = {
    id: '',
    creator_id: 'user-1',
    tests: [],
    name: '',
    description: '',
    url: '',
    embededMedia: '',
    startTime: '',
    endTime: '',
    status: ''
}

/// Nháp

export const emptyTakeTest = {
    status: '',
    points: 0,
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
    id: '',
    name: '',
    creator_id: 'user-1',
    status: 'DRAFT',
    startTime: '',
    endTime: '',
    questions: [
        {
            id: 'question-1',
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
            correct_answers: ['1']
        }
    ],
    questionsOrder: ['question-1']
}

export const emptyQuestion = {
    _id: '',
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