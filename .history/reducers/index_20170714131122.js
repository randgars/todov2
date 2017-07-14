import { combineReducers } from 'redux'
import listReducer from './listReducer'
import calendarReducer from './calendarReducer'

const rootReducer = combineReducers({
    listReducer,
    calendarReducer
})

export default rootReducer