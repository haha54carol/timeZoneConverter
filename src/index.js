import moment from 'moment'

const timeZoneConverter = (dateTime, originalTimeZone, targetTimeZone, outputFormat = 'YYYY-MM-DD HH:mm:ss') => {
    const dateTimeStr = originalTimeZone > targetTimeZone ?
        moment(dateTime, 'YYYY/MM/DD HH:mm:ss').subtract(originalTimeZone -targetTimeZone, 'h')
        : moment(dateTime, 'YYYY/MM/DD HH:mm:ss').add(targetTimeZone - originalTimeZone, 'h')
    return moment(dateTimeStr, outputFormat).format(outputFormat)
}

export default timeZoneConverter