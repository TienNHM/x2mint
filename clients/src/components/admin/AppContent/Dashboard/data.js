import { COLOR } from 'utils/colors'

export function StatisticTakeTest(takeTests) {
    let labels = []
    let datasets = [{
        label: 'Điểm',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    takeTests.map(x => {
        if (!labels.includes(x.points)) {
            labels.push(x.points)
        }
    })

    // Sắp xếp lại theo thứ tự tăng dần
    labels.sort((a, b) => a - b)

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