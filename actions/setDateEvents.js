import { SET_DATE_EVENTS } from './const'

function setDateEvents(date, events) {
  return {
    type: SET_DATE_EVENTS,
    date: date,
    events: events
  }
}

module.exports = setDateEvents;