import { View, Text, StyleSheet } from 'react-native';
import TaskStatusTable from '../component/TaskStatusTable';

function DayTaskStatsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Summary of the Day</Text>
      <TaskStatusTable/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  title:{
    marginTop:50,
    fontSize:25,
    fontWeight:'bold',
    textAlign: 'center'
  }
});

export default DayTaskStatsScreen;
