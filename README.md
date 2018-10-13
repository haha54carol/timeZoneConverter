# time-zone-converter
[![Coverage Status](https://coveralls.io/repos/github/haha54carol/timeZoneConverter/badge.svg?branch=master)](https://coveralls.io/github/haha54carol/timeZoneConverter?branch=master)

> Easiest way to convert your date time to specific time zone.

## How to Use?
### Installation

```javascript

# npm 
npm install time-zone-converter

# yarn
yarn add time-zone-converter

```

### Import
```javascript

import timeZoneConverter from 'time-zone-converter'

```
#### Arguments

timeZoneConverter(originalDateTime, originalTimeZone, targetTimeZone, outputFormat)


```javascript

const newDateTime = timeZoneConverter('2018/10/11 18:00:00', 8, -4, 'YYYY/MM/DD HH:mm:ss')
console.log(newDateTime) // '2018/10/11 06:00:00'

```

| Arguments | Type | Example | isRequired | Format |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| originalDateTime | String | '2018/10/10' or '2018/10/10 18:00:00' | Required | YYYY/MM/DD HH:mm:ss |
| originalTimeZone | Number | -4 | Required | -12 ~ 12 |
| targetTimeZone | Number | 8 | Required | -12 ~ 12 |
| outputFormat | String | 'YYYY/MM/DD HH:mm:ss' |  Optional | Default is YYYY-MM-DD HH:mm:ss |

