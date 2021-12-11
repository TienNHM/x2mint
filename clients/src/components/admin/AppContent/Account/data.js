import { COLOR } from 'utils/colors'
import { ROLE } from 'utils/constants'

export function StatisticAccount(users) {
    let labels = []
    let datasets = [{
        label: 'Điểm',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    users.map(x => {
        if (!labels.includes(x.points)) {
            labels.push(x.points)
        }
    })

    // Sắp xếp lại theo thứ tự tăng dần
    labels.sort((a, b) => a - b)

    labels.map(point => {
        var count = 0
        for (var i = 0; i < users.length; i++) {
            if (users[i].points === point) {
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

export function StatisticAccountOverview(users) {
    let res = {
        [ROLE.ADMIN]: 0,
        [ROLE.CREATOR]: 0,
        [ROLE.USER]: 0
    }

    users.map(u => {
        res[u.role] +=1
    })

    console.log(res)
    return res
}