import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { View, StyleSheet, Vibration } from 'react-native';
import Calendar from 'react-native-calendar';
import moment from 'moment';
import {
  Container,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Header,
  Left,
  Body,
  Right,
  Title
} from 'native-base';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateEvents: null,
      eventsIndicators: []
    };
    this.onDateSelect = this.onDateSelect.bind(this);
    this.createEvents = this.createEvents.bind(this);
  }
  createEvents() {
    Vibration.vibrate([0, 100], false);
    this.props.navigation.navigate('Events');
  }
  onDateSelect(date) {
    let formatDate = moment(date).format('YYYY-MM-DD');
    let datesEventsList = this.props.screenProps.datesEventsList;
    this.props.screenProps.actions.getCalendarDate(formatDate);
    this.props.screenProps.actions.getSelectedDateEvents(formatDate, datesEventsList);
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          {
            this.props.screenProps.loadFonts && <Title>Calendar</Title>
          }
          </Body>
          <Right>
            <Button transparent onPress={this.createEvents}>
              <Icon name='md-create' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.container}>
          <Calendar
            customStyle={styles.calendar}
            currentMonth={moment().format()}
            showEventIndicators={true}
            scrollEnabled={true}
            events={this.props.screenProps.datesEventsList && this.props.screenProps.datesEventsList.map((item) => ({date: item.date}))}
            onDateSelect={this.onDateSelect}
          />
          {
            this.props.screenProps.selectedDateEvents &&
            <List
              style={styles.list}
              dataArray={this.props.screenProps.selectedDateEvents}
              renderRow={(item, some, index) => (
                <ListItem key={index} style={styles.itemList}>
                  <Text>{`${+index+1}. ${item.event}`}</Text>
                  <Text>{`${item.time}`}</Text>
                </ListItem>
              )}
            />
          }
          
        </Content>
      </Container>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  list: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  calendar: {
    calendarContainer: {
      backgroundColor: '#fff',
    },
    // calendarControls: {
    //   height: 60
    // },
    calendarHeading: {
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    title: {
      textAlign: 'center'
    },
    titleText: {
      fontSize: 20,
    },
    eventIndicator: {
      backgroundColor: 'blue',
      width: 5,
      height: 5,

    },
    currentDayCircle: {
      backgroundColor: 'transparent',
      borderColor: 'blue',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    selectedDayCircle: {
      backgroundColor: 'transparent',
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    currentDayText: {
      color: 'blue',
    },
    dayButton: {
      borderTopWidth: 0
    },
    dayHeading: {
      fontWeight: 'bold'
    },
    weekendDayButton: {
      backgroundColor: '#fff',
    },
    weekendDayText: {
      color: 'red',
    },
    weekendHeading: {
      color: 'red',
      fontWeight: 'bold'
    },
    selectedDayText: {
      color: 'black',
    },
  }
}