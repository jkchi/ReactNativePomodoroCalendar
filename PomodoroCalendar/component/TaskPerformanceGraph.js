import { View, StyleSheet,Text } from 'react-native';
import { useSelector } from "react-redux";
import performWeekAgg from '../utils/performWeekAgg';
import LineChart from "./LineChart";

const TaskPerformanceGraph = () => {
  const tasks = useSelector(state => state.user.events)
  const durationData = performWeekAgg(tasks,'duration')
  const focusDurationData = performWeekAgg(tasks,'focusDuration')

  return(
    <View style = {styles.container}>
        <Text style = {styles.title}>Summary of past Seven Days</Text>
        <View style = {styles.graphContainer}>
          <LineChart
            data = {durationData}
            title= {"Planned Task Duration"}
          />
        </View>

        <View style = {styles.graphContainer}>
          <LineChart
            data = {focusDurationData}
            title= {"Actual Working Duration"}
          />
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:20,
    justifyContent:'center',
    alignContent:'center',
  },
  graphContainer:{
    marginTop:10
  },
  title:{
    marginTop:30,
    fontSize:25,
    fontWeight:'bold',
    textAlign: 'center'
  },

});

export default TaskPerformanceGraph;