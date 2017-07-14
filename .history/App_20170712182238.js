import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';

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
            style={{height: 70, fontSize: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Enter todo item"
          />
          <Button
            onPress={this.clickOnButton}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Add item to list"
          />
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
})
