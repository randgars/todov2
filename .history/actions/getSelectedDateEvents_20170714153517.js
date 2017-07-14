import { GET_SELECTED_DATE_EVENTS } from './const'

function getSelectedDateEvents(selectedDateEvents) {
  return {
    type: GET_SELECTED_DATE_EVENTS,
    selectedDateEvents: selectedDateEvents
  }
}

module.exports = getSelectedDateEvents;