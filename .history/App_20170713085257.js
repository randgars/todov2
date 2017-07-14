import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Index from './Index'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <Index />
  </Provider>
)

AppRegistry.registerComponent('TodoProject', () => ReduxApp)