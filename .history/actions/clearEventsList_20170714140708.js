import { CLEAR_EVENTS_LIST } from './const'

function clearEventsList() {
  return {
    type: CLEAR_EVENTS_LIST
  }
}

module.exports = clearEventsList;