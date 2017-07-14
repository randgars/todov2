import React from 'react';
import { StyleSheet, TextInput, FlatList, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { fetchData } from './actions';

import App from './components/app'

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
      <App {...this.props}/>
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

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
