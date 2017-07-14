import { ADD_ITEM } from './const'

function addItemToList(item) {
  let todoList = [];
  todoList.push(item)
  return {
    type: ADD_ITEM,
    list: todoList
  }
}

module.exports = addItemToList;