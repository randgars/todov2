import { GET_CALENDAR_DATE } from './const'

function deleteItemFromList(date) {
  return {
    type: DELETE_ITEM,
    date: date
  }
}

module.exports = deleteItemFromList;