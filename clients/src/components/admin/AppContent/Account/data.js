import { COLOR } from 'utils/colors'
import { ROLE } from 'utils/constants'
import { splitTime } from 'utils/timeUtils'

export function StatisticAccountSignUp(users) {

    let datasets = [{
        label: 'Thời gian',
        data: [],
        backgroundColor: COLOR.TABLEAU.NEW.HueCircle19
    }]

    let datetime = users.map(x => x.createdAt)
    datetime.sort((a, b) => new Date(a) - new Date(b))
    const labels = datetime.map(x => splitTime(x).date)

    labels.map(date => {
        var count = 0
        for (var i = 0; i < users.length; i++) {
            const d = splitTime(users[i].createdAt)
            if (d.date === date) {
                count += 1
            }
        }
        datasets[0].data.push({ x: date, y: count })
    })

    return {
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
        res[u.role] += 1
    })

    return res
}