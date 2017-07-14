import React from 'react';

import { connect } from 'react-redux';
import { addItem } from './actions';

import Main from './components/main'

class App extends React.Component {
  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    list: state.listReducer.list
  }
}

function mapDispatchToProps (dispatch) {
  const actions = {
    addItem
  };
  return actions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
