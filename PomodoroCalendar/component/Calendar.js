import { CalendarBody, CalendarContainer, CalendarHeader} from '@howljs/calendar-kit';
import { useRef,useEffect,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button } from 'react-native';
import IsoToEng from '../utils/IsoToEng';


const Calendar = () =>{

  const now = new Date(); 
  const currentDay = now.getDay();
  const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1; 

  const previousMonday = new Date(now); 
  previousMonday.setDate(now.getDate() - daysToSubtract); 
  const isoString = previousMonday.toISOString();

  const calendarRef = useRef(null);
  const [timeString,setTimeString] = useState(isoString);

  
  // hook function get trigger after Scroll
  const handleScroll = () => {
    if (calendarRef.current) {
      setTimeString(calendarRef.current.getVisibleStart());
      // console.log(timeString);
    }
    else{
      console.log("not found");
    }
  };

  
  const TimeHeader = () => {
    return (
      <View style = {styles.header}>
        <Text style = {styles.headerText}>
          {IsoToEng(timeString)}
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
      >
      <CalendarHeader/>
      <CalendarBody/>
    </CalendarContainer>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft : '4%',
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


// const goToToday = () => {
//   if (calendarRef.current) {
//     calendarRef.current.goToDate({
//       date: new Date().toISOString(),
//       animatedDate: true,
//       hourScroll: true,
//       animatedHour: true,
//     });
//   }
// };