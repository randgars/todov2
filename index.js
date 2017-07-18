import React from 'react';

import { connect } from 'react-redux';
import {
  deleteItem,
  getCalendarDate,
  setDateEvents,
  getSelectedDateEvents,
  loadFonts
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
    deleteItem: PropTypes.func.isRequired,
    getCalendarDate: PropTypes.func.isRequired,
    setDateEvents: PropTypes.func.isRequired,
    getSelectedDateEvents: PropTypes.func.isRequired,
    loadFonts: PropTypes.func.isRequired
  })
};

function mapStateToProps (state) {
  const props = {
    selectedDate: state.calendarReducer.date,
    datesEventsList: state.calendarReducer.datesEventsList,
    selectedDateEvents: state.calendarReducer.selectedDateEvents,
    loadFonts: state.loadFontsReducer.loadFonts
  };
  return props;
}

function mapDispatchToProps (dispatch) {
  const actions = {
    deleteItem,
    getCalendarDate,
    setDateEvents,
    getSelectedDateEvents
  };
  let actionMap = { actions: bindActionCreators(actions, dispatch) };
  const handlers = {
    loadFonts: loadFonts.bind(this, dispatch)
  };
  actionMap.actions = Object.assign({}, actionMap.actions, handlers);

  return actionMap;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
