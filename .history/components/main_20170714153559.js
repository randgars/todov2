import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button, Vibration, Alert, Geolocation } from 'react-native';
import TodoList from './todoList/todoList';
import { width, height, totalSize } from 'react-native-dimension';
import moment from 'moment';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    };
    this.clickOnButton = this.clickOnButton.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.saveEventsList = this.saveEventsList.bind(this);
  }
  clickOnButton() {
    if (this.state.inputValue) {
      this.input.blur();
      let event = {
        event: this.state.inputValue,
        time: moment().format('h:mm a')
      }
      this.props.screenProps.actions.addItem(event);
      Vibration.vibrate([0, 200, 0, 0, 100], false);
      this.input.clear();
    } else {
      return null;
    }
  }
  saveEventsList() {
    debugger
    this.props.screenProps.actions.setDateEvents(this.props.screenProps.selectedDate, this.props.screenProps.list);
    // this.props.screenProps.datesEventsList;
  }
  onChangeInput(value) {
    this.setState({
      inputValue: value
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controlsContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={this.onChangeInput}
              placeholder="Enter todo item"
              ref={ref => (this.input = ref)}
              underlineColorAndroid="#0091FF"
              selectionColor="#0091FF"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.clickOnButton}
              title="Add"
              color="#0091FF"
              accessibilityLabel="Add"
            />
          </View>          
        </View>        
        <TodoList actions={this.props.screenProps.actions} selectedDate={this.props.screenProps.selectedDate} selectedDateEvents={this.props.screenProps.selectedDateEvents}/>
        <View style={styles.saveButtonContainer}>
          <Button
            onPress={this.saveEventsList}
            title="Save list"
            color="#0091FF"
            accessibilityLabel="Save list"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  controlsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 5,
  },
  input: {
    height: 60,
    fontSize: 20,
    color: '#2196F3',
    padding: 15
  },
  buttonContainer: {
    flex: 1
  },
  saveButtonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20
  }
})

