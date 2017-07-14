import { GET_CALENDAR_DATE } from './const'

function getCalendarDate(date) {
  return {
    type: DELETE_ITEM,
    date: date
  }
}

module.exports = getCalendarDate;