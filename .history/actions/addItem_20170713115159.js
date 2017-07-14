import { ADD_ITEM } from './const'

function addItem(item) {
  return {
    type: ADD_ITEM,
    item: item
  }
}

module.exports = addItem;