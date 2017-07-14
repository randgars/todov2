import { GET_SELECTED_DATE_EVENTS } from './const'

function getSelectedDateEvents(date) {
  return {
    type: GET_SELECTED_DATE_EVENTS,
    selectedDateEvents: date
  }
}

module.exports = getSelectedDateEvents;