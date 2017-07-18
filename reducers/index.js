import { combineReducers } from 'redux'
import calendarReducer from './calendarReducer'
import loadFontsReducer from './loadFontsReducer'

const rootReducer = combineReducers({
    calendarReducer,
    loadFontsReducer
})

export default rootReducer