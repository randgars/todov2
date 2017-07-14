import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button, Vibration } from 'react-native';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
    this.taskDone = this.taskDone.bind(this);
  }
  taskDone(value) {
    Vibration.vibrate([0, 300], false);
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
            <View style={styles.listItemContainer} key={index}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.item}>{`${index+1}. ${item.key}`}</Text>
              </View>
              <View style={styles.itemBtnContainer}>
                <Button
                  onPress={this.taskDone.bind(this, index)}
                  title="done"
                  color="#0091FF"
                  accessibilityLabel="done"
                />
              </View>
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
    padding: 20
  },
  item: {
    fontSize: 25,
    height: 44,
    height: 'auto'
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#0091FF'
  },
  itemTextContainer: {
    flex: 3
  },
  itemBtnContainer: {
    flex: 1
  }
})

