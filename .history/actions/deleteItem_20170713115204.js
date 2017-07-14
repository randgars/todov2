import { DELETE_ITEM } from './const'

function deleteItem(item) {
  return {
    type: ADD_ITEM,
    item: item
  }
}

module.exports = deleteItem;