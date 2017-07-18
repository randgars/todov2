  import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Vibration, Alert, Geolocation } from 'react-native';
import TodoList from './todoList/todoList';
import { width, height, totalSize } from 'react-native-dimension';
import moment from 'moment';

import {
  Container,
  Content,
  Button,
  Icon,
  connectStyle,
  Item,
  Input,
  Header,
  Left,
  Body,
  Right,
  Title
} from 'native-base';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      dateEvents: Object.assign([], this.props.screenProps.selectedDateEvents),
      tempDateEvents: Object.assign([], this.props.screenProps.selectedDateEvents)
    };
    this.addEventToList = this.addEventToList.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.saveEventsList = this.saveEventsList.bind(this);
  }
  addEventToList() {
    if (this.state.inputValue) {
      let event = {
        event: this.state.inputValue,
        time: moment().format('h:mm a')
      }
      this.state.tempDateEvents.push(event)
      this.setState({
        dateEvents: this.state.tempDateEvents,
        inputValue: null
      })
      Vibration.vibrate([0, 100], false);
    } else {
      return null;
    }
  }
  saveEventsList() {
    if (this.state.dateEvents.length === 0) {
      Vibration.vibrate([0, 100], false);
      return this.props.navigation.goBack();
    }
    this.props.screenProps.actions.setDateEvents(this.props.screenProps.selectedDate, this.state.dateEvents);
    this.props.navigation.goBack();
    Vibration.vibrate([0, 200], false);
  }
  onChangeInput(value) {
    this.setState({
      inputValue: value
    });
  }
  render() {
    // const styles = this.props.style;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => (this.props.navigation.goBack())}>
              <Icon name='md-arrow-round-back' />
            </Button>
          </Left>
          <Body>
          {
            this.props.screenProps.loadFonts && <Title>Events</Title>
          }
          </Body>
          <Right>
            <Button transparent onPress={this.saveEventsList}>
              <Icon name='md-done-all' />
            </Button>
          </Right>
        </Header>
        <Content style={stylesS.container}>
          <View style={styles.inputContainer}>
            <Item style={stylesS.input}>
              <Input
                placeholder="Enter todo item"
                onChangeText={this.onChangeInput}
                onSubmitEditing={this.addEventToList}
                value={this.state.inputValue}
                selectionColor="#0091FF"
                
              />
            </Item>
            <Button transparent onPress={this.addEventToList}>
              <Icon name='md-add' />
            </Button>
          </View>  
          <TodoList actions={this.props.screenProps.actions} selectedDate={this.props.screenProps.selectedDate} selectedDateEvents={this.state.dateEvents}/>
        </Content>
      </Container>
    );
  }
}
// export default connectStyle('yourTheme.CustomComponent', stylesS)(Main);
const stylesS = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  input: {
    width: width(80)
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

