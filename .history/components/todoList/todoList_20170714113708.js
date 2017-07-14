import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button, Vibration } from 'react-native';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.taskDone = this.taskDone.bind(this);
  }
  taskDone(value) {
    Vibration.vibrate([0, 500], false);
    this.props.actions.deleteItem(value);
  }
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={ this.props.list && this.props.list.map((item) => ({ key: item.event, time: item.time })) }
          renderItem={({item, index}) => (
            <View style={styles.listItemContainer} key={index} >
              <View style={styles.itemTextContainer}>
                <Text style={styles.item}>{`${index+1}. ${item.key} - ${item.time}`}</Text>
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
    paddingTop: 20
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
    borderBottomColor: '#0091FF',
    paddingHorizontal: 20
  },
  itemTextContainer: {
    flex: 3
  },
  itemBtnContainer: {
    flex: 1
  }
})

