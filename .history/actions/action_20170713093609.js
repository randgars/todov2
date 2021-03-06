import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './const'

export function addItem() {
  return {
    type: ADD_ITEM
  }
}

export function addItemSuccess(data) {
  return {
    type: ADD_ITEM_SUCCESS,
    data,
  }
}

export function addItemFailure() {
  return {
    type: ADD_ITEM_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(addItem())
    getList()
      .then((data) => {
        dispatch(addItemSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}