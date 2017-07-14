import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button, TouchableHighlight } from 'react-native';
import TodoList from './todoList/todoList';

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
    this.props.actions.addItem(this.state.inputValue);
    this.setState({
      ...this.state,
      inputValue: null
    })
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
              value={this.state.inputValue}
              underlineColorAndroid="#0091FF"
            />
          </View>
          <View style={styles.inputContainer}>
            <TouchableHighlight onPress={this.clickOnButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add to list</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <TodoList actions={this.props.actions} list={this.props.list}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  controlsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    width: '100%'
  },
  input: {
    height: 70,
    fontSize: 25,
    color: '#0091FF',
    fontWeight: 'normal',
    padding: 15
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    marginTop: 50
  }
})

