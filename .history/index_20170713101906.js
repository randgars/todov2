import React from 'react';

import { connect } from 'react-redux';
import { addItem } from './actions';
import { bindActionCreators } from 'redux';

import Main from './components/main'

class App extends React.Component {
  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired
  })
};

function mapStateToProps (state) {
  return {
    list: state.listReducer.list
  }
}

function mapDispatchToProps (dispatch) {
  const actions = {
    addItem
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  debugger
  return actionMap
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
