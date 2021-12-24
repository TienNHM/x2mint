export const blankContest = {
    tests: [],
    name: '',
    description: '',
    url: '',
    embededMedia: '',
    status: ''
}

export const blankTakeTest = {
    status: '',
    submitTime: '',
    chooseAnswers: [],
    questionsOrder: [],
    test: null,
    user: null
}

export const blankTest = {
    name: '',
    status: '',
    pin: '',
    // startTime: '',
    // endTime: '',
    questions: [],
    questionsOrder: []
}

export const blankQuestion = {
    type: 'MULTICHOICE',
    content: '',
    embededMedia: '',
    answers: [],
    correctAnswers: [],
    _status: ''
}

export const blankAnswer = {
    name: '',
    content: '',
    embededMedia: '',
    _status: ''
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