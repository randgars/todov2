import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { View, FlatList, Text } from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format('YYYY-MM-DD')
    };
    this.onDateSelect = this.onDateSelect.bind(this);
  }
  onDateSelect(date) {
    debugger
    this.setState({
      selectedDate: moment(date).format('YYYY-MM-DD')
    })
  }
  render() {
    return (
      <View>
        <Calendar
          currentMonth={moment().format()}
          showEventIndicators={true}
          showControls={true}
          scrollEnabled={true}
          events={[{date:'2017-07-13', event: 'dfdf'}]}
          onDateSelect={this.onDateSelect}
        />
        <FlatList
          data={ this.props.screenProps.list && this.props.screenProps.list.map((item) => ({ key: item.event, time: item.time })) }
          renderItem={({item, index}) => (
            <View key={index} >
              <View >
                {
                  this.props.screenProps.list ? <Text >{`${index+1}. ${item.key} - ${item.time}`}</Text> : <Text >The list is empty</Text>
                }
                
              </View>
            </View>
          )}
        />
      </View>
      
    );
  }
}