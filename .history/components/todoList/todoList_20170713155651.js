import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
    this.taskDone = this.taskDone.bind(this);
  }
  taskDone(value) {
    this.props.actions.deleteItem(value);
    this.setState({
      ...this.state,
      dataList: this.props.list
    })
  }
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={ this.props.list && this.props.list.map((item) => ({ key: item })) }
          renderItem={({item, index}) => (
            <View style={styles.itemContainer} key={index}>
              <Text style={styles.item}>{`${index+1}. ${item.key}`}</Text>
              <Button
                onPress={this.taskDone.bind(this, index)}
                title="done"
                color="#0091FF"
                accessibilityLabel="done"
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 6,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

