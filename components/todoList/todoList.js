import React from 'react';
import { StyleSheet, TextInput, FlatList, View, Vibration } from 'react-native';


import { Button, Icon, Text, List, ListItem } from 'native-base';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.taskDone = this.taskDone.bind(this);
  }
  taskDone(value) {
    this.props.actions.deleteItem(value);
  }
  render() {
    return (
      <View style={styles.listContainer}>
        <List
          style={stylesS.list}
          dataArray={ this.props.selectedDateEvents }
          renderRow={(item, some, index) => (
            <ListItem key={index} style={stylesS.listItem}>
              <Text>{`${+index+1}. ${item.event}`}</Text>
              <Button transparent light onPress={this.taskDone.bind(this, index)}>
                <Icon name='md-close' style={stylesS.cloceIcon} />
              </Button>
            </ListItem>
          )}
        />
      </View>
    );
  }
}

const stylesS = {
  listItem: {
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 0
  },
  cloceIcon: {
    color: '#000'
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 7,
    paddingTop: 20
  }
})

