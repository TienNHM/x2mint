export const timeDelta = (start, end) => {
    const diff = new Date(end).getTime() - new Date(start).getTime()
    const days = diff / (1000 * 60 * 60 * 24)
    const hours = (days % 1) * 24
    const minutes = (hours % 1) * 60
    const seconds = (minutes % 1) * 60
    return {
        days: days | 0,
        hours: hours | 0,
        minutes: minutes | 0,
        seconds: seconds | 0
    }
}

export const displayTimeDelta = (start, end) => {
    const diff = timeDelta(start, end)
    return (diff.days > 0 ? diff.days + ' ngày ' : '') +
        (diff.hours > 0 ? diff.hours + ' giờ ' : '') +
        (diff.minutes > 0 ? diff.minutes + ' phút ' : '') +
        (diff.seconds > 0 ? diff.seconds + ' giây.' : '')
}

export const splitTime = (time) => {
    const arr = time.split('T')
    if (arr.length === 2) {
        return {
            date: arr[0],
            time: arr[1].substr(0, 5)
        }
    }
    else {
        return {
            date: '1970-01-01',
            time: '08:00'
        }
    }
}