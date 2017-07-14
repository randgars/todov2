import React from 'react';

import { connect } from 'react-redux';
import { fetchData } from './actions';

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
