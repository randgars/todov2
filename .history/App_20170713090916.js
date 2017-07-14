import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './index'

const store = configureStore()

export const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)