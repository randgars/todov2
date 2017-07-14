import { ADD_ITEM, DELETE_ITEM } from '../actions/const'
const initialState = {
  list: []
}

export default function listReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      let newList = Object.assign([], state.list)
      newList.push(action.item)
      return {
        ...state,
        list: newList
      }
    }
    case DELETE_ITEM: {
      let newList = Object.assign([], state.list)
      newList.splice(action.item, 1)
      return {
        ...state,
        list: newList
      }
    }
    default:
      return state
  }
}