import { GET_SELECTED_DATE_EVENTS } from './const'

function getSelectedDateEvents(date, datesEventsList) {
  let selectedDateEvents;
  let tempArray = [];
  for (let i = 0; i < datesEventsList.length; i++) {
    if (datesEventsList[i].date == date) {
      tempArray.unshift(datesEventsList[i].events)
    }
  }
  if (tempArray.length > 0) {
    selectedDateEvents = tempArray[0]
  } else {
    selectedDateEvents = null
  }
  return {
    type: GET_SELECTED_DATE_EVENTS,
    selectedDateEvents: selectedDateEvents
  }
}

module.exports = getSelectedDateEvents;