import { LOAD_FONTS } from './const'

async function loadFonts(dispatch) {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  })
  dispatch({ type: LOAD_FONTS });
}

module.exports = loadFonts;