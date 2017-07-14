import { ADD_ITEM } from './const'

export function addItem() {
  return {
    type: ADD_ITEM,
    list: []
  }
}