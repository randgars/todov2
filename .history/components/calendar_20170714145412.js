import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { View, FlatList, Text } from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateEvents: null,
      selectedDate: null
    };
    this.onDateSelect = this.onDateSelect.bind(this);
    this.displayList = this.displayList.bind(this);
  }
  onDateSelect(date) {
    let formatDate = moment(date).format('YYYY-MM-DD');
    this.setState({
      selectedDate: formatDate
    })
    this.props.screenProps.actions.getCalendarDate(formatDate);
    debugger
    
  }
  displayList() {
    for (let i = 0; i < this.props.screenProps.datesEventsList.length; i++) {
      if (this.props.screenProps.datesEventsList[i].date == this.state.selectedDate) {
        this.setState({
          selectedDateEvents: this.props.screenProps.datesEventsList[i].events
        })
      }
    }
  }
  componentDidMount() {
    if (this.props.screenProps.datesEventsList.length > 0) {
      this.displayList();
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
            data={ this.state.selectedDateEvents.map((item) => ({ key: item.event, time: item.time })) }
            renderItem={({item, index}) => (
              <View key={index} >
                <View >
                  <Text >{`${index+1}. ${item.key}`}</Text>
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