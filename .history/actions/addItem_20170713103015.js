import { ADD_ITEM } from './const'

export function addItemToList(item) {
  let todoList = [];
  todoList.push(item)
  return {
    type: ADD_ITEM,
    list: []
  }
}