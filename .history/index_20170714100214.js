import React from 'react';

import { connect } from 'react-redux';
import {
  addItem,
  deleteItem
} from './actions/';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Main from './components/app'

class App extends React.Component {
  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  })
};

function mapStateToProps (state) {
  const props = {
    list: state.listReducer.list
  };
  return props;
}

function mapDispatchToProps (dispatch) {
  const actions = {
    addItem,
    deleteItem
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
