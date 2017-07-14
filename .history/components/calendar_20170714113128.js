import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import Calendar from 'react-native-calendar';
import moment from 'moment';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Calendar
        currentMonth={'2017-08-01'}
      />
    );
  }
}