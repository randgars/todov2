import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { StackNavigator  } from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';
import { Constants } from 'expo';
import Main from './main';
import Calendar from './calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    debugger
    return (
      <MainScreenNavigator screenProps={this.props}/>
    );
  }
}

const MainScreenNavigator = StackNavigator (
  {
    Calendar: {
      screen: Calendar
    },
    Events: {
      screen: Main
    }
  },
  {
    initialRouteName: 'Calendar',
    headerMode: 'none',
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

