import { ADD_ITEM } from './const'

function addItem(item) {
  let todoList = [];
  todoList.push(item)
  return {
    type: ADD_ITEM,
    list: []
  }
}

module.exports = addItem;