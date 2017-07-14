import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './index';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

const store = configureStore()


export default class ReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainScreenNavigator />
        </View>
      </Provider>
    );
  }
}

const MainScreenNavigator = TabNavigator(
  {
    Recent: { screen: App }
  },
  {
    tabBarOptions: { style: { width: width(100) } }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
})