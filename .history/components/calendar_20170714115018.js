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
        currentMonth={moment().format()}
        showEventIndicators={true}
        showControls={true}
        scrollEnabled={true}
        eventDates={['2017-07-14']}
        events={[{date:'2017-07-14', event: 'fuck off'}]}
      />
    );
  }
}