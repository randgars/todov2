import { ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from '../actions/const'
const initialState = {
  data: []
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}