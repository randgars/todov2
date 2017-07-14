import { ADD_ITEM } from './const'

export function addItem(item) {
  let todoList = [];
  todoList.push(item)
  return {
    type: ADD_ITEM,
    list: []
  }
}