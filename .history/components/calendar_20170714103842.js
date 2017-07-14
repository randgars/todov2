import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { Calendar } from 'react-native-calendar';
import { moment } from 'moment';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Calendar
        currentMonth={moment().format("MMM Do YY")}
      />
    );
  }
}