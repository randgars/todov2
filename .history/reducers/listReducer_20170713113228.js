import { ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from '../actions/const'
const initialState = {
  list: []
}

export default function listReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      list.push(action.item)
      return {
        ...state,
        list: action.item
      }
    default:
      return state
  }
}