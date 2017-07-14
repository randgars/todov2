import { GET_CALENDAR_DATE } from './const'

function deleteItemFromList(item) {
  return {
    type: DELETE_ITEM,
    item: item
  }
}

module.exports = deleteItemFromList;