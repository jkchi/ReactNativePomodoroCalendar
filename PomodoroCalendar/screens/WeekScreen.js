import { View, Text, StyleSheet,TouchableOpacity,Button } from 'react-native';
import { useRef,useEffect } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import Calendar from '../component/Calendar';

// alignItems: 'center' will cause CalendarContainer not render


function WeekScreen({navigation}) {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);


  return (
    <View style = {styles.container}>

      <Text>
        This is Week Scren
      </Text>

      <TouchableOpacity
        onPress={ () => {
          navigation.navigate('Day')
        }}
      >
        <Text>
         go to Day
        </Text>
      </TouchableOpacity>

      <Calendar/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  }
});
export default WeekScreen;

