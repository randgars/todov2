import { GET_CALENDAR_DATE } from '../actions/const'
const initialState = {
  date: null,
  dateEventsList: null
}

export default function calendarReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CALENDAR_DATE: {
      return {
        ...state,
        date: action.date
      }
    }
    
    default:
      return state
  }
}