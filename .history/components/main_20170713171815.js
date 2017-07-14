import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button, TouchableHighlight, Vibration, Alert, Geolocation } from 'react-native';
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
    if (this.state.inputValue) {
      this.props.actions.addItem(this.state.inputValue);
      this.setState({
        inputValue: null
      });
      Vibration.vibrate([0, 200], false);
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
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentPosition: 'latitude: ' + position.coords.latitude + ', longitude: ' + position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    Alert.alert(
      'Your geolocation',
      this.state.currentPosition && this.state.error,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
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
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 15,
    color: 'white',
    fontSize: 20
  }
})

