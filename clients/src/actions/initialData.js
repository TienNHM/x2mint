export const initialTest = {
    id: 'test-1',
    title: 'Science',
    creator_id: 'user-1',
    status: 'DRAFT',
    questions: [
        {
            id: 'question-1',
            order: 1,
            type: 'MULTICHOICE',
            content: 'Thuật toán sắp xếp nào là nhanh nhất trong số các thuật toán được liệt kê?',
            embeded_media: [
                'https://codelearn.io/Upload/Blog/dau-moi-la-thuat-toan-sap-xep-tot-nhat-63743511849.0545.jpg'
            ],
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
            order: 2,
            content: 'Công thức hóa học của nước là gì?',
            embeded_media: [
                'https://huynhvanson.vn/wp-content/uploads/2019/03/hoc-cach-song-nhu-nuoc.jpg'
            ],
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
        }
    ]
}