import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import TodoList from './todoList/todoList';
// import {  } from 'react-navigation';
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
        <Navigator
          initialRoute = {{
            id: 'Main'
          }}
          renderScene={
            this.navigatorRenderScene
          }
        />
      </View>
    );
  }
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Main':
        return (<Main navigator={navigator} title='Events' screenProps={this.props}/>)
    }
  }
}

// const MainScreenNavigator = TabNavigator(
//   {
//     Calendar: { screen: Calendar },
//     Events: { screen: Main }
    
//   },
//   {
//     tabBarOptions: { style: { width: width(100) } }
//   });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  }
})