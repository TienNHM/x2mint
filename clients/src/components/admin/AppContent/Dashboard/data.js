export function StatisticTakeTest(takeTests) {
    let labels = []
    let datasets = [{
        label: 'Điểm',
        data: [],
        backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850'
        ]
    }]

    takeTests.map(x => {
        if (!labels.includes(x.points)) {
            labels.push(x.points)
        }
    })

    labels.map(point => {
        var count = 0
        for (var i = 0; i < takeTests.length; i++) {
            if (takeTests[i].points === point) {
                count += 1
            }
        }
        datasets[0].data.push(count)
    })

    return {
        labels: labels,
        datasets: datasets
    }
}