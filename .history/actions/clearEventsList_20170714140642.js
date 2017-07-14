import { CLEAR_EVENTS_LIST } from './const'

function deleteItemFromList(item) {
  return {
    type: DELETE_ITEM,
    item: item
  }
}

module.exports = deleteItemFromList;