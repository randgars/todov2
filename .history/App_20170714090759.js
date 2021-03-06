import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './index';
import { StackNavigator } from 'react-navigation';

const store = configureStore()


export default class ReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}