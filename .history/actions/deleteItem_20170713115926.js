import { DELETE_ITEM } from './const'

function deleteItemFromList(item) {
  return {
    type: ADD_ITEM,
    item: item
  }
}

module.exports = deleteItemFromList;