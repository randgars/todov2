import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './todoList/todoList';
import { TabNavigator } from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';
import { Constants } from 'expo';
import Main from './main';
import Calendar from './calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator screenProps={this.props}/>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator(
  {
    Events: { screen: Main },
    Calendar: { screen: Calendar }
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