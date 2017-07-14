import { GET_CALENDAR_DATE } from '../actions/const'
const initialState = {
  date: null,
  datesEventsList: null
}

export default function calendarReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CALENDAR_DATE: {
      return {
        ...state,
        date: action.date
      }
    }
    case SET_DATE_EVENTS: {
      let fullDatesEvents = Object.assign([], state.list)
      newList.push(action.item)
      return {
        ...state,
        date: action.date
      }
    }
    
    default:
      return state
  }
}