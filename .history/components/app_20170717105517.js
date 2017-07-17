import React from 'react';
import { StyleSheet, View } from 'react-native';
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
      <View style={styles.container}>
        <MainScreenNavigator screenProps={this.props}/>
      </View>
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
        title: 'Events'
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  }
})