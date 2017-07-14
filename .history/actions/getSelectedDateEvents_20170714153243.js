import { GET_SELECTED_DATE_EVENTS } from './const'

function getCalendarDate(date) {
  return {
    type: GET_CALENDAR_DATE,
    date: date
  }
}

module.exports = getCalendarDate;