import { COLOR } from "utils/colors"
import { splitTime } from "utils/timeUtils"

export function StatisticTakeTest(takeTests) {
    let labels = []
    let datasets = [{
        label: 'Số lượng',
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

export function StatisticSubmitTime(takeTests) {
    let datasets = [{
        label: 'Thời gian',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    let datetime = takeTests.map(x => x.submitTime)
    datetime.sort((a, b) => new Date(a) - new Date(b))
    let labels = datetime.map(x => splitTime(x).date)

    labels = [...new Set(labels)]

    labels.map(date => {
        var count = 0
        for (var i = 0; i < takeTests.length; i++) {
            const d = splitTime(takeTests[i].submitTime)
            if (d.date === date) {
                count += 1
            }
        }
        datasets[0].data.push({ x: date, y: count })
    })

    console.log('datasets', datasets)

    return {
        datasets: datasets
    }
}