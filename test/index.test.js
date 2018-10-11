import tzConverter from '../src/index'

test('date time +08:00 should convert to -04:00', () => {
    expect(tzConverter('2018/10/11 18:00:00', 8, -4, 'YYYY/MM/DD HH:mm:ss')).toEqual('2018/10/11 06:00:00')
})

test('date time -09:00 should convert to +02:00', () => {
    expect(tzConverter('2018/10/11 18:00:00', 9, 2, 'YYYY/MM/DD HH:mm:ss')).toEqual('2018/10/11 12:00:00')
})