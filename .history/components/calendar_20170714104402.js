import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { Calendar as CalendarRN } from 'react-native-calendar';
import { moment } from 'moment';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CalendarRN
        currentMonth={'2017-07-14'}
      />
    );
  }
}