import { View, StyleSheet,Text } from 'react-native';
import { useSelector } from 'react-redux';
import TaskStatusTable from '../component/TaskStatusTable';
import TaskPerformanceGraph from '../component/TaskPerformanceGraph';

function TaskStatsScreen({ navigation }) {
  const isDaySummary = useSelector(state => state.app.isDaySummary)


  return (
    <View style={styles.container}>
      {isDaySummary === true
        ? <TaskStatusTable/>
        : <TaskPerformanceGraph/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },

});

export default TaskStatsScreen;
