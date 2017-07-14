import { ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from '../actions/const'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}