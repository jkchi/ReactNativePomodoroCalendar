import { View, Text, StyleSheet } from 'react-native';

function TaskStatsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        This is Task Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
export default TaskStatsScreen;