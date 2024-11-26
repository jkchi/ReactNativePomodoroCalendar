import { View, Text, StyleSheet } from 'react-native';

function DayTaskStatsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        This is Day Task Screen
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
export default DayTaskStatsScreen;