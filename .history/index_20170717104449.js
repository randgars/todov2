import React from 'react';

import { connect } from 'react-redux';
import {
  addItem,
  deleteItem,
  getCalendarDate,
  setDateEvents,
  getSelectedDateEvents
} from './actions/';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Main from './main';
import Calendar from './calendar';
import { StackNavigator  } from 'react-navigation';

// import Main from './components/app'

class App extends React.Component {
  render() {
    return (
      <MainScreenNavigator {...this.props}/>
    );
  }
}

const MainScreenNavigator = StackNavigator (
  {
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        title: 'Calendar'
      }
    },
    Events: {
      screen: Main,
      navigationOptions: {
        title: 'Events'
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

App.propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    getCalendarDate: PropTypes.func.isRequired,
    setDateEvents: PropTypes.func.isRequired,
    getSelectedDateEvents: PropTypes.func.isRequired
  })
};

function mapStateToProps (state) {
  const props = {
    list: state.listReducer.list,
    selectedDate: state.calendarReducer.date,
    datesEventsList: state.calendarReducer.datesEventsList,
    selectedDateEvents: state.calendarReducer.selectedDateEvents
  };
  return props;
}

function mapDispatchToProps (dispatch) {
  const actions = {
    addItem,
    deleteItem,
    getCalendarDate,
    setDateEvents,
    getSelectedDateEvents
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
