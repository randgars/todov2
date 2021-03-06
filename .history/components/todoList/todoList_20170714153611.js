import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button, Vibration } from 'react-native';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.taskDone = this.taskDone.bind(this);
    this.getSalectedDateEvents = this.getSalectedDateEvents.bind(this);
  }
  taskDone(value) {
    Vibration.vibrate([0, 500], false);
    this.props.actions.deleteItem(value);
  }
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={ this.props.selectedDateEvents && this.props.selectedDateEvents.map((item) => ({ key: item.event})) }
          renderItem={({item, index}) => (
            <View style={styles.listItemContainer} key={index} >
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
    flex: 7,
    paddingTop: 20
  },
  item: {
    fontSize: 20,
    height: 44,
    height: 'auto'
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 5,
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

