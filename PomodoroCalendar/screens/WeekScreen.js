import { View,StyleSheet,TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import Calendar from '../component/Calendar';
import { Icon } from '@rneui/themed';
import TaskModal from '../component/TaskModal';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../utils/userSlice';


// alignItems: 'center' will cause CalendarContainer not render


function WeekScreen({navigation}) {

  const [showModel, setShowModel] =  useState(false);
  const dispatch = useDispatch()

  useEffect(() => {dispatch(fetchEvents())}, []);

  const AddEventButton = () => {

    return (
      <TouchableOpacity
        style = {styles.addButton}
        onPress={ () => {
          setShowModel(true);
        }
      }
      >
        <Icon
          type="material" 
          name="add"
          size =  "60"
          color= '#007bff'
          opac
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style = {styles.container}>
      <Calendar/>

      <TaskModal 
        visible = {showModel}
        onClose = {() => setShowModel(false)}
      />

      <AddEventButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:"center",
    justifyContent: 'center',
    backgroundColor:'white',
  },
  addButton: {
    backgroundColor:'gray',
    position: "absolute",
    borderRadius:100,
    opacity: 0.65,
    bottom: 20, 
    right: 20, 
    padding: 0, 
    zIndex: 10, 
  },
});
export default WeekScreen;

