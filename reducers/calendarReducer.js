import { GET_CALENDAR_DATE, SET_DATE_EVENTS, GET_SELECTED_DATE_EVENTS, DELETE_ITEM } from '../actions/const'

import moment from 'moment';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  datesEventsList: [],
  selectedDateEvents: null
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
      let fullDatesEvents = Object.assign([], state.datesEventsList)
      let dateEvents = {
        date: action.date,
        events: action.events
      }
      fullDatesEvents.push(dateEvents)
      return {
        ...state,
        datesEventsList: fullDatesEvents
      }
    }
    case GET_SELECTED_DATE_EVENTS: {
      return {
        ...state,
        selectedDateEvents: action.selectedDateEvents
      }
    }

    case DELETE_ITEM: {
      let newList = Object.assign([], state.selectedDateEvents)
      newList.splice(action.item, 1)
      return {
        ...state,
        selectedDateEvents: newList
      }
    }
    
    default:
      return state
  }
}