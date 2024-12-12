import { CalendarBody, CalendarContainer, CalendarHeader} from '@howljs/calendar-kit';
import { useRef,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import isoToMonthYear from '../utils/isoToMonthYear';
import TaskModal from './TaskModal';
import { useSelector } from 'react-redux';


const Calendar = () =>{

  const now = new Date(); 
  const currentDay = now.getDay();
  const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1; 

  const previousMonday = new Date(now); 
  previousMonday.setDate(now.getDate() - daysToSubtract); 
  const isoString = previousMonday.toISOString();
  const [timeString,setTimeString] = useState(isoString);

  const calendarRef = useRef(null);
  const [showModel, setShowModel] =  useState(false);
  const [activeEvent, setActiveEvent] =  useState(undefined);

  const showDayCount = useSelector(state => state.app.dayCount)
  const events = useSelector(state => state.user.events)
  
  // hook function get trigger after Scroll
  const handleScroll = () => {
    if (calendarRef.current) {
      setTimeString(calendarRef.current.getVisibleStart());
    }
  };

  
  const TimeHeader = () => {
    return (
      <View style = {styles.header}>
        <Text style = {styles.headerText}>
          {isoToMonthYear(timeString)}
        </Text>
      </View>
    )
  }
  
  return(
  <View style = {styles.container}>
    <TimeHeader/>
    
    <CalendarContainer
      ref={calendarRef}
      onChange={handleScroll}
      numberOfDays = {showDayCount}
      events={events}
      onPressEvent={(event) => {
        setActiveEvent({ ...event });
        setShowModel(true);
    }}
      >
      <CalendarHeader/>
      <CalendarBody/>
    </CalendarContainer>

    <TaskModal 
      event={activeEvent}
      visible = {showModel}
      onClose = {() => {
        setShowModel(false)
        setActiveEvent(null)
        }
      }
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    marginTop : '10%',
    backgroundColor:'white',
    justifyContent:"center",
  },
  header: {
    alignItems:'center'
  },
  headerText:{
    fontSize:24,
    fontWeight:"bold"
  },
});

export default Calendar

