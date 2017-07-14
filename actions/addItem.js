import { ADD_ITEM } from './const'

function addItemToList(item) {
  return {
    type: ADD_ITEM,
    item: item
  }
}

module.exports = addItemToList;