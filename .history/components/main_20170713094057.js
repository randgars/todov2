import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 'lol' };
    this.clickOnButton = this.clickOnButton.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  clickOnButton() {
    console.log(this.state.inputValue);
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
        {
          this.props.appData.isFetching && <Text>Loading</Text>
        }
        <View style={styles.controlsContainer}>
          <TextInput
            style={{height: 50, fontSize: 20}}
            onChangeText={this.onChangeInput}
            placeholder="Enter todo item"
            ref={ref => (this.input = ref)}
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

