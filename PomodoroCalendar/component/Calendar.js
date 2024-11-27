import { CalendarBody, CalendarContainer, CalendarHeader} from '@howljs/calendar-kit';
import { useRef,useEffect,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button } from 'react-native';



const Calendar = () =>{

  const now = new Date(Date.now());
  const isoString = now.toISOString();
  const calendarRef = useRef(null);
  const [leftDate,setLeftDate] = useState(isoString);
  
  // hook function get trigger after Scroll
  const handleScroll = () => {
    if (calendarRef.current) {
      setLeftDate(calendarRef.current.getVisibleStart());
    }
    else{
      console.log("not found");
    }
  };

  
  const Header = () => {

    return (
      <Text>
        {leftDate}
      </Text>
    )
  }
  
  return(
  <View style = {styles.container}>
    <CalendarContainer
      ref={calendarRef}
      onChange={handleScroll}
      >
      <CalendarHeader
      // function take a render function
        renderHeaderItem = {Header}
      />
      <CalendarBody/>
    </CalendarContainer>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft : '4%',
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