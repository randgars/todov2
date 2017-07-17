import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { View, FlatList, Text } from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';

export default class CalendarComponent extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedDateEvents: null
    };
    this.onDateSelect = this.onDateSelect.bind(this);
    this.displayList = this.displayList.bind(this);
  }
  onDateSelect(date) {
    debugger
    let formatDate = moment(date).format('YYYY-MM-DD');
    this.props.screenProps.actions.getCalendarDate(formatDate);
    this.displayList(formatDate);
    this.props.navigator.push({
      id: 'Main'
    })
  }
  displayList(formatDate) {
    debugger
    for (let i = 0; i < this.props.screenProps.datesEventsList.length; i++) {
      if (this.props.screenProps.datesEventsList[i].date == formatDate) {
        debugger
        this.props.screenProps.actions.getSelectedDateEvents(this.props.screenProps.datesEventsList[i].events);
        this.setState({
          selectedDateEvents: this.props.screenProps.datesEventsList[i].events
        })
        return;
      }
      else {
        this.setState({
          selectedDateEvents: null
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
        {
          this.state.selectedDateEvents ?
          <FlatList
            data={ this.state.selectedDateEvents.map((item, index) => ({ key: index, event: item.event, time: item.time })) }
            renderItem={({item, index}) => (
              <View key={index} >
                <View >
                  <Text >{`${index+1}. ${item.event}`}</Text>
                  <Text >{`${item.time}`}</Text>
                </View>
              </View>
            )}
          />
          : <Text >The list is empty</Text>
        }
        
      </View>
      
    );
  }
}