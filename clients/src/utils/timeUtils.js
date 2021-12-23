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

export const displayTime = (time) => {
    const datetime = splitTime(time)
    return datetime.time + ' ngày ' + datetime.date
}

export const getCurrentDatetime = () => {
    var currentdate = new Date()
    var datetime = currentdate.getDate() + '-'
        + (currentdate.getMonth() + 1) + '-'
        + currentdate.getFullYear() + ' '
        + currentdate.getHours() + ':'
        + currentdate.getMinutes() + ':'
        + currentdate.getSeconds()

    return datetime
}

export const getCurrentDate = () => {
    var currentdate = new Date()
    var date = currentdate.getFullYear()+ '-'
        + (currentdate.getMonth() + 1) + '-'
        + currentdate.getDate()

    return date
}

export const getCurrentTime = () => {
    var currentdate = new Date()
    var time = currentdate.getHours() + ':'
        + currentdate.getMinutes() + ':'
        + currentdate.getSeconds() + ':00.000'

    return time
}