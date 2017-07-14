import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { View, FlatList, Text } from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateEvents: null
    };
    this.onDateSelect = this.onDateSelect.bind(this);
  }
  onDateSelect(date) {
    let formatDate = moment(date).format('YYYY-MM-DD');
    this.props.screenProps.actions.getCalendarDate(formatDate);
    for (let i = 0; i < this.props.screenProps.datesEventsList; i++) {
      if (this.props.screenProps.datesEventsList[i].date == formatDate) {
        this.setState({
          selectedDateEvents: this.props.screenProps.datesEventsList[i].events
        })
      }
    }
  }
  render() {
    return (
      <View>
        <Calendar
          currentMonth={moment().format()}
          showEventIndicators={true}
          showControls={true}
          scrollEnabled={true}
          events={[{date:'2017-07-13'}]}
          onDateSelect={this.onDateSelect}
        />
        <FlatList
          data={ this.props.screenProps.list && this.props.screenProps.list.map((item) => ({ key: item.event, time: item.time })) }
          renderItem={({item, index}) => (
            <View key={index} >
              <View >
                {
                  this.state.selectedDateEvents ? <Text >{`${index+1}. ${item.key} - ${item.time}`}</Text> : <Text >The list is empty</Text>
                }
              </View>
            </View>
          )}
        />
      </View>
      
    );
  }
}