import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
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
        <View style={styles.controlsContainer}>
          <TextInput
            style={{height: 50, fontSize: 20}}
            onChangeText={(text) => this.setState({text})}
            placeholder="Enter todo item"
          />
          <Button
            onPress={this.clickOnButton}
            style={{height: 50, fontSize: 25}}
            title="Add item to list"
            color="#0091FF"
            accessibilityLabel="Add item to list"
          />
        </View>
        <View style={styles.listContainer}>
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
  },
  listContainer: {
   flex: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

