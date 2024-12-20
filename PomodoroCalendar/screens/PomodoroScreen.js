import { View, Text, StyleSheet } from 'react-native';
import PomodoroTimer from '../component/PomodoroTimer';

function PomodoroScreen({navigation}) {
  return (
    <View style={styles.container}>
      <PomodoroTimer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
export default PomodoroScreen;