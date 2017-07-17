import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { StackNavigator  } from 'react-navigation';
import { Constants } from 'expo';
import Main from './main';
import Calendar from './calendar';

import {  } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <MainScreenNavigator screenProps={this.props}/>
    );
  }
}

const MainScreenNavigator = StackNavigator (
  {
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        title: 'Calendar'
      }
    },
    Events: {
      screen: Main,
      navigationOptions: {
        title: 'Calendar'
      }
    }
  },
  {
    initialRouteName: 'Calendar',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  }
})

