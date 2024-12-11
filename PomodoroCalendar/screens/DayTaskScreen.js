import { View, Text, StyleSheet } from 'react-native';
import TimePickerModal from '../component/TimePickerModal';
function DayTaskStatsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Day Task Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 40,
    width: 200,
  },
});

export default DayTaskStatsScreen;
