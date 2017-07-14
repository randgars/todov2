import { SET_DATE_EVENTS } from './const'

function setDateEvents(date) {
  return {
    type: GET_CALENDAR_DATE,
    date: date
  }
}

module.exports = setDateEvents;