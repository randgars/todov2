import { ADD_ITEM, DELETE_ITEM } from '../actions/const'
const initialState = {
  list: []
}

export default function listReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state.list.push(action.item)
      let newList = state.list
      return {
        ...state,
        list: newList
      }
    case DELETE_ITEM:
      state.list.splice(action.item, 1)
      let newList = state.list
      return {
        ...state,
        list: newList
      }
    default:
      return state
  }
}