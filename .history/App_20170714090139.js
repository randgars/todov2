import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './index'

const store = configureStore()

class ReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}