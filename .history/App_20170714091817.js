import React from 'react';
import {
  AppRegistry
} from 'react-native';

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

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: App },
  All: { screen: AllContactsScreen },
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