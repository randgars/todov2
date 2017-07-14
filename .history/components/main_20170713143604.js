import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';
import TodoList from './todoList/todoList';

import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

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
          <TextInput
            style={{height: 50, fontSize: 20}}
            onChangeText={this.onChangeInput}
            placeholder="Enter todo item"
            ref={ref => (this.input = ref)}
            value={this.state.inputValue}
          />
          <Button
            onPress={this.clickOnButton}
            title="Add item to list"
            color="#0091FF"
            accessibilityLabel="Add item to list"
          />
          <ButtonComponent
            onPress={() => {}}
            text="Button"
            height={100}
            backgroundColors={['#4DC7A4', '#66D37A']}
  gradientStart={{ x: 0.5, y: 1 }}
  gradientEnd={{ x: 1, y: 1 }}
          >
          </ButtonComponent>
        </View>
        <TodoList actions={this.props.actions} list={this.props.list}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 30
  },
  controlsContainer: {
   flex: 1,
  }
})

