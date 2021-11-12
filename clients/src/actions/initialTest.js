export const initialTest = {
    id: 'test-1',
    title: 'Science',
    creator_id: 'user-1',
    status: 'DRAFT',
    start_time: '',
    end_time: '',
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
            correct_answer: '1'
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
            correct_answer: '4'
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
            correct_answer: '1'
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
            correct_answer: '4'
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
            correct_answer: '2'
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
            correct_answer: '4'
        }
    ],
    questions_order: ['question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'question-7']
}