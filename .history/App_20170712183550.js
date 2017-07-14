import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.clickOnButton = this.clickOnButton.bind(this);
  }
  clickOnButton() {
    console.log('fuck yeah');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={{height: 50, fontSize: 20}}
            onChangeText={(text) => this.setState({text})}
            placeholder="Enter todo item"
          />
          <TouchableHighlight
            underlayColor="white"
            onPress={this.clickOnButton}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add item to list</Text>
            </View>
          </TouchableHighlight>
        </View>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    marginBottom: 30,
    width: 'auto',
    alignItems: 'center',
    backgroundColor: '#0091FF'
  },
  buttonText: {
    padding: 10,
    color: 'white',
    fontSize: 20
  }
})
