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
  }
  clickOnButton() {
    if (this.state.inputValue) {
      this.input.blur();
      let event = {
        event: this.state.inputValue,
        time: moment().format('h:mm a')
      }
      this.props.screenProps.actions.addItem(event);
      this.props.screenProps.actions.setDateEvents(this.props.screenProps.date, this.props.screenProps.list);
      debugger
      this.props.screenProps.datesEventsList;
      Vibration.vibrate([0, 200, 0, 0, 100], false);
      this.input.clear();
    } else {
      return null;
    }
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
              title="Add to list"
              color="#0091FF"
              accessibilityLabel="Add to list"
            />
          </View>
          
        </View>        
        <TodoList actions={this.props.screenProps.actions} list={this.props.screenProps.list}/>
        <View style={styles.saveButtonContainer}>
          <Button
            onPress={this.clickOnButton}
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
    flex: 1.5,
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    width: width(100)
  },
  input: {
    height: 60,
    fontSize: 20,
    color: '#2196F3',
    padding: 15
  },
  buttonContainer: {
    width: width(60)
  },
  buttonText: {
    padding: 10,
    color: 'white',
    fontSize: 20
  },
  saveButtonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: 20
  }
})

