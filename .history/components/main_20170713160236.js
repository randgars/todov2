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
    this.input.clear();
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
            />
          </View>
          <View style={styles.buttonContainer}>
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
    flex: 2,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid'
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
  // buttonContainer: {
  //   marginTop: 80
  // },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 15,
    color: 'white',
    fontSize: 20
  }
})

