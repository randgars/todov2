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
    list: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addItem: () => dispatch(addItem())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
