import { LOAD_FONTS } from '../actions/const'

const initialState = {
  loadFonts: false
}

export default function loadFontsReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_FONTS: {
      return {
        ...state,
        loadFonts: true
      }
    }
    default: {
      return state
    }
  }
}