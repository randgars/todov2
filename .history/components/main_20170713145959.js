import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';
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

          <View style={styles.buttonContainer}>
            <Button
              onPress={this.clickOnButton}
              title="Add item to list"
              color="#0091FF"
              accessibilityLabel="Add item to list"
            />
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
  buttonContainer: {
    flexDirection: 'row',
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
  }
})

