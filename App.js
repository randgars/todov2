import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './index';

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