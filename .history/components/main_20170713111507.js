import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      dataList: []
    };
    this.clickOnButton = this.clickOnButton.bind(this);
    this.taskDone = this.taskDone.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  taskDone() {

  }
  clickOnButton() {
    this.state.dataList.push(this.state.inputValue)
    this.setState({
      ...this.state,
      inputValue: null,
      dataList: this.state.dataList
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
        </View>
        {
          
        }        
        <View style={styles.listContainer}>
          <FlatList
            data={ this.state.dataList && this.state.dataList.map((item, index) => ({ key: item })) }
            renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.item}>{`${index+1}. ${item.key}`}</Text>
                <Button
                  onPress={this.taskDone}
                  title="done"
                  color="#0091FF"
                  accessibilityLabel="done"
                />
              </View>
            )}
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
  itemContainer: {
    flex: 1,
    flexDirection: 'row'
  }
})

