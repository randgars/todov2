import { GET_CALENDAR_DATE } from './const'

function getCalendarDate(date) {
  return {
    type: GET_CALENDAR_DATE,
    date: date
  }
}

module.exports = getCalendarDate;