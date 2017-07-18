import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { StackNavigator  } from 'react-navigation';
import Expo from 'expo';
import Events from './events';
import Calendar from './calendar';
import { Root, Container, Content, } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadFonts()
  }
    
  render() {
    return (
      <Root>
        <MainScreenNavigator screenProps={this.props}/>
      </Root>
    );
  }
}

const MainScreenNavigator = StackNavigator (
  {
    Calendar: {
      screen: Calendar
    },
    Events: {
      screen: Events
    }
  },
  {
    initialRouteName: 'Calendar',
    cardStyle: {
      marginTop: Platform.OS === 'ios' ? 0 : 25
    },
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
)

