import moment from 'moment'

const tzConverter = (dateTime, originalTimeZone, targetTimeZone, outputFormat = 'YYYY-MM-DD HH:mm:ss') => {
    const dateTimeStr = dateTime.concat(originalTimeZone >= 0 ? '+' : '-')
        .concat(('0' + Math.abs(originalTimeZone)).slice(-2))
    return moment(dateTimeStr).utcOffset(targetTimeZone).format(outputFormat)
}

export default tzConverter